import React, { useEffect } from 'react';

import Menu from '../../components/Menu';
import title from '../../utils/setTitle';

export default function Dashboard() {
  useEffect(() => {
    title('Dashboard', true);
  }, []);
  return (
    <>
      <Menu selected='dashboard' />
    </>
  );
}
