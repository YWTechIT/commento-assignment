import { FilterButton } from "./style";

interface FilterProps {
    showScrap: boolean;
    toggleShowScrap: (showScrap: boolean) => void;
    bookMark: string[];
}

const Filter = ({ showScrap, toggleShowScrap, bookMark }: FilterProps) => (
    <FilterButton showScrap={showScrap} onClick={()=>toggleShowScrap(!showScrap)} >{showScrap ? `전체 게시물 보기` : `스크랩 된 ${bookMark.length} 건 보기`}</FilterButton>
);

export default Filter;
