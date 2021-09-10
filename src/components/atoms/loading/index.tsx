import React from "react";
import { LoadingStyle } from "./style";

interface LoadingProps {
    children: React.ReactNode;
}

const Loading = ({children}: LoadingProps) => {
    return(
        <LoadingStyle>{children}</LoadingStyle>
    )
}

export default Loading;