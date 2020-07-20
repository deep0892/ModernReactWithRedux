import React, { useState } from 'react';

import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';

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
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="ui container">
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <button
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};

export default App;
