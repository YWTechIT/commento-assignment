import { AdData } from "../../../types";
import { AdContainer, AdContents, AdContentWrapper, AdHeader, AdHeaderId, AdHeaderText, AdImg, Contents, Title } from "./style";

interface AdProps {
  item: AdData;
}

const Ads = ({ item }: AdProps) => {
  return (
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
