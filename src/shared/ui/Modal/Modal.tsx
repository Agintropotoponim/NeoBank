import { ReactNode } from "react";
import styled from "styled-components";

interface IModalProps {
    visible: boolean,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
    children: ReactNode
}

const ModalContainer = styled.div<{ visible?: boolean }>`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: ${({ visible }) => visible ? "flex" : "none"};
    background: ${({ theme }) => theme.colors.modal.background};
    align-items: center;
    justify-content: center;
`;

const Content = styled.div`
    background: ${({ theme }) => theme.colors.modal.contentBackground};
    padding: 15px;
    z-index: 1;
`;


export const Modal: React.FC<IModalProps> = ({ visible, setVisible, children }) => {

    const clickFn = () => setVisible(false);
    const clickContentFn = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation();

    return (
        <ModalContainer visible={visible} onClick={clickFn}>
            <Content onClick={(e) => clickContentFn(e)}>
                {children}
            </Content>
        </ModalContainer>
    )
}