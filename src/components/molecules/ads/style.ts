import styled from "styled-components";

export const AdContainer = styled.article`
  background-color: #d6f4a7;
  padding: 16px 24px;
  margin-bottom: 30px;
`;

export const AdHeader = styled.article`
  display: flex;
  justify-content: space-between;
`;

export const AdHeaderText = styled.section`
  font-size: 13px;
  flex-grow: 1;
  margin-bottom: 16.5px;
`;

export const AdHeaderId = styled.section`
  font-size: 13px;
  color: #7e848a;
`;

export const AdContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16.5px;
  
  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    margin-bottom: 0px
  }
`;

export const AdImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 16px;

  @media screen and (min-width: 600px) {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center;
    margin-right: 16px;
  }
`;

export const AdContents = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const Title = styled.section`
  display: -webkit-box;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 11px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Contents = styled.section`
  display: -webkit-box;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;