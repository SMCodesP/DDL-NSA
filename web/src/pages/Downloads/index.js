import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiFolder } from 'react-icons/fi'; 

import Menu from '../../components/Menu';
import ListItems from '../../components/ListItems';
import Item from '../../components/Item';
import title from '../../utils/setTitle';

import { Container, ContainerList, Text, Title } from './styles';

export default function Dashboard() {
  useEffect(() => {
    const oldTitle = title('Dashboard', false);

    return () => {
      title(oldTitle, false);
    }
  }, []);
  return (
    <Container>
      <Menu selected='downloads' />
      <ContainerList>
        <ListItems title='Arquivos disponíveis' breakt={2}>
          <Item>
		<FiFolder color='#333333' size={75} />
		<Title>PWI</Title>
		<Text>
			Baixe sua primeira aula prática aqui, clique <Link to='downloads#'>aqui</Link>
		</Text>
          </Item>
        </ListItems>
      </ContainerList>
    </Container>
  );
}
