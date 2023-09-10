import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.ShowAlert(": Text has converted to UpperCase", "success");
    }

    const handleLoClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.ShowAlert(": Text has converted to LowerCase" , "success");
  }

         // Adding Speak Function
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.ShowAlert(": Text has been spoken" , "success");
}
  //  Function to capture the user input, it makes the UI interactive for the users
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

 
  


    const [text, setText] = useState('');
  return (
   <>
   <div className='container' style = {{color : props.change==="dark" ? "white" :"black"}} >
   <h1 >{props.heading}</h1>

<div className="mb-3" >
  <textarea className="form-control" value= {text} onChange={handleOnChange} style = {{backgroundColor : props.change==="dark" ? "#042743" :"white" , color : props.change==="dark" ? "white" :"black"}} id="myBox" rows="8"></textarea>
</div >
<button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
<button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to LowerCase</button>

<button className="btn btn-primary mx-2"  onClick={speak} >Speak</button>
    </div>


<div className="container my-4"  style = {{color : props.change==="dark" ? "white" :"black"}}>
  <h2>Your Text Summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} Minutes read. </p>
  <h2>Preview</h2>
  <p>{text.length>0 ? text : "Enter Some text in the above box to preview"}</p>
</div>



    </>
  )
}
