import styled from "styled-components";
import { Data } from "../../../types";
import Ads from "../../molecules/ads";
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
  const viewAdComponent = item.id % 4;

  return (
    <FeedStyle>
      <Card item={item} />
      {viewAdComponent === 0 && <Ads />}
    </FeedStyle>
  );
};

export default Feed;
