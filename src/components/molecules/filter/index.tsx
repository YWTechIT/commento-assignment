import styled from "styled-components";

const FilterContainer = styled.article`
  display: flex;
  background-color: cornsilk;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const SortGroup = styled.article`
  display: flex;
  padding: 10px 15px;
  align-self: center;
`;

const Asc = styled.section`
  display: flex;
  background-color: #c593f4;
  margin-right: 6px;
  align-items: center;
`;

const Desc = styled.section`
  display: flex;
  background-color: rgb(142, 247, 240);
  margin-right: 6px;
  align-items: center;
`;

const FilterButton = styled.button`
  margin: 10px 15px;
  padding: 3px 12px;
  border: 1px solid #E1E4E7;
  border-radius: 3px;
  opacity: 1px;
`;

const SortButton = styled.button`
  background-color: #00C854;
  border-radius: 10px;
  border: 0px;
  padding: 4px;
  margin-right: 6px;
`

const FilterGroup = () => {
    return(
        <FilterContainer>
            <SortGroup>
              <Asc><SortButton />오름차순</Asc>
              <Desc><SortButton />내림차순</Desc>
            </SortGroup>
            <FilterButton>필터</FilterButton>
        </FilterContainer>
    )
}

export default FilterGroup;