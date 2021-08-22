import styled from "styled-components";
import { SortType } from "../../../types";

interface SortProps {
  handleSort: (sort: SortType) => void;
}

const SortGroup = styled.article`
  display: flex;
  padding: 10px 15px;
  align-self: center;
`;

const SortBy = styled.label`
  display: flex;
  margin-right: 12px;
  align-items: center;
  cursor: pointer;
  &:hover{
    background-color: rgb(255, 233, 146);
  }
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