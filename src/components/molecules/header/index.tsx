import React from "react";
import { HeaderStyle } from "./style";

interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return <HeaderStyle>{children}</HeaderStyle>;
};

export default Header;
