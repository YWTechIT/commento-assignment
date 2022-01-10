import styled from "styled-components";

interface FilterButtonProps{
    showScrap: boolean;
}

export const FilterButton = styled.button<FilterButtonProps>`
    margin: 10px 4px;
    padding: 3px 12px;
    border: 1px solid #e1e4e7;
    font-weight: ${(props) => !props.showScrap && "bold"};
    border-radius: 3px;
    opacity: 1px;
    color: #333638;
    cursor: pointer;
    &:hover {
        background-color: #ebebeb;
    }
`;