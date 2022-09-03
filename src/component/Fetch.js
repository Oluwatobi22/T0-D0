import React from 'react'
// import axios from 'axios'
import { useState } from 'react'
const Fetch = () => {
    // const endpoint = "https://jsonplaceholder.typicode.com/users"
    // const [alluser, setallallUsers] = useState([])
    // const [excuse, setexcuse] = useState([])
    // const ApiExcuse = "https://excuser.herokuapp.com/v1/excuse/office"
    // const getData = () => {
    //     axios.get(ApiExcuse).then((result) => {
    //         let take =  result.data[0]
    //         console.log(take);
    //         setexcuse(take.excuse)              
    //     })
    
    return (
        <>
        {/* <button onClick={getData} className="btn btn-primary">office</button> */}
        {/* <h1>{excuse}</h1> */}
        {/* {excuse.map((user,index) => (
            <>
                <div key={index}>
                    <h1>{user.office}</h1>
                    <textarea name="" id="" cols="30" rows="10">
                        {user.excuse}
                    </textarea>
                </div>
                {/* <h1>{user.login}</h1>
            <img src={user.avatar_url} alt="" /> 
            </>
        ))} */}
        </>
    )
}
    // const git = "https://api.github.com/users"
    // const fetchAll = () => {
    //     // console.log("hello");
    //     axios.get(git).then((result) => {
    //         setallallUsers(result.data)
    //         console.log(result.data);

    //     })
    // }
    // return (
    // <>
    //     <button onClick={fetchAll}>Fetch ApI</button>
    //     {alluser.map((users,index) => (
    //             // console.log(alluser);
    //             <div key={index}>
    //                 <h1>{users.login}</h1>
    //                 <img src={users.avatar_url} alt="" />
    //             </div>


    //     ))}
        

    // </>
    

export default Fetch