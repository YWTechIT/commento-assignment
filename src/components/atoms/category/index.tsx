import { useCallback, useState } from "react";
import { Data } from "../../../types";
import Badge from "../badge";
import { CategoryStyle, CategoryWrapper } from "./style";

interface CategoryProps {
  item: Data;
  bookMark: string[];
  handleBookMark: React.Dispatch<React.SetStateAction<string[]>>;
}

const onSaved = true;
const offSaved = false;

const Category = ({item, bookMark, handleBookMark}: CategoryProps) => {
  const [saved, setSaved] = useState<boolean>(bookMark.includes(item.id) ? onSaved : offSaved);

  const handleSaved = useCallback(() => {
    if (saved) {
        handleBookMark((bookMarks) => bookMarks.filter((bookMark) => bookMark !== item.id));
    } else {
        handleBookMark((bookMarks) => [...bookMarks, item.id]);
    }
    setSaved((saved) => !saved);
}, [saved, handleBookMark, item.id]);

  return (
    <CategoryWrapper>
      <CategoryStyle>category_name</CategoryStyle>
      <Badge saved={saved} handleSaved={handleSaved} />
    </CategoryWrapper>
  );
};

export default Category;
