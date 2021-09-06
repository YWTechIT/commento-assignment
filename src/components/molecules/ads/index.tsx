import styled from "styled-components";
import { AdData } from "../../../types";

interface AdProps {
  item: AdData;
}

const AdContainer = styled.article`
  background-color: #d6f4a7;
  padding: 16px 24px;
  margin-bottom: 30px;
`;

const AdHeader = styled.article`
  display: flex;
  justify-content: space-between;
`;

const AdHeaderText = styled.section`
  font-size: 13px;
  flex-grow: 1;
  margin-bottom: 16.5px;
`;

const AdHeaderId = styled.section`
  font-size: 13px;
  color: #7e848a;
`;

const AdContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16.5px;
  
  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    margin-bottom: 0px
  }
`;

const AdImg = styled.img`
  width: 50%;
  margin-bottom: 16.5px;

  @media screen and (min-width: 600px) {
    width: 310px;
    margin-right: 29.5px;
    height: 179px;
  }
`;

const AdContents = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const Title = styled.section`
  display: -webkit-box;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 11px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Contents = styled.section`
  display: -webkit-box;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

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
