import React from "react";
import styled from "styled-components";

interface LoadingProps {
    children: React.ReactNode;
}

const LoadingStyle = styled.article`
    display: flex;
    font-size: 24px;
    font-weight: bold;
    justify-content: center;
    
`

const Loading = ({children}: LoadingProps) => {
    return(
        <LoadingStyle>{children}</LoadingStyle>
    )
}

export default Loading;