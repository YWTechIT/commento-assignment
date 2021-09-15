import { SortType } from "../../../types";
import { DotStyle, SortBy, SortGroup } from "./style";

interface SortProps {
  handleSort: (sort: SortType) => void;
}

const Sort = ({handleSort}: SortProps) => {
    return(
        <SortGroup>
            <SortBy onClick={() => handleSort("asc")}><DotStyle/>오름차순</SortBy>
            <SortBy onClick={() => handleSort("desc")}><DotStyle/>내림차순</SortBy>
        </SortGroup>
    )
}

export default Sort;