import React ,{useState} from 'react'
import Alert from './Alert';

export default function Textform(props) {
    const[text , settext] = useState("Text here....");
    const [alert, setalert] = useState(null);
    

    const showalert=(message , type)=>{
        setalert({
            msg:message,
            type: type
        });
    }
    
    const uppercaseconvert = ()=>{
        let n = text.toUpperCase();
        // n.toUpperCase();
        settext(n);
    };

    const lowercaseconvert = ()=>{
        let n = text.toLowerCase();
        // n.toUpperCase();
        settext(n);
    };

    const cleartext = ()=>{ // clear
        settext('');
    };

    const copytext = ()=>{ //copy
        let ct = text;
        navigator.clipboard.writeText(ct);
        showalert('Copied To Clipboard' , 'Success');

    };

    const handlechange=(e) =>{  //For writing in the box.
        settext(e.target.value)
    }


    return(
        <>
        <Alert alert={alert} />
        <div className={`container text-${props.text}`} >
            <h1 className='my-4'>{props.head}</h1>
            <div className="mb-3"  >
                <textarea className={`form-control text-${props.text}`}  style={{backgroundColor: props.mode==='dark'?'#171717':'white' }} value={text} onChange={handlechange} id="myform" rows="10"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary " onClick={uppercaseconvert}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={lowercaseconvert}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={cleartext}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={copytext}>Copy Text</button>
        </div>
        <div className={`container my-3 text-${props.text}`}>
            <h2>Summary:</h2>
            <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
            {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
            <p>It will take {0.08 * text.split(" ").length} minutes to read this sentence</p>
            <h2>Preview:</h2>
            <p>{text}</p>
        </div>
        
        {/* <Alert alert={alert}/> */}
        </>
    )
}
