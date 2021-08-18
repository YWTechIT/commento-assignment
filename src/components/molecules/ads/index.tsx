import styled from "styled-components";

const AdContainer = styled.article`
  background-color: #83caf0;
  padding: 10px 15px;
  margin-bottom: 30px;
`;

const AdHeader = styled.section`
  background-color: #e3f9c2;
  font-size: 13px;
  flex-grow: 1;
  margin-bottom: 16.5px;
`;

const AdContentWrapper = styled.section`
  margin-bottom: 16.5px;
  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
  }
`;

const AdImg = styled.img`
  width: 100%;

  @media screen and (min-width: 600px) {
    width: 310px;
    margin-right: 29.5px;
  }
`;

const AdContents = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
`;

const Title = styled.section`
  display: -webkit-box;
  font-size: 18px;
  font-weight: bold;
  background-color: bisque;
  margin-bottom: 11px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Contents = styled.section`
  display: -webkit-box;
  font-size: 16px;
  background-color: gainsboro;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const Ads = () => {
  return (
    <AdContainer>
      <AdHeader>sponsored</AdHeader>
      <AdContentWrapper>
        <AdImg src={"https://cdn2.thecatapi.com/images/vDFI6jI2O.jpg"}></AdImg>
        <AdContents>
          <Title>
            Title Title Title Title Title Title Title Title Title Title Title
            Title Title Title Title Title Title Title Title Title Title Title
            Title Title Title Title Title Title Title
          </Title>
          <Contents>
            contents contents contents contents contents contents conte nts
            contents contents contents contents contents contents co ntents
            contents contents contents contents contents content s contents
            contents contents contents contents contenets contenets contenets
            contenets contenets contenets contenets
          </Contents>
        </AdContents>
      </AdContentWrapper>
    </AdContainer>
  );
};

export default Ads;
