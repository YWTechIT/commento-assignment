import { Data } from "../../../types";
import Card from "../../molecules/card";
import { FeedStyle } from "./style";
import { Facebook } from "react-content-loader";

interface FeedProps {
    item: Data;
    bookMark: string[];
    handleBookMark: React.Dispatch<React.SetStateAction<string[]>>;
    isLoading: boolean;
}

const Feed = ({ item, bookMark, handleBookMark, isLoading }: FeedProps) => {
    return isLoading ? (
        <FeedStyle>
            <Facebook />
        </FeedStyle>
    ) : (
        <FeedStyle>
            <Card
                item={item}
                bookMark={bookMark}
                handleBookMark={handleBookMark}
            />
        </FeedStyle>
    );
};

export default Feed;
