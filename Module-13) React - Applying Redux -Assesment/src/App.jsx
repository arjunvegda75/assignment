import React from 'react';
import Accordion from './Accordion';
import './App.css';  

const App = () => {
  return (
    <div className="app">
      <Accordion que="What is your return policy?" ans="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum architecto quos quia quae natus aperiam." />
      <Accordion que="How do i track my order ?" ans="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, hic repudiandae. Labore reprehenderit quibusdam earum? Pariatur exercitationem facere eveniet nobis veniam nemo molestiae laborum! Incidunt cum possimus rerum distinctio maiores." />
      <Accordion que="Can i purchase item again ?" ans="Yes, you can purchase items again" />
    </div>
  );
};

export default App;