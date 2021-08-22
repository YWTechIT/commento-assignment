import React from "react";
import styled from "styled-components";

interface ContainerProps{
    children: React.ReactNode;
}

const ContainerStyle = styled.main`
  display: flex;
  justify-content: center;
`;

const Container = ({children}: ContainerProps) => {
    return(
        <ContainerStyle>{children}</ContainerStyle>
    )
}

export default Container;
