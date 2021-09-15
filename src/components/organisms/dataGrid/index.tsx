import { SortType } from "../../../types";
import { Filter, Sort } from "../../../components";
import { DataGridContainer } from "./style";

interface DataGridProps {
  handleSort: (sort: SortType ) => void;
  showFilter: boolean;
  toggleShowFilter: (showFilter: boolean) => void;
  bookMark: string[];
}

const DataGrid = ({ handleSort, showFilter, toggleShowFilter, bookMark }: DataGridProps) => {
  return (
    <DataGridContainer>
      <Sort handleSort={handleSort}/>
      <Filter showFilter={showFilter} toggleShowFilter={toggleShowFilter} bookMark={bookMark}/>
    </DataGridContainer>
  );
};

export default DataGrid;
