import React from 'react';

import { Container, ListContext } from './styles';

import Menu from '../../components/Menu/';
import ListItems  from '../../components/ListItems/';
import Item from '../../components/Item/';
import Calendar from  '../../components/Calendar';

export default function Daily() {
  return (
    <Container>
      <Menu selected='daily' />
      <ListContext>
        <ListItems title='Horário' breakt={1}>
          <Item>
						<Calendar />
          </Item>
        </ListItems>
      </ListContext>
    </Container>
  );
}
