import React,{useState} from 'react'


export default function Text(props) {
   
    const handleUpClick = ()=>{
     console.log("uppercase is clicked " +  text)
     let newText=text.toUpperCase();
     setText(newText)

    }
    const handleonChange =(event)=>{
    console.log("on change")
    setText(event.target.value)
    }
    const handlelowClick = ()=>{
      console.log("uppercase is clicked " +  text)
      let newText=text.toLowerCase();
      setText(newText)
 
     }

     const handlecapClick = ()=>{
      console.log("uppercase is clicked " +  text)

      let newText= text=>text.charAt(0).toUpperCase() + text.slice(1);
      setText(newText)
 
     }

    const[text,setText] = useState("enter your text here");

  return (
    
    <div className='container' style={{backgroundColor:props.mode === "light" ? "dark":"white"}}>
        <h1> {props.title}</h1>
      <div className="my-3">
      <textarea className="form-control"  value={text} onChange={handleonChange} id="mybox" rows="8"></textarea>
  </div>
  
  <button type="button" className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>click here to conver to Uppercase</button>
  <button type="button" className="btn btn-primary mx-1 my-2" onClick={handlelowClick}>click here to conver to Lowercase</button>
  <button type="button" className="btn btn-primary mx-1 my-2" onClick={handlecapClick}>click here to conver to Capitalize</button>
 
  <h2>your text summary here</h2> 
  <p>{text.split(" ").length} words and characters {text.length}</p>
  <p>you can read the text in {0.008 *text.split(" ").length }</p>
  <div>
  <h2>preview</h2>
  <p>{text}</p>
  </div>
   </div>
  )
}
