import React,{useState} from 'react'
import M from 'materialize-css'
import {BrowserRouter,Route} from 'react-router-dom'
import {render} from '@testing-library/react'
import Ssem1 from './ssem/ssem1'
import Ssem2 from './ssem/ssem2'
import Ssem3 from './ssem/ssem3'
import Ssem4 from './ssem/ssem4'
import Ssem5 from './ssem/ssem5'
import Ssem6 from './ssem/ssem6'
import Ssem7 from './ssem/ssem7'
import Ssem8 from './ssem/ssem8'
var data=''
const Sgpa = () => {
    var [course,setCourse]=useState('')
    const [value,setValue]=useState('')
    data=course;
    const Sumbit=()=>{
        // eslint-disable-next-line
        if (value < 9 && value >=1 && (course===("CSE") || course===("ECE") || course===("EEE") || course===("MECH")))
        {
            // eslint-disable-next-line
            if (value == 1)
            {
                render(
                <BrowserRouter>
                    <Route to="/ssem/ssem1" component={Ssem1}/>
                </BrowserRouter>
                ) 
            }
            // eslint-disable-next-line
            else if (value == 2)
            {
                render(
                <BrowserRouter>
                    <Route to="/ssem/ssem2" component={Ssem2}/>
                </BrowserRouter>
                ) 
            }
            // eslint-disable-next-line
            else if (value == 3)
            {
                render(
                    <BrowserRouter>
                        <Route to exact="/ssem/ssem3"  component={Ssem3}/>
                    </BrowserRouter>
                )
            }
            // eslint-disable-next-line
            else if (value == 4)
            {
                render(
                    <BrowserRouter>
                        <Route to="/ssem/ssem4"  component={Ssem4}/>
                    </BrowserRouter>
                )
            }
             // eslint-disable-next-line
            else if (value == 5)
            {
                render(
                    <BrowserRouter>
                        <Route to="/ssem/ssem5"  component={Ssem5}/>
                    </BrowserRouter>
                )
            }
             // eslint-disable-next-line
            else if (value == 6)
            {
                render(
                    <BrowserRouter>
                        <Route to="/ssem/ssem6"  component={Ssem6}/>
                    </BrowserRouter>
                )
            }
             // eslint-disable-next-line
            else if (value == 7)
            {
                render(
                    <BrowserRouter>
                        <Route to="/ssem/ssem7"  component={Ssem7}/>
                    </BrowserRouter>
                )
            }
             // eslint-disable-next-line
            else if (value == 8)
            {
                render(
                    <BrowserRouter>
                        <Route to="/ssem/ssem8"  component={Ssem8}/>
                    </BrowserRouter>
                )
            }
        }
        else
        M.toast({html:'Sorry , Invalid Input',classes:"#ff1744 red accent-3"})
    }
    return ( 
        <div className="input-field">
            <h1 className="cls1 cmd1" >SGPA</h1>
            <div className="cls1 ">
                <h5>Department</h5>
                <input type="text" name="city" list="listcourse" value={course} onChange={(event)=>setCourse(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()} />
                <datalist id="listcourse">
                    <option value="CSE"></option>
                    <option value="ECE"></option>
                    <option value="EEE"></option>
                    <option value="MECH"></option>
                </datalist>
                <h5>Semester</h5>
                <input type="number" name="city" list="name1" min='1' max='8' value={value} onChange={(event)=>setValue(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()} />
                <datalist id="name1">
                    <option value="1"></option>
                    <option value="2"></option>
                    <option value="3"></option>
                    <option value="4"></option>
                    <option value="5"></option>
                    <option value="6"></option>
                    <option value="7"></option>
                    <option value="8"></option>
                </datalist>
                <button className="bt1" onClick={Sumbit}>Enter</button>
            </div>
        </div>
    )
}
export {data};
export default Sgpa;
