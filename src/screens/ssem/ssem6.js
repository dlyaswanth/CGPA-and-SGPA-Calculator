import React,{useState} from 'react'
import M from 'materialize-css'
import {data} from '../sgpa'
const Ssem6=()=>{
    var [value1,setValue1]=useState('')
    var [value2,setValue2]=useState('')
    var [value3,setValue3]=useState('')
    var [value4,setValue4]=useState('')
    var [value5,setValue5]=useState('')
    var [value6,setValue6]=useState('')
    var [value7,setValue7]=useState('')
    var [value8,setValue8]=useState('')
    var [value9,setValue9]=useState('')
    var [value10,setValue10]=useState('')
    const formatvalue = (value)=>{

        if (value=='O')
        {
            value=10;
        }
        else if (value=='A+')
        {
            value=9
        }
        else if (value=='A')
        {
            value=8;
        }
        else if (value=='B+')
        {
            value=7;
        }
        else if (value=='B')
        {
            value=6;
        }
        return value;
}
    const Submit = () =>{
        // eslint-disable-next-line
        if (data=="CSE"){
            value1=formatvalue(value1)*3;
            value2=formatvalue(value2)*3;
            value3=formatvalue(value3)*3;
            value4=formatvalue(value4)*4;
            value5=formatvalue(value5)*3;
            value6=formatvalue(value6)*3;
            value7=formatvalue(value7)*2;
            value8=formatvalue(value8)*2;
            value9=formatvalue(value9)*1;
            value10=formatvalue(value10)*1;
            M.toast({html:'Your GPA is '+((value1+value2+value3+value4+value5+value6+value7+value8+value9+value10)/25).toFixed(2) ,classes:"#b39ddb deep-purple darken-1"})

        }
        // eslint-disable-next-line
        else if (data=='ECE')
        {
            value1=formatvalue(value1)*3;
            value2=formatvalue(value2)*3;
            value3=formatvalue(value3)*3;
            value4=formatvalue(value4)*3;
            value5=formatvalue(value5)*3;
            value6=formatvalue(value6)*3;
            value7=formatvalue(value7)*2;
            value8=formatvalue(value8)*2;
            value9=formatvalue(value9)*1;
            value10=formatvalue(value10)*1;
            M.toast({html:'Your GPA is '+((value1+value2+value3+value4+value5+value6+value7+value8+value9+value10)/24).toFixed(2) ,classes:"#b39ddb deep-purple darken-1"})
        }
        // eslint-disable-next-line
        else if (data=='EEE')
        {
            value1=formatvalue(value1)*3;
            value2=formatvalue(value2)*3;
            value3=formatvalue(value3)*3;
            value4=formatvalue(value4)*3;
            value5=formatvalue(value5)*3;
            value6=formatvalue(value6)*2;
            value7=formatvalue(value7)*2;
            value8=formatvalue(value8)*2;
            M.toast({html:'Your GPA is '+((value1+value2+value3+value4+value5+value6+value7+value8)/21).toFixed(2) ,classes:"#b39ddb deep-purple darken-1"})
        }
        // eslint-disable-next-line
        else if (data=='MECH')
        {
            value1=formatvalue(value1)*3;
            value2=formatvalue(value2)*3;
            value3=formatvalue(value3)*4;
            value4=formatvalue(value4)*3;
            value5=formatvalue(value5)*3;
            value6=formatvalue(value6)*3;
            value7=formatvalue(value7)*2;
            value8=formatvalue(value8)*2;
            value9=formatvalue(value9)*1;
            M.toast({html:'Your GPA is '+((value1+value2+value3+value4+value5+value6+value7+value8+value9)/26).toFixed(2) ,classes:"#b39ddb deep-purple darken-1"})

        }
        else
        M.toast({html:'Sorry , Invalid Input',classes:"#ff1744 red accent-3"})
        setTimeout(()=>window.location.replace("https://calculator-gpa.netlify.app/"),3000);
    }
    if (data=="CSE")
    {
        return(
            <div className="cls1 input-field">
                <h5>Internet Programming</h5>
                <input type="text" name="city" list="mark" value={value1}  onChange={(event)=>setValue1(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5> Artificial Intelligence </h5>
                <input type="text" name="city" list="mark" value={value2}  onChange={(event)=>setValue2(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5> Mobile Computing </h5>
                <input type="text" name="city" list="mark" value={value3}  onChange={(event)=>setValue3(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Compiler Design </h5>
                <input type="text" name="city" list="mark" value={value4}  onChange={(event)=>setValue4(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Distributed Systems</h5>
                <input type="text" name="city" list="mark" value={value5}  onChange={(event)=>setValue5(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Professional Elective-I</h5>
                <input type="text" name="city" list="mark" value={value6}  onChange={(event)=>setValue6(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Internet Programming Lab </h5>
                <input type="text" name="city" list="mark" value={value7}  onChange={(event)=>setValue7(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Mobile Application Development Lab</h5>
                <input type="text" name="city" list="mark" value={value8}  onChange={(event)=>setValue8(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Mini Project</h5>
                <input type="text" name="city" list="mark" value={value9}  onChange={(event)=>setValue9(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Professional Communication </h5>
                <input type="text" name="city" list="mark" value={value10}  onChange={(event)=>setValue10(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <button className="bt1" onClick={Submit}>Calculate</button>
            </div>
        )
    }
    else if (data=="ECE")
    {
        return(
            <div className="cls1 input-field">
                 <h5>Microprocessors and Microcontrollers</h5>
                <input type="text" name="city" list="mark" value={value1}  onChange={(event)=>setValue1(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>VLSI Design</h5>
                <input type="text" name="city" list="mark" value={value2}  onChange={(event)=>setValue2(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Wireless Communication</h5>
                <input type="text" name="city" list="mark" value={value3}  onChange={(event)=>setValue3(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Principles of Management</h5>
                <input type="text" name="city" list="mark" value={value4}  onChange={(event)=>setValue4(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Transmission Lines & RF Systems</h5>
                <input type="text" name="city" list="mark" value={value5}  onChange={(event)=>setValue5(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Professional Elective-II</h5>
                <input type="text" name="city" list="mark" value={value6}  onChange={(event)=>setValue6(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Microprocessors & Microcontrollers Lab</h5>
                <input type="text" name="city" list="mark" value={value7}  onChange={(event)=>setValue7(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>VLSI Design Lab</h5>
                <input type="text" name="city" list="mark" value={value8}  onChange={(event)=>setValue8(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Technical Seminar </h5>
                <input type="text" name="city" list="mark" value={value9}  onChange={(event)=>setValue9(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Professional Communication</h5>
                <input type="text" name="city" list="mark" value={value10}  onChange={(event)=>setValue10(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <button className="bt1" onClick={Submit}>Calculate</button>
            </div>
        )
    }
    else if (data=="EEE")
    {
        return(
            <div className="cls1 input-field">
                <h5>Solid State Drives</h5>
                <input type="text" name="city" list="mark" value={value1}  onChange={(event)=>setValue1(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Protection and Switchgear</h5>
                <input type="text" name="city" list="mark" value={value2}  onChange={(event)=>setValue2(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Embedded Systems</h5>
                <input type="text" name="city" list="mark" value={value3}  onChange={(event)=>setValue3(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Professional Elective-I</h5>
                <input type="text" name="city" list="mark" value={value4}  onChange={(event)=>setValue4(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Professional Elective-II</h5>
                <input type="text" name="city" list="mark" value={value5}  onChange={(event)=>setValue5(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Power Electronics and Drives Lab</h5>
                <input type="text" name="city" list="mark" value={value6}  onChange={(event)=>setValue6(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Microprocessors and Microcontrollers Lab</h5>
                <input type="text" name="city" list="mark" value={value7}  onChange={(event)=>setValue7(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Mini Project </h5>
                <input type="text" name="city" list="mark" value={value8}  onChange={(event)=>setValue8(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <button className="bt1" onClick={Submit}>Calculate</button>
            </div>
        )
    }
    else if (data=="MECH")
    {
        return(
                <div className="cls1 input-field">
                <h5>Design of Transmission Systems</h5>
                <input type="text" name="city" list="mark" value={value1}  onChange={(event)=>setValue1(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Computer Aided Design & Manufacturing </h5>
                <input type="text" name="city" list="mark" value={value2}  onChange={(event)=>setValue2(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Heat and Mass Transfer</h5>
                <input type="text" name="city" list="mark" value={value3}  onChange={(event)=>setValue3(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Finite Element Analysis </h5>
                <input type="text" name="city" list="mark" value={value4}  onChange={(event)=>setValue4(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Hydraulics and Pneumatics</h5>
                <input type="text" name="city" list="mark" value={value5}  onChange={(event)=>setValue5(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Professional Elective-I</h5>
                <input type="text" name="city" list="mark" value={value6}  onChange={(event)=>setValue6(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>CAD CAM LAb</h5>
                <input type="text" name="city" list="mark" value={value7}  onChange={(event)=>setValue7(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Design & Fabrication Project</h5>
                <input type="text" name="city" list="mark" value={value8}  onChange={(event)=>setValue8(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <h5>Professional Communication</h5>
                <input type="text" name="city" list="mark" value={value9}  onChange={(event)=>setValue9(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="mark">
                    <option  value="O"></option>
                    <option value="A+"></option>
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="RA"></option>
                </datalist>
                <button className="bt1" onClick={Submit}>Calculate</button>
            </div>
        )
    }

}
export default Ssem6;
