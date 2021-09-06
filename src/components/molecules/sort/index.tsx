import styled from "styled-components";
import { HandleSortType } from "../../../types";

interface SortProps {
  handleSort: (sort: HandleSortType) => void;
}

const SortGroup = styled.article`
  display: flex;
  padding: 10px 0px;
  align-self: center;
`;

const SortBy = styled.label`
  display: flex;
  margin-right: 12px;
  align-items: center;
  cursor: pointer;
`;

const DotStyle = styled.span`
  background-color: #00C854;
  border-radius: 10px;
  border: 0px;
  padding: 4px;
  margin-right: 6px;
`

const Sort = ({handleSort}: SortProps) => {
    return(
        <SortGroup>
            <SortBy onClick={() => handleSort("asc")}><DotStyle/>오름차순</SortBy>
            <SortBy onClick={() => handleSort("desc")}><DotStyle/>내림차순</SortBy>
        </SortGroup>
    )
}

export default Sort;