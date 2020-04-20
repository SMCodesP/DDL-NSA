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
  FiAlignRight,
} from 'react-icons/fi';

import { Container, List, Item, Expand, Text } from './styles';

export default function Menu({ selected }) {
  const [height, setHeight] = useState(0);
  const [expanded, setExpanded] = useState(false);
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
    <Container height={height} expanded={expanded} >
      <Expand>
        {expanded ? (
          <FiAlignRight size={35} color='#333333' onClick={() => setExpanded(!expanded)} />
        ) : (
          <FiAlignLeft size={35} color='#333333' onClick={() => setExpanded(!expanded)} />
        ) }
      </Expand>
      <List>
        <Item ref={functions[selected]}>
          <FiHome size={25} color='#fafafa' />
          <Text expanded={expanded}>Início</Text>
        </Item>
        <Item>
          <FiDownload size={25} color='#fafafa' />
          <Text expanded={expanded}>Baixar</Text>
        </Item>
        <Item>
          <FiBook size={25} color='#fafafa' />
          <Text expanded={expanded}>Diário</Text>
        </Item>
        <Item>
          <FiSidebar size={25} color='#fafafa' />
          <Text expanded={expanded}>Boletim</Text>
        </Item>
        <Item>
          <FiUsers size={25} color='#fafafa' />
          <Text expanded={expanded}>Professores</Text>
        </Item>
        <Item>
          <FiCheckCircle size={25} color='#fafafa' />
          <Text expanded={expanded}>Sugestões</Text>
        </Item>
        <Item>
          <FiTerminal size={25} color='#fafafa' />
          <Text expanded={expanded}>Cadastro</Text>
        </Item>
        <Item>
          <FiFolder size={25} color='#fafafa' />
          <Text expanded={expanded}>Declarações</Text>
        </Item>
        <Item>
          <FiEdit2 size={25} color='#fafafa' />
          <Text expanded={expanded}>Rematrícula</Text>
        </Item>
      </List>
    </Container>
  );
}
