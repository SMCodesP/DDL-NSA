import React from 'react';

import { Container, Title, ListItem, List } from './styles';

export default function ListItems({ title, breakt, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      <ListItem>
        <List break={breakt}>
          {children}
        </List>
      </ListItem>
    </Container>
  );
}
