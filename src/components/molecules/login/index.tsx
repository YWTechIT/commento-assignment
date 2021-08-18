import styled from "styled-components";

const Button = styled.button`
  display: none;

  @media screen and (min-width: 600px) {
    display: block;
    align-self: flex-start;
    width: 235px;
    font-size: 22px;
    flex-shrink: 0;
    padding: 10px 0px;
    background-color: #00c854;
    font-weight: bold;
    border-radius: 5px;
    color: white;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: green;
    }
  }
`;

const Login = () => {
  return (
    <>
      <Button>로그인</Button>
    </>
  );
};

export default Login;