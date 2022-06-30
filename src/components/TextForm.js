import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("upercase was clicked"+text);
    let newText= text.toUpperCase();
    setText(newText);
  }
  
  const handleLoClick = ()=>{
    // console.log("upercase was clicked"+text);
    let newText= text.toLowerCase();
    setText(newText);
  }
  const handleClearClick = ()=>{
    // console.log("upercase was clicked"+text);
    let newText= '';
    setText(newText);
  }
  const handleOnChange = (event)=>{
    // console.log("On Changed");
    setText(event.target.value) 
  }
  const handleCopy=()=> {
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpace=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const[text,setText] = useState('');

  return (
    <>
    <div class="container" style={{color: props.mode==='dark'?'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray' : 'white', color: props.mode==='dark'?'white' : 'black'}} id="myBox" rows="8"></textarea>
        </div>          
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copt Text</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container" my-3 style={{color: props.mode==='dark'?'white' : 'black'}}>
      <h2>Your Text summary</h2>
      <p>{text.split(" ").length } words & {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minuts read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text : "Please Enter Text in the Box"}</p>
    </div>
    </>
  )
}


