import { AdData } from "../../../types";
import {
    AdContainer,
    AdContents,
    AdContentWrapper,
    AdHeader,
    AdHeaderId,
    AdHeaderText,
    AdImg,
    Contents,
    Title,
} from "./style";
import { Facebook } from "react-content-loader";

interface AdProps {
    item: AdData;
    isLoading: boolean;
}

const Ads = ({ item, isLoading }: AdProps) => {
    return isLoading ? (
        <AdContainer>
            <Facebook />
        </AdContainer>
    ) : (
        <AdContainer>
            <AdHeader>
                <AdHeaderText>sponsored</AdHeaderText>
                <AdHeaderId>{item.id}</AdHeaderId>
            </AdHeader>
            <AdContentWrapper>
                <AdImg src={`https://cdn.comento.kr/assignment/${item.img}`} />
                <AdContents>
                    <Title>{item.title}</Title>
                    <Contents>{item.contents}</Contents>
                </AdContents>
            </AdContentWrapper>
        </AdContainer>
    );
};

export default Ads;
