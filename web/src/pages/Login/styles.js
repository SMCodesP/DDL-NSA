import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logon = styled.main`
  width: 768px;
  height: 384px;
  border-radius: 5px;
  box-shadow: 0 0 3px #bbbbbb;
  background: #ffffff;
`;

export const Header = styled.header`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const Body = styled.div`

`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
`;

export const FormGroup = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 15px 10px;
`;

export const SelectInput = styled.select`
  font-weight: 400;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  height: 30px;
  margin: 0 45px 0 5px;
  padding: 0 8px;
  border-radius: 5px;
  border: 0;
  color: #333;
  background: rgba(0, 0, 0, 0.05);
`;

export const InputForm = styled.input`
  font-weight: 400;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  height: 30px;
  margin: 0 5px;
  padding: 0 8px;
  border-radius: 5px;
  border: 0;
  color: #333;
  transition: .2s background;

  &:focus {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const NameInput = styled.label`
  font-weight: bold;
  font-size: 20px;
  color: #333;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
`;

export const SubmitButton = styled.button`
  width: 200px;
  height: 50px;
  border: 0;
  border-radius: 5px;
  margin-top: 30px;
  background-color: #7159c1;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  transition: .4s filter;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;

  &:hover {
    filter: brightness(80%);
  }
`;
