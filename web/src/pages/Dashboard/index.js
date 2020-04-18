import React, { useEffect } from 'react';

import Menu from '../../components/Menu';
import title from '../../utils/setTitle';

export default function Dashboard() {
  useEffect(() => {
    const oldTitle = title('Dashboard', true);

    return () => {
      title(oldTitle, false);
    }
  }, []);
  return (
    <>
      <Menu selected='dashboard' />
    </>
  );
}
