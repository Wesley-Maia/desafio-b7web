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

  select {
    border-color: #fff transparent transparent transparent;
  }

  input {
    height: 50px
    background-color: #FFF;
  }

  button {
    background-color: green;
    border-radius: 5px;
    height: 30px
  }
`;