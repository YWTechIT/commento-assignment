import { FilterButton } from "./style";

interface FilterProps {
    showFilter: boolean;
    toggleShowFilter: (showFilter: boolean) => void;
    bookMark: string[];
}

const Filter = ({ showFilter, toggleShowFilter, bookMark }: FilterProps) => (
    <FilterButton onClick={()=>toggleShowFilter(!showFilter)} >{showFilter ? `전체보기` : `스크랩된 ${bookMark.length} 건 보기`}</FilterButton>
);

export default Filter;
