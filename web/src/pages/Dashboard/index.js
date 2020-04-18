import React, { useEffect } from 'react';

import Menu from '../../components/Menu';
import ListItems from '../../components/ListItems';
import title from '../../utils/setTitle';
import Item from "../../components/Item";

import { Container, ContainerList, Name, User, List, LItem } from './styles';

import avatar from '../../images/user.png';

export default function Dashboard() {
  useEffect(() => {
    const oldTitle = title('Dashboard', true);
    return () => title(oldTitle, false);
  }, []);
  return (
    <Container>
      <Menu selected='dashboard' />
      <ContainerList>
        <ListItems title='Informações' breakt={2}>
          <Item>
            <User src={avatar} alt='avatar for user' />
            <Name>Samuel Pereira da Silva</Name>
            <List>
              <LItem>
                RM: 27017
              </LItem>
              <br/>
              <br/>
              <LItem>
                Turma: A
              </LItem>
              <LItem>
                Série: 1ª
              </LItem>
              <LItem>
                Grupo da Divisão: Grupo B
              </LItem>
            </List>
          </Item>
        </ListItems>
        <ListItems title='Notícias' breakt={2}>
          <h1>Nenhuma notícia até o momento</h1>
        </ListItems>
      </ContainerList>
    </Container>
  );
}
