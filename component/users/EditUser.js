import React,{useState,useEffect } from "react";
import axios from "axios";
import { useHistory,useParams } from "react-router-dom";

const EditUser = () =>{
    let history = useHistory();
    const { id } = useParams();
    console.log(id);
    const [user,setUser]= useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",
    });
    const {name,username,email,phone,website} =user;
    const onInputChange = e =>{
       setUser({...user,[e.target.name]:e.target.value});
    };
    useEffect(() =>{
        loadUser();
    },[]);
    const onSubmit = async e =>{
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`,user);
        history.push("/");
    };
    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:3001/users/${id}`);
    };
    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4"> Edit A user</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control from-control-lg"
                        placeholder="Enter your Name"
                        name="name"
                        value={name}
                        onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control from-control-lg"
                        placeholder="Enter your user Name"
                        name="username"
                        value={username}
                        onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control from-control-lg"
                        placeholder="Enter your Email Address"
                        name="email"
                        value={email}
                        onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control from-control-lg"
                        placeholder="Enter your Phone number"
                        name="phone"
                        value={phone}
                        onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control from-control-lg"
                        placeholder="Enter your Website Name"
                        name="website"
                        value={website}
                        onChange={e => onInputChange(e)} />
                    </div>
                    <button className="btn btn-warning btn-block">Update user</button>
                </form>
            </div>
        </div>
    );
}

export default EditUser;