import React,{useState} from 'react'
import M from 'materialize-css'
import {BrowserRouter,Route} from 'react-router-dom'
import {render} from '@testing-library/react'
import Sem2 from './sem2'
import Sem3 from './sem3'
import Sem4 from './sem4'
import Sem5 from './sem5'
import Sem6 from './sem6'
import Sem7 from './sem7'
import Sem8 from './sem8'
var data='';
const Cgpa = () => {
    const [value,setValue]=useState('')
    var [course,setCourse]=useState('')
    data=course;
    const Sumbit=()=>
    {
        //this.setSate({redirect: true});
         // eslint-disable-next-line
            if (value <=8 && value >= 2 && (course=='CSE'||course=='EEE'||course=='ECE'||course=='MECH'))
            {
                // eslint-disable-next-line
                if (value == 2)
                {
                    render(
                    <BrowserRouter>
                        <Route to="/sem2" component={Sem2}/>
                    </BrowserRouter>
                    ) 
                }
                // eslint-disable-next-line
                else if (value == 3)
                {
                    render(
                        <BrowserRouter>
                            <Route to exact="/Sem2"  component={Sem3}/>
                        </BrowserRouter>
                    )
                }
                // eslint-disable-next-line
                else if (value == 4)
                {
                    render(
                        <BrowserRouter>
                            <Route to="/Sem4"  component={Sem4}/>
                        </BrowserRouter>
                    )
                }
                 // eslint-disable-next-line
                else if (value == 5)
                {
                    render(
                        <BrowserRouter>
                            <Route to="/sem5"  component={Sem5}/>
                        </BrowserRouter>
                    )
                }
                 // eslint-disable-next-line
                else if (value == 6)
                {
                    render(
                        <BrowserRouter>
                            <Route to="/sem6"  component={Sem6}/>
                        </BrowserRouter>
                    )
                }
                 // eslint-disable-next-line
                else if (value == 7)
                {
                    render(
                        <BrowserRouter>
                            <Route to="/sem7"  component={Sem7}/>
                        </BrowserRouter>
                    )
                }
                 // eslint-disable-next-line
                else if (value == 8)
                {
                    render(
                        <BrowserRouter>
                            <Route to="/cse8"  component={Sem8}/>
                        </BrowserRouter>
                    )
                }
            else
            M.toast({html:'Sorry , Invalid Input',classes:"#ff1744 red accent-3"})
        }
        else
        M.toast({html:'Sorry , Invalid Input',classes:"#ff1744 red accent-3"})
    }
    return( 
        <div className="input-field">
            <h1 className="cls1 cmd1">CGPA</h1>
            <div className="cls1 ">
                <h5>Department</h5>
                <input type="text" name="city" list="listcourse" value={course}  onChange={(event)=>setCourse(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()} />
                <datalist id="listcourse">
                    <option value="CSE"></option>
                    <option value="ECE"></option>
                    <option value="EEE"></option>
                    <option value="MECH"></option>
                </datalist>
                <h5>Semester</h5>
                <input type="number" name="city" list="name1" min='2' max='8' value={value} onChange={(event)=>setValue(event.target.value)} autocomplete="off" onKeyDown={(e) => e.preventDefault()}/>
                <datalist id="name1">
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
export {data}
export default Cgpa;
