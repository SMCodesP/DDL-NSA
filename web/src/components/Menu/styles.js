import styled from 'styled-components';

// Started for váriables
const colorMenu = '#e02041';
const sizeMenu = 50;
// Finished

export const Container = styled.nav`
  background: ${colorMenu};
  width: ${sizeMenu}px;
  height: 100vh;
`;

export const List = styled.ul`
  width: ${sizeMenu}px;
  height: auto;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${sizeMenu}px;
  height: ${sizeMenu}px;
  cursor: pointer;
  transition: .2s filter;
  background: ${colorMenu};

  &:hover {
    border-right: 2px solid #333;
    filter: brightness(90%);
  }
`;

export const Expand = styled.div`
  width: ${sizeMenu}px;
  height: ${sizeMenu}px;
  transition: .4s filter;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;

  & svg {
    stroke-width: 3px;
  }

  & svg:hover {
    filter: brightness(80%);
  }
`;
