import React from 'react';
// import Todolist from './Todolist'
const DisplayList = ({index, Firstname, task, description, time}) => {    
    return (
        <>
        
            
                <tr>
                    <td>{index}</td>
                    <td>{Firstname}</td>
                    <td>{task}</td>
                    <td>{description}</td>
                    <td>{time}</td>
                </tr>
            
       
        </>
    )
}

export default DisplayList