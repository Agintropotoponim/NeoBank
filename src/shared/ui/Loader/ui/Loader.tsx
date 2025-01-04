import styled from "styled-components";

export const Loader = styled.div`
margin: 0 auto;
width: 70px;
height: 70px;
border: ${({ theme }) => theme.colors.loader.mainBorder};
border-top-color: ${({ theme }) => theme.colors.loader.spinner};
border-radius: 50%;
animation: spin 1.2s linear infinite;

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;