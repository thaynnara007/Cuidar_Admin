import React, { useState } from 'react';

import Navbar from '../../components/navbar';
import ListCategories from '../../components/listCategories';

function Categories() {
  const [state, setState] = useState('list_category');

  return (
    <Navbar>
      <ListCategories setPageState={setState} />
    </Navbar>
  );
}

export default Categories;
