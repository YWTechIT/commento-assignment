import styled from "styled-components";

export const CardStyle = styled.article`
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  margin-bottom: 30px;
  border: 1px solid #E1E4E7;
  border-radius: 5px;
  opacity: 1;
`;

export const CardInfo = styled.section`
  display: flex;
  margin-bottom: 15px;
`;

export const UserId = styled.section`
  font-size: 13px;
  margin-right: 21px;
  color:#00C854;
`;

export const CreatedAt = styled.section`
  font-size: 13px;
`;

export const Title = styled.section`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Contents = styled.section`
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 12px;
`;