import styled from "styled-components";

interface MainProps {
  children: React.ReactNode;
}

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex-grow: 1;
`;

const Main = ({ children }: MainProps) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default Main;
