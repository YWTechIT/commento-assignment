import styled from "styled-components";
import { Data } from "../../../types";
import Card from "../../molecules/card";

interface FeedProps {
  item: Data;
}

const FeedStyle = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Feed = ({ item }: FeedProps) => {
  
  return (
    <FeedStyle>
      <Card item={item} />
    </FeedStyle>
  );
};

export default Feed;
