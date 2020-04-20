import React from 'react';

import { ItemStyle } from './styles';

export default function Item({ children }) {
  return (
    <ItemStyle>
      {children}
    </ItemStyle>
  );
}
