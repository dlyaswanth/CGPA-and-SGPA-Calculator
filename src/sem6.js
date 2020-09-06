import React,{useState} from 'react'
import M from 'materialize-css'
import {data} from './cgpa'
const Sem6 = () => {
    const [value1,setValue1]=useState('')
    const [value2,setValue2]=useState('')
    const [value3,setValue3]=useState('')
    const [value4,setValue4]=useState('')
    const [value5,setValue5]=useState('')
    const [value6,setValue6]=useState('')
    const Submit = () =>{
         // eslint-disable-next-line
        if (data=='CSE')
        {
            var x = (parseFloat(value1)*25+parseFloat(value2)*24+parseFloat(value3)*24+parseFloat(value4)*24+parseFloat(value5)*25+parseFloat(value6)*25)/(25+25+24+24+24+25);
            x=x.toFixed(2);
            M.toast({
                html:"Your Cgpa is "+x,classes:"#b39ddb deep-purple darken-1",activationPercent:0.7,displayLength:9000,inDuration:700
            })
        }
         // eslint-disable-next-line
        else if (data=='ECE')
        {
            var x = (parseFloat(value1)*25+parseFloat(value2)*24+parseFloat(value3)*25+parseFloat(value4)*24+parseFloat(value5)*25+parseFloat(value6)*24)/(25+25+24+24+24+25);
            x=x.toFixed(2);
            M.toast({
                html:"Your Cgpa is "+x,classes:"#b39ddb deep-purple darken-1",activationPercent:0.7,displayLength:9000,inDuration:700
            }) 
        }
         // eslint-disable-next-line
        else if (data=='EEE')
        {
            var x = (parseFloat(value1)*25+parseFloat(value2)*25+parseFloat(value3)*23+parseFloat(value4)*25+parseFloat(value5)*23+parseFloat(value6)*21)/(25+25+23+25+21+23);
            x=x.toFixed(2);
            M.toast({
                html:"Your Cgpa is "+x,classes:"#b39ddb deep-purple darken-1",activationPercent:0.7,displayLength:9000,inDuration:700
            }) 
        }
         // eslint-disable-next-line
        else if (data=='MECH')
        {
            var x = (parseFloat(value1)*25+parseFloat(value2)*25+parseFloat(value3)*25+parseFloat(value4)*24+parseFloat(value5)*22+parseFloat(value6)*26)/(25+25+25+24+22+26);
            x=x.toFixed(2);
            M.toast({
                html:"Your Cgpa is "+x,classes:"#b39ddb deep-purple darken-1",activationPercent:0.7,displayLength:9000,inDuration:700
            }) 
        }
        else
        M.toast({html:'Sorry , Invalid Input',classes:"#ff1744 red accent-3"})
        setTimeout(()=>window.location.replace("https://calculator-gpa.netlify.app/"),3000);
    }
    return (
        <div className="cls1 input-field">
            <h5>Semester 1</h5>
            <input type="number" placeholder="Enter the GPA"  min="5" max="10" value={value1} onChange={(event)=>setValue1(event.target.value)} />
            <h5>Semester 2</h5>
            <input type="number" placeholder="Enter the GPA" min="5" max="10" value={value2} onChange={(event)=>setValue2(event.target.value)}/>
            <h5>Semester 3</h5>
            <input type="number" placeholder="Enter the GPA" min="5" max="10" value={value3} onChange={(event)=>setValue3(event.target.value)}/>
            <h5>Semester 4</h5>
            <input type="number" placeholder="Enter the GPA" min="5" max="10" value={value4} onChange={(event)=>setValue4(event.target.value)}/>
            <h5>Semester 5</h5>
            <input type="number" placeholder="Enter the GPA" min="5" max="10" value={value5} onChange={(event)=>setValue5(event.target.value)}/>
            <h5>Semester 6</h5>
            <input type="number" placeholder="Enter the GPA" min="5" max="10" value={value6} onChange={(event)=>setValue6(event.target.value)}/>
            <button className="bt1" onClick={Submit}>Calculate</button>
        </div>
    )
}
export default Sem6;
