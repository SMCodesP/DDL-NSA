import React, { useEffect, useState } from 'react';
import {
  FiHome,
  FiAlignLeft,
  FiDownload,
  FiBook,
  FiSidebar,
  FiUsers,
  FiCheckCircle,
  FiTerminal,
  FiFolder,
  FiEdit2,
} from 'react-icons/fi';

import { Container, List, Item, Expand } from './styles';

export default function Menu({ selected }) {
  const [height, setHeight] = useState(0);
  const functions = {
    dashboard: React.createRef()
  };
  useEffect(() => {
    if(!functions[selected]) return;
    functions[selected].current.style.filter = 'brightness(90%)';
    functions[selected].current.style.borderRight = '2px solid #333';
    setHeight(document.body.scrollHeight);
  }, [functions, selected]);
  return (
    <Container height={height}>
      <Expand>
        <FiAlignLeft size={35} color='#333333' />
      </Expand>
      <List>
        <Item ref={functions['dashboard']}>
          <FiHome size={25} color='#fafafa' />
        </Item>
        <Item>
          <FiDownload size={25} color='#fafafa' />
        </Item>
        <Item>
          <FiBook size={25} color='#fafafa' />
        </Item>
        <Item>
          <FiSidebar size={25} color='#fafafa' />
        </Item>
        <Item>
          <FiUsers size={25} color='#fafafa' />
        </Item>
        <Item>
          <FiCheckCircle size={25} color='#fafafa' />
        </Item>
        <Item>
          <FiTerminal size={25} color='#fafafa' />
        </Item>
        <Item>
          <FiFolder size={25} color='#fafafa' />
        </Item>
        <Item>
          <FiEdit2 size={25} color='#fafafa' />
        </Item>
      </List>
    </Container>
  );
}
