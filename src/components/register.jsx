import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react"
import { useNavigate } from "react-router-dom";


export function UserRegister(){
    
    const[msg,setMsg]=useState('');

    const[error,setErrorStyle]=useState('');

    let navigate=useNavigate();

    const formik=useFormik({
        initialValues:{
            user_id:'',
            user_name:'',
            email:'',
            password:''
        },
        onSubmit:(user)=>{
            axios.post(`http://localhost:3000/users`,user)
            .then(()=>{
                alert('register successfully')
                navigate('/login')
            })
        }
    })
    function VerifyUser(e){
        axios.get(`http://localhost:3000/users`)
        .then(response=>{
            for(var item of response.data){
                if(item.user_id===e.target.value){
                    setMsg('user id taken -try another')
                    setErrorStyle('text-danger')
                    break;
                }else{
                    setMsg('user id available')
                    setErrorStyle('text-success')
                }
            }
        })
    }

    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
      <dl>
        <dt>
            user id
        </dt>
        <dd>
            <input type="text" className="form-control" onKeyUp={VerifyUser} onChange={formik.handleChange} name="user_id"/>
        </dd>
        <dd className={error}>{msg}</dd>
          <dt>
            user name
        </dt>
        <dd>
            <input type="text" className="form-control"  onChange={formik.handleChange} name="user_name"/>
        </dd>
      
          <dt>
            password
        </dt>
        <dd>
            <input type="password" onChange={formik.handleChange}  name="password" className="form-control"/>
        </dd>
        <dd></dd>
        <dt>email</dt>
          <dd>
            <input type="email" onChange={formik.handleChange} name="email" className="form-control"/>
        </dd>
        <dd></dd>
      </dl>
      <button className="btn btn-primary w-100">Register</button>
            </form>
        </div>
    )
}