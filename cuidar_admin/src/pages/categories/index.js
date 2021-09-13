import React, { useState } from 'react';

import Navbar from '../../components/navbar';
import ListCategories from '../../components/listCategories';
import CreateCategory from '../../components/createCategory';

function Categories() {
  const [state, setState] = useState('list_categories');

  return (
    <Navbar>
      {state === 'list_categories' ? (
        <ListCategories setPageState={setState} />
      ) : (
        <CreateCategory setPageState={setState} />
      )}
    </Navbar>
  );
}

export default Categories;
