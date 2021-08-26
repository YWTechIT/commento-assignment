import styled from "styled-components";
import { Data } from "../../../types";
import Category from "../../atoms/category";
import HorizonLine from "../../atoms/horizonStyle";

interface CardProps {
  item: Data;
}

const CardStyle = styled.article`
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  margin-bottom: 30px;
  border: 1px solid #E1E4E7;
  border-radius: 5px;
  opacity: 1;
`;

const CardInfo = styled.section`
  display: flex;
  margin-bottom: 15px;
`;

const UserId = styled.section`
  font-size: 13px;
  margin-right: 21px;
  color:#00C854;
`;

const CreatedAt = styled.section`
  font-size: 13px;
`;

const Title = styled.section`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Contents = styled.section`
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 12px;
`;

const Card = ({ item }: CardProps) => {
  return (
    <CardStyle>
      <Category item={item}/>
      <HorizonLine />
      <CardInfo>
        <UserId>{item.id}</UserId>
        <CreatedAt>{item.created_at}</CreatedAt>
      </CardInfo>
      <Title>{item.title}</Title>
      <Contents>{item.contents}</Contents>
    </CardStyle>
  );
};

export default Card;
