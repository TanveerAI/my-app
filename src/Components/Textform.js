import React, {useState}  from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {

  const handleUpClick = ()=>{
   // console.log("uppercase was clicked");
    let newtext = text.toUpperCase(text);
    setText(newtext);
    props.showAlert("converted to uppercase","success");
  }

  const handleLoClick = ()=>{
   // console.log("uppercase was clicked");
    let newtext = text.toLowerCase(text);
    setText(newtext);
    props.showAlert("converted to lowercase","success");
  }
  
  const handleClear = ()=>{
   // console.log("uppercase was clicked");
    setText('');
    props.showAlert("text is cleared","success");
  }

  const handleOnChange = (event)=>{
   // console.log("On change");
    setText(event.target.value);
  }

  const handleCopy = () =>{
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copied","success");
  }

  const handleExtraSpaces = () => {
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been cleared","success");
  }

  const [text , setText] = useState(''); 


  return (
    <>
      <div className="container" style={{color : props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'?'grey':'white' , color : props.mode === 'dark'?'white':'black' }} id="myBox" rows="8"></textarea>
    </div>
  <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
  <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to lowercase</button>
  <button className="btn btn-primary mx-3" onClick={handleClear}>Clear Text</button>
  <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>handle Extra Spaces</button>
  </div>

  <div className="container my-3" style={{color : props.mode === 'dark'?'white' : 'black'}}>
    <h1>your text summary</h1>
    <p>{text.split(" ").length} words , {text.length} characters</p>
    <p>{0.008 * text.split(" ").length}  seconds time to read </p>
    <h2>preview</h2>
    <p>
    {text.length>0?text:"Enter your text and previewit here"}
    </p>
  </div>

</>
  )
}
