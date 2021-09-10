import { Data } from "../../../types";
import {Category, HorizonLine} from "../../../components";
import { CardInfo, CardStyle, CreatedAt, UserId, Contents, Title } from "./style";

interface CardProps {
  item: Data;
  bookMark: string[];
  handleBookMark: React.Dispatch<React.SetStateAction<string[]>>;
}

const Card = ({ item, bookMark, handleBookMark}: CardProps) => {
  return (
    <CardStyle>
      <Category item={item} bookMark={bookMark} handleBookMark={handleBookMark} />
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
