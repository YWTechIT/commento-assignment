import { MainWrapper } from "./style";

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default Main;