import React,{useState} from 'react'
import M from 'materialize-css'
import {data} from './cgpa'
const Sem2 = () => {
    const [value1,setValue1]=useState('')
    const [value2,setValue2]=useState('')
    const Submit = () =>{
         // eslint-disable-next-line
        if (data=='CSE')
        {
            var x = (parseFloat(value1)*25 + parseFloat(value2)*24)/(25+24);
            x=x.toFixed(2);
            M.toast({
                html:"Congratulations , your Cgpa is " + x,classes:"#b39ddb deep-purple darken-1",activationPercent:0.7,displayLength:9000,inDuration:700
            })
        }
         // eslint-disable-next-line
        else if (data=='ECE')
        {
            var x = (parseFloat(value1)*25+parseFloat(value2)*24)/(25+24);
            x=x.toFixed(2);
            M.toast({
                html:"Congratulations , your Cgpa is " + x,classes:"#b39ddb deep-purple darken-1",activationPercent:0.7,displayLength:9000,inDuration:700
            })
        }
         // eslint-disable-next-line
        else if (data=='EEE')
        {
            var x = (parseFloat(value1)*25+parseFloat(value2)*25)/(25+25);
            x=x.toFixed(2);
            M.toast({
                html:"Congratulations , your Cgpa is " + x,classes:"#b39ddb deep-purple darken-1",activationPercent:0.7,displayLength:9000,inDuration:700
            })
        }
         // eslint-disable-next-line
        else if (data=='MECH')
        {
            var x = (parseFloat(value1)*25+parseFloat(value2)*25)/(25+25);
            x=x.toFixed(2);
            M.toast({
                html:"Congratulations , your Cgpa is " + x,classes:"#b39ddb deep-purple darken-1",activationPercent:0.7,displayLength:9000,inDuration:700
            })
        }
        else
        M.toast({html:'Sorry , Invalid Input',classes:"#ff1744 red accent-3"})
        setTimeout(()=>window.location.replace("https://calculator-gpa.netlify.app/"),3000);
    }
    return (
        <div className="cls1 input-field">
            <h5>Semester 1</h5>
            <input type="number" placeholder="Enter the GPA" min="5" max="10" value={value1} onChange={(event)=>setValue1(event.target.value)} />
            <h5>Semester 2</h5>
            <input type="number" placeholder="Enter the GPA" min="5" max="10" value={value2} onChange={(event)=>setValue2(event.target.value)}/>
            <button className="bt1" onClick={Submit}>Calculate</button>
        </div>
    )
}

export default Sem2;
