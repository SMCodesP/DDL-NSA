import styled from 'styled-components';

// Started for váriables
const colorMenu = '#e02041';
const sizeMenu = 50;
// Finished

export const Container = styled.nav`
  background: ${colorMenu};
  width: ${props => (props.expanded) ? 200 : sizeMenu}px;
  height: ${props => props.height}px;
  transition: .2s width;
`;


export const ContainerExpanded = styled(Container)`
  width: 90px;
`;

export const List = styled.ul`
  width: 100%;
  height: auto;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${sizeMenu}px;
  cursor: pointer;
  transition: .2s filter;
  background: ${colorMenu};

  &:hover {
    border-right: 2px solid #333;
    filter: brightness(90%);
  }

  & svg {
    margin-left: ${(sizeMenu-25)/2}px;
  }
`;

export const Text = styled.label`
  display: ${props => (props.expanded) ? 'block' : 'none'};
  margin-left: 5px;
  font-size: 14px;
  font-weight: 600;
  color: #fafafa;
  cursor: pointer;
`;

export const Expand = styled.div`
  width: 100%;
  height: ${sizeMenu}px;
  transition: .4s filter;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;

  & svg {
    stroke-width: 3px;
  }

  & svg:hover {
    cursor: pointer;
    filter: brightness(80%);
  }
`;
