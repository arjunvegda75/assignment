import React, { useState } from 'react';
import './Accordion.css';  

const Accordion = ({ que, ans }) => {
  const [show, setShow] = useState(false);

  const handleChange = () => {
    setShow(!show);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={handleChange}>
        <h3>{que}</h3>
      </div>
      {show && (
        <div className="accordion-body">
          <p>{ans}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;