import styled from "styled-components";

const FilterButton = styled.button`
  margin: 10px 4px;
  padding: 3px 12px;
  border: 1px solid #E1E4E7;
  border-radius: 3px;
  opacity: 1px;
  background-color: white;
  color: #ADB5BD;
  cursor: pointer;
`;

const Filter = () => <FilterButton>필터</FilterButton>;

export default Filter;
