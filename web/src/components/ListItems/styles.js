import styled from 'styled-components';

export const Container = styled.main`
  width: 90%;
  margin: 40px;
`;

export const ListItem = styled.nav`
  width: 95%;
  margin: 25px;
`;

export const List = styled.ul`
  list-style: none;
  width: 100%;
  display: grid;
  gap: 20px;
	grid-template-columns: ${props => {
	  let returned = '';
	  for(let counter = 0;counter < props.break;counter++) {
	    returned += props.break+"fr ";
    }
	  return returned;
  }};
`;

export const Title = styled.h1`
  font-size: 35px;
  font-family: 'Roboto', sans-serif;
`;
