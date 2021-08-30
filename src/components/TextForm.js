    import React, {useState} from 'react'


    export default function TextForm(props) {

    const handleUpClick = () => {
    //  console.log("Upercase was clicked " + text );
    let newText = text.toLocaleUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase" , "success");

    }
    const handleLoClick = () =>  {
    //  console.log("Upercase was clicked " + text );
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase" , "success");

    }
    const handleClearClick = () =>  {

    let newText = '';
    setText(newText)
    props.showAlert("Text is Cleared ! " , "success");

    }
    const handleOnChange = (event) => {
    //  console.log("on change ");
    setText(event.target.value) // we used onChange in order to update the event 
    
    }

        const [text, setText] = useState('Enter text here');  // text here is the value which we want as a text 
        //and the  text after the use State is the default value 


    return (
        <>
            <div className= "container " style={{color: props.mode==='dark'? 'white' : '#402743'}} >
                
            <h1>{props.heading} </h1>
    <div className="mb-3">
    <label for="myBox" className="form-label"></label>
    <textarea className="form-control" value= {text}  style={{backgroundColor: props.mode==='dark'? 'grey' : 'White' , color: props.mode==='dark'? 'white' : '#402743' }}  onChange= {handleOnChange}  id="myBox" rows="8"></textarea>
    </div> 

    <button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to UpperCase </button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert to LowerCase </button>
    <button className="btn btn-primary mx-3" onClick={handleClearClick}> Clear Text </button>
            </div>
    
    <div className="container my-3" style={{color: props.mode==='dark'? 'white' : '#402743'}}>
    <h1>Your Text Summery</h1>
    <p>   {text.split(" ").length} words  and {text.length} characters</p>
    <p> {0.008 * text.split(" ").length }  Minutes Read</p>

    <h2>Preview </h2>

    <p>{text.length>0?text:"Enter something in the Textbox above to  Preview it here!"}</p>
    </div>

 </>

    )
}
