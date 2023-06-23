import React,{useState} from 'react'

export default function Transform(props) {
    const handleUpClick = ()=>{
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showalert("Converted to uppercase","success");

    }
    const handleLoClick = ()=>{
        let newtext2=text.toLowerCase()
        setText(newtext2)
        props.showalert("Converted to lowercase","success");
    

    }
    const handleclear = ()=>{
        let newtext3=' ';
        setText(newtext3)
        props.showalert("Text is cleared","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text,setText] = useState('Enter text here')
  return (
    <div>
        <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
         <div className="form-group">
        <textarea className="form-control" rows="9" id="comment" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"#4040b0":"white",color:props.mode==="dark"?"white":"black"}}></textarea>
        </div>
        <button type="button" className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>convert to uppercase</button>
        <button type="button" className="btn btn-primary my-1 mx-1" onClick={handleLoClick}>convert to lowercase</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleclear}>clear text</button>

        </div>
        <div className='container'style={{color:props.mode==="dark"?"white":"black"}}>
            <h1>Your text summary</h1>
            <p>{text.split( /\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview it here "}</p>
        </div>
        
    </div>
  )
}


