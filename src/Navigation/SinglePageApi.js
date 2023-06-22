import React, { useState } from 'react';
import './SinglePageApi.css';

const App = () => {
  const [progress, setProgress] = useState(0);
  const [accordions, setAccordions] = useState({
    accordion1: false,
    accordion2: false,
    accordion3: false,
    accordion4: false,
  });
  const [accordion1Option, setAccordion1Option] = useState('');
  const [accordion2Input, setAccordion2Input] = useState('');

  const handleButtonClick = (buttonIndex) => {
    // Check if the previous accordion is opened
    const previousAccordion = `accordion${buttonIndex - 1}`;
    if (buttonIndex > 1 && !accordions[previousAccordion]) {
      return; // Exit early if the previous step is not completed
    }

    // Check if the button is already clicked
    const accordionKey = `accordion${buttonIndex}`;
    if (accordions[accordionKey]) {
      return; // Exit early if the button is already clicked
    }

    // Update the progress based on the current accordion index
    const newProgress = (buttonIndex / Object.keys(accordions).length) * 100;
    setProgress(newProgress);

    // Open the clicked accordion and close the previous accordion
    setAccordions((prevAccordions) => ({
      ...prevAccordions,
      [accordionKey]: true,
      [previousAccordion]: false,
    }));
  };

  const handleReset = () => {
    setProgress(0);
    setAccordions({
      accordion1: false,
      accordion2: false,
      accordion3: false,
      accordion4: false,
    });
    setAccordion1Option('');
    setAccordion2Input('');
  };

  const handleAccordion1OptionChange = (event) => {
    setAccordion1Option(event.target.value);
    setAccordion2Input('');
  };

  const handleAccordion2InputChange = (event) => {
    setAccordion2Input(event.target.value);
  };

  const handleAccordion2Submit = () => {
    // Handle submit logic for Accordion 2
    if (accordion1Option === 'inputText') {
      console.log('Accordion 2 input:', accordion2Input);
      // Perform actions or validations for text input
    } else if (accordion1Option === 'chooseFile') {
      console.log('Accordion 2 input:', accordion2Input);
      // Perform actions or validations for file input
    }
  };

  const renderAccordion2Input = () => {
    if (accordion1Option === 'inputText' || accordion1Option === 'chooseFile') {
      return (
        <input
          type={accordion1Option === 'inputText' ? 'text' : 'file'}
          value={accordion2Input}
          onChange={handleAccordion2InputChange} id="acc1"
        />
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <div className="button-container">
        <button onClick={() => handleButtonClick(1)} className="button">
          Enter Text
        </button>
        <button onClick={() => handleButtonClick(2)} className="button">
          Generate USR
        </button>
        <button onClick={() => handleButtonClick(3)} className="button">
          Edit USR
        </button>
        <button onClick={() => handleButtonClick(4)} className="button">
          Generate text
        </button>
        <button onClick={handleReset} className="button">
          Reset
        </button>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="accordions">
        <h2>Language Communicator</h2>
        <div className="accordion">
          <button onClick={() => handleButtonClick(1)}>Select Type of Text to be inserted</button>
          {accordions.accordion1 && (
            <div>
              <select
                value={accordion1Option}
                onChange={handleAccordion1OptionChange}
              >
                <option value="">Choose an option</option>
                <option value="inputText">Input Text</option>
                <option value="chooseFile">Choose File</option>
              </select>
            </div>
          )}
        </div>
        <div className="accordion">
          <button onClick={() => handleButtonClick(2)}>Upload the text & Generate USR</button>
          {accordions.accordion2 && (
            <div>
              {renderAccordion2Input()}
              <button onClick={handleAccordion2Submit} id="submit">Submit</button>
            </div>
          )}
        </div>
        <div className="accordion">
          <button onClick={() => handleButtonClick(3)}>Edit the USR</button>
          {accordions.accordion3 && <div>Content for Accordion 3</div>}
        </div>
        <div className="accordion">
          <button onClick={() => handleButtonClick(4)}>See the Results</button>
          {accordions.accordion4 && <div>Content for Accordion 4</div>}
        </div>
      </div>
    </div>
  );
};

export default App;
