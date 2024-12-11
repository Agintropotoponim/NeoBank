import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNews } from '../lib/hooks/useNews';
import { NewsCard } from '../components/NewsCard';
import { ReactComponent as ButtonLeftActive } from '../assets/button-active-left.svg';
import { ReactComponent as ButtonLeftDisabled } from '../assets/button-disabled-left.svg';
import { ReactComponent as ButtonRightActive } from '../assets/button-active-right.svg';
import { ReactComponent as ButtonRightDisabled } from '../assets/button-disabled-right.svg';
import { device } from 'shared/config/theme/device';


const SliderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    height: 550px;
`;

const LowerSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

const NavButtonContainer = styled.div`
    display: flex;
    gap: 20px;
`;

const NavButton = styled.button<{ disabled: boolean }>`
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SliderWrapper = styled.div`
    display: flex;
    gap: 65px;
    overflow: hidden;
    width: 1300px;
    max-width: 100%;
    scroll-behavior: smooth;
    height: 500px;
    padding: 0px 2px;

    @media ${device.desktopS} {
        width: 900px;
    }
    @media ${device.laptopS} {
        width: 500px;
    }
    @media ${device.tabletS} {
        width: 325px;
    }
`;

export const NewsSlider: React.FC = () => {

    const sliderRef = useRef<HTMLDivElement | null>(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [scrollAmount, setScrollAmount] = useState(300);

    const { validArticles, isLoading, error } = useNews();

    const updateScrollStatus = () => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
            setIsAtStart(scrollLeft === 0);
            setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
        }
    };

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.addEventListener('scroll', updateScrollStatus);
            updateScrollStatus();
            return () => {
                sliderRef.current?.removeEventListener('scroll', updateScrollStatus);
            };
        }
    }, []);

    const scrollSlider = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const scrollValue = direction === 'left' ? -scrollAmount : scrollAmount;
            sliderRef.current.scrollBy({ left: scrollValue, behavior: 'smooth' });
            setTimeout(updateScrollStatus, 300);
        }
    };

    const handleSwipe = (e: React.TouchEvent) => {
        const touchStart = e.touches[0].clientX;

        const handleTouchMove = (moveEvent: TouchEvent) => {
            const touchEnd = moveEvent.touches[0].clientX;
            if (touchStart - touchEnd > 50) {
                scrollSlider('right');
                document.removeEventListener('touchmove', handleTouchMove);
            } else if (touchEnd - touchStart > 50) {
                scrollSlider('left');
                document.removeEventListener('touchmove', handleTouchMove);
            }
        };

        document.addEventListener('touchmove', handleTouchMove);
    };

    const NewsCardContent = validArticles.map((article, index) => (
        <NewsCard key={index} {...article} />
    ))

    const scrollLeftHandler = () => {
        scrollSlider('left');
    }

    const scrollRightHandler = () => {
        scrollSlider('right');
    }

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading news. Please try again later.</p>;

    return (
        <SliderContainer>
            <SliderWrapper ref={sliderRef} onTouchStart={handleSwipe}>
                {NewsCardContent}
            </SliderWrapper>
            <LowerSection>
                <NavButtonContainer>
                    <NavButton onClick={scrollLeftHandler} disabled={isAtStart}>
                        {isAtStart ? <ButtonLeftDisabled /> : <ButtonLeftActive />}
                    </NavButton>
                    <NavButton onClick={scrollRightHandler} disabled={isAtEnd}>
                        {isAtEnd ? <ButtonRightDisabled /> : <ButtonRightActive />}
                    </NavButton>
                </NavButtonContainer>
            </LowerSection>
        </SliderContainer>
    );
};
