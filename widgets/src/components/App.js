import React, { useState } from 'react';

import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';

const items = [
  {
    title: 'Lorem, ipsum dolor.',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia facere optio quasi nemo sunt temporibus.',
  },
  {
    title: 'Lorem, ipsum.',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
  },
  {
    title: 'Lorem ipsum dolor sit.',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia illo sunt, quas sapiente delectus possimus vitae nobis quisquam laboriosam.',
  },
];

const options = [
  {
    label: 'The Color Red.',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
