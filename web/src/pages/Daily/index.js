import React from 'react';
import FullCalendar from 'rc-calendar/src/FullCalendar';

import { Container, ListContext } from './styles';

import Menu from '../../components/Menu/';
import ListItems  from '../../components/ListItems/';
import Item from '../../components/Item/';

export default function Daily() {
  return (
    <Container>
      <Menu selected='daily' />
      <ListContext>
        <ListItems title='Horário' breakt={1}>
          <Item>
            <FullCalendar />
          </Item>
        </ListItems>
      </ListContext>
    </Container>
  );
}
