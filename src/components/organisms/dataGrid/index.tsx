import styled from "styled-components";
import { HandleSortType } from "../../../types";
import Filter from "../../molecules/filter";
import Sort from "../../molecules/sort";

interface DataGridProps {
  handleSort: (sort: HandleSortType ) => void;
}

const DataGridContainer = styled.article`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const DataGrid = ({ handleSort }: DataGridProps) => {
  return (
    <DataGridContainer>
      <Sort handleSort={handleSort}/>
      <Filter />
    </DataGridContainer>
  );
};

export default DataGrid;
