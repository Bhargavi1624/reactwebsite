import React, { useState } from 'react'


export default function TextForm(props) {
  const handleClick = () => {
    // console.log("Uppercase Clicked"+text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to Uppercase", "success");
  }

  const handleLowerClick = () => {
    // console.log("Uppercase Clicked"+text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to Lowercase", "success");
  }
  const handleClearClick = (event) => {
    let clearText = ''
    setText(clearText)
    props.showAlert("Cleared Text", "success");
  }

  const handleCopy = () => {
    console.log("Copied!")
    var text = document.getElementById("box");
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied!!", "success");
  }
  const handleOnChange = (event) => {
    // console.log("Uppercase Clicked")
    setText(event.target.value)
  }
  const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>{props.heading} </h2>
        <div className="mb-3">
          <textarea className="form-control" id="box" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleClick}>Convert to Uppercase </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      </div>
      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} Words, {text.length} Character</p>
        <p>{0.008 * text.split("").length} Mins To Read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter Something In The Textbox Above to Preview Here"}</p>

      </div>
    </>

  )
}
