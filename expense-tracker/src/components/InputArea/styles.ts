import styled from "styled-components";

export const Container = styled.div`
  // background-color: #FFF;
  background-color: #0202e5;
  box-shadow: 0px 0px 5px #CCC;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  
  display: flex;
  justify-content: center;
  align-items: center;

  select {
    border-color: #fff transparent transparent transparent;
    margin: 10px;
    height: 30px;
  }

  input {
    height: 30px;
    background-color: #FFF;
    margin: 10px;
  }

  button {
    background-color: gray;
    border-radius: 5px;
    height: 30px;
    margin: 10px;
  }
`;
