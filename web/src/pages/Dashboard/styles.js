import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const ContainerList = styled.div`
  width: 90%;
`;

export const User = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 5px;
  margin: 0 10px 0 0;
  float: left;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const Name = styled.h2`
  color: #444;
  line-height: 32px;
`;

export const List = styled.ul`
  list-style: none;
`;

export const LItem = styled.li`
  color: #222;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: ${props => (!props.weight) ? '400' : '900'};
`;
