import { Data } from "../../../types";
import Card from "../../molecules/card";
import { FeedStyle } from "./style";

interface FeedProps {
  item: Data;
  bookMark: string[];
  handleBookMark: React.Dispatch<React.SetStateAction<string[]>>;
}

const Feed = ({ item, bookMark, handleBookMark }: FeedProps) => {
  
  return (
    <FeedStyle>
      <Card item={item} bookMark={bookMark} handleBookMark={handleBookMark}/>
    </FeedStyle>
  );
};

export default Feed;
