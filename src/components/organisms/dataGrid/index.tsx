import { SortType } from "../../../types";
import { Filter, Sort } from "../../../components";
import { DataGridContainer } from "./style";

interface DataGridProps {
  handleSort: (sort: SortType ) => void;
  showScrap: boolean;
  toggleShowScrap: () => void;
  bookMark: string[];
}

const DataGrid = ({ handleSort, showScrap, toggleShowScrap, bookMark }: DataGridProps) => {
  return (
    <DataGridContainer>
      <Sort handleSort={handleSort}/>
      <Filter showScrap={showScrap} toggleShowScrap={toggleShowScrap} bookMark={bookMark}/>
    </DataGridContainer>
  );
};

export default DataGrid;
