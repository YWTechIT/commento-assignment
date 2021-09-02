import styled from "styled-components";
import { Data } from "../../../types";

interface CategoryProps {
  item: Data;
}

const CategoryWrapper = styled.article`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin-top: 12px;
  margin-bottom: 8px;
`;

const CategoryStyle = styled.section`
  font-size: 13px;
  color: #7E848A;
`;

const Category = ({item}: CategoryProps) => {
  return (
    <CategoryWrapper>
      <CategoryStyle>category_name</CategoryStyle>
      <CategoryStyle>{item.category_id}</CategoryStyle>
    </CategoryWrapper>
  );
};

export default Category;
