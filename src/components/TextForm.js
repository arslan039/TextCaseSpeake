import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.ShowAlert(': Text has converted to UpperCase', 'success');
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.ShowAlert(': Text has converted to LowerCase', 'success');
  };

  // Adding Speak Function
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.ShowAlert(': Text has been spoken', 'success');
  };

  // Function to capture the user input, it makes the UI interactive for the users
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
          //  Function to clear the input text
  const handleClearClick = () => {
    setText('');
    props.ShowAlert(': Text has been cleared', 'success');
  };
      //  Function to remove the Extra spaces
  const handleRemoveSpacesClick = () => {
    let newText = text.replace(/\s+/g, ' ').trim(); // Remove extra spaces
    setText(newText);
    props.ShowAlert(': Extra spaces have been removed', 'success');
  };

  return (
    <>
      <div className="container" style={{ color: props.change === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.change === 'dark' ? '#042743' : 'white', color: props.change === 'dark' ? 'white' : 'black' }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={speak}>
          Speak
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleRemoveSpacesClick}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-4" style={{ color: props.change === 'dark' ? 'white' : 'black' }}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element) => element.trim() !== '').length} words and {text.trim().length} characters
        </p>
        <p>{0.008 * text.split(' ').filter((element) => element.trim() !== '').length} Minutes read. </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
      </div>
    </>
  );
}

