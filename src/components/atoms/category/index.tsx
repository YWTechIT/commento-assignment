import styled from "styled-components";
import { Data } from "../../../types";

interface CategoryProps {
  item: Data;
}

const CategoryStyle = styled.article`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin-bottom: 27px;
`;

const CategoryName = styled.section`
  background-color: #c3d5f5;
  font-size: 13px;
`;

const CategoryId = styled.section`
  background-color: #ecc5f5;
  font-size: 13px;
`;

const Category = ({item}: CategoryProps) => {
  return (
    <CategoryStyle>
      <CategoryName>category_name</CategoryName>
      <CategoryId>{item.category_id}</CategoryId>
    </CategoryStyle>
  );
};

export default Category;
