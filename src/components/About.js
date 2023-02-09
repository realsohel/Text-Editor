import React, { useState } from 'react'

export default function About(props) {
    const [mystyle , setmystyle] = useState({
        backgroundColor: 'White',
        color: '#171717'
    });
    const [textdark,settextdark]=useState('Enable Dark Mode');

    const togledarkmode=()=>{
        if(mystyle.color==='#171717'){
            setmystyle({
                color:'White',
                backgroundColor: '#171717'
            })
            settextdark('Enable Light Mode');
        }
        else{
            setmystyle({
                color:'#171717',
                backgroundColor: 'White'
            })
            
            settextdark('Enable Dark Mode');
        }
        console.log(mystyle.color);
    };
    return (
        <>
        
        <h2 className={` mx-5 my-4 text-${props.text}`}>About Us</h2>
        <div className="container" >
            <div className="accordion" id="accordionExample"  >
                <div className={`accordion-item text-${props.text}`} style={{backgroundColor: props.mode==='dark'?'#171717':'white' }}>
                    <h2 className="accordion-header" id="headingOne">
                    <button className={`accordion-button text-${props.text}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"style={{backgroundColor: props.mode==='dark'?'#171717':'white' }} >
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" >
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className={`accordion-item text-${props.text}`} style={{backgroundColor: props.mode==='dark'?'#171717':'white' }}>
                    <h2 className="accordion-header" id="headingTwo">
                    <button className={`accordion-button text-${props.text}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode==='dark'?'#171717':'white' }}>
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className={`accordion-item text-${props.text}`} style={{backgroundColor: props.mode==='dark'?'#171717':'white' }}>
                    <h2 className="accordion-header" id="headingThree">
                    <button className={`accordion-button text-${props.text}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"style={{backgroundColor: props.mode==='dark'?'#171717':'white' }}>
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="container my-3">
            <div className="btn btn-primary" onClick={togledarkmode}> FOR FUN --{textdark}</div>
        </div> */}
        </>
    )
}
