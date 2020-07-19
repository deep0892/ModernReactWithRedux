import React from 'react';

import Accordion from './Accordion';

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

const App = () => {
  return (
    <div className="ui container">
      <Accordion items={items} />
    </div>
  );
};

export default App;
