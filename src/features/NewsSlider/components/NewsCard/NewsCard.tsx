import { NewsArticle } from "features/NewsSlider/model/NewsArticle";
import { device } from "shared/config/theme/device";
import styled from "styled-components";


const Card = styled.div`
    width: 320px;
    height: 448px;
    box-sizing: border-box;
    background: ${({ theme }) => theme.colors.newsCard.background};
    box-shadow: ${({ theme }) => theme.colors.newsCard.shadowLight}, ${({ theme }) => theme.colors.newsCard.shadowDark};
    border-radius: 28px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
`;

const Title = styled.h2`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    color: ${({ theme }) => theme.colors.textTertiary};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    height: 100px;
`;

const Description = styled.p`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    color: ${({ theme }) => theme.colors.textTertiary};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    height: 150px;
`;

const Illustration = styled.img`
    width: 256px;
    height: 120px;
    box-sizing: border-box;
`;

const TextContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 300px;
    width: 100%;
`

export const NewsCard: React.FC<NewsArticle> = (article: NewsArticle) => {

    const defaultImg = require('../../assets/default.svg').default;

    const illustrationErrorHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        (e.target as HTMLImageElement).src = defaultImg;
    }

    return (
        <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Card>
                <Illustration
                    src={article.urlToImage || defaultImg}
                    alt={article.title}
                    onError={illustrationErrorHandler}
                />
                <TextContentContainer>
                    <Title>{article.title}</Title>
                    <Description>{article.description}</Description>
                </TextContentContainer>
            </Card>
        </a>
    );
};
