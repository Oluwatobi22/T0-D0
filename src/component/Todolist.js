import React from 'react'
import { useState } from 'react'
import DisplayList from './DisplayList'
const Todolist = () => {
    const [Firstname, setFirstname] = useState("")
    const [task, settask] = useState("")
    const [Description, setDescription] = useState("")
    const [time, settime] = useState("")
    const [togeth, settogeth] = useState([])
    const [ff, setff] = useState("")
    const [tt, settt] = useState("")
    const [des, setdes] = useState("")
    const [ti, setti] = useState("")
    // const [editvalue, seteditvalue] = useState([])
    const submit = () => {
        let allToDo = { Firstname, task, Description, time }
        settogeth([...togeth, allToDo]);
        console.log(togeth);
    }
    const del = (index) => {
        let filteredStudents = togeth.filter((student, ind) => index != ind)
        settogeth(filteredStudents)
        console.log(settogeth(filteredStudents));
    }
    const ed = (index) => {
        let eidtTodolist = togeth[index]
        setff(eidtTodolist.Firstname)
        setff(eidtTodolist.task)
        setff(eidtTodolist.Description)
        setff(eidtTodolist.time)

        console.log(eidtTodolist);
    }
    
    return (
        <div className='root'>
            <div className='container mt-3'>
                <div className="row justify-content-center">
                    <div className='col-md-6'>
                        <div className='form-group form-horizontal'>
                            <label htmlFor="Name" className='d-flex'>Name</label>
                            <input type="text" onChange={(e) => setFirstname(e.target.value)} className='form-control' placeholder='Firstname' />
                            <label htmlFor="Name" className='d-flex'>Task</label>
                            <input type="text" className='form-control' onChange={(e) => settask(e.target.value)} placeholder='task' />
                            <label htmlFor="Name" className='d-flex'>Description</label>
                            <input type='text' className='form-control' placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
                            <label htmlFor="time" className='d-flex'>Time</label>
                            <input type="time" className='form-control' onChange={(e) => settime(e.target.value)} placeholder='Time' />
                            <button className='btn mt-3 btn-primary btn-lg px-5' onClick={() => submit()}>SET</button>
                        </div>
                        <div className="col-md-4">
                            <table className='table trable-reponsive table-striped  table-hover'>
                                <thead>
                                    <tr>
                                        <td className='fw-bold'>S/N</td>
                                        <td className='fw-bold'>Name</td>
                                        <td className='fw-bold'>Task</td>
                                        <td className='fw-bold'>Description</td>
                                        <td className='fw-bold'>time</td>
                                        <td className='fw-bold'>Actions</td>
                                    </tr>
                                </thead>

                                {/* {togeth.map((item,index)=>(
                                        <DisplayList 
                                        index={index+1} firstname={item.firstname}  task = {item.task} desc={item.decription} time={item.time}
                                        />
                                    ))} */}
                                {
                                    togeth.map((student, index) => (
                                        <>
                                            <tbody>
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{student.Firstname}</td>
                                                    <td>{student.task}</td>
                                                    <td>{student.Description}</td>
                                                    <td>{student.time}</td>
                                                    <td>
                                                        <button className="btn btn-warning mx-2" onClick={() => del(index)}>Delete</button>
                                                        <button className="btn btn-danger mx-2" onClick={() => ed(index)} data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </>
                                    ))
                                }
                            </table>
                            <div className="modal fade" id="exampleModal" tabindex="-1" data-bs-target="#staticBackdrop" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Edit Details for {ed} </h5>
                                        </div>
                                        <div className="modal-body">
                                            <label htmlFor="Name" className='d-flex'>Name</label>
                                            <input type="text" onChange={(e) => setff(e.target.value)} value={ff} className='form-control' placeholder='Firstname' />
                                            <label htmlFor="Name" className='d-flex'>Task</label>
                                            <input type="text" className='form-control' onChange={(e) => settt(e.target.value)} placeholder='task' />
                                            <label htmlFor="Name" className='d-flex'>Description</label>
                                           <input className='form-control' placeholder='Description' onChange={(e) => setdes(e.target.value)} ></input>
                                            <label htmlFor="time" className='d-flex'>Time</label>
                                            <input type="time" className='form-control' onChange={(e) => setti(e.target.value)} placeholder='Time' />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary"  data-dismiss="modal">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Todolist