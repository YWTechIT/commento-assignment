import React from "react";
import { ContainerStyle } from "./style";

interface ContainerProps{
    children: React.ReactNode;
}

const Container = ({children}: ContainerProps) => {
    return(
        <ContainerStyle>{children}</ContainerStyle>
    )
}

export default Container;
