import React from "react";
import styled from "styled-components";

interface HeaderProps {
  children: React.ReactNode;
}

const HeaderStyle = styled.header`
  width: 100%;
  background-color: #f490c7;
  font-size: 16px;
  padding: 10px 15px;

  @media screen and (min-width: 600px) {
    background-color: #995dde;
  }
`;

const Header = ({ children }: HeaderProps) => {
  return <HeaderStyle>{children}</HeaderStyle>;
};

export default Header;
