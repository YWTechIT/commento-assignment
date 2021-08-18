import styled from "styled-components";
import { Data } from "../../../types";
import Category from "../../atoms/category";

interface CardProps {
  item: Data;
}

const CardStyle = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #f4bf5d;
  padding: 10px 15px;
  margin-bottom: 30px;
`;

const CardInfo = styled.section`
  display: flex;
  margin-bottom: 15px;
`;

const UserId = styled.section`
  font-size: 13px;
  margin-right: 21px;
`;

const CreatedAt = styled.section`
  font-size: 13px;
`;

const Title = styled.section`
  font-size: 18px;
  font-weight: bold;
  background-color: bisque;
  margin-bottom: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Contents = styled.section`
  font-size: 16px;
  background-color: gainsboro;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Card = ({ item }: CardProps) => {
  return (
    <CardStyle>
      <Category item={item}/>
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
