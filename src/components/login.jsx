import { useFormik } from "formik";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom"
import axios from "axios";





export function UserLogin(props){

    let navigate=useNavigate();
    
    const[cookies,setCookie,removeCookie]=useCookies(['username'])
    
    const formik=useFormik({
        initialValues:{
            user_id:'',
            user_name:'',
            password:''
        },
        onSubmit:(user)=>{
            axios.get(`http://localhost:3000/users`)
            .then(response=>{
                var result=response.data.find(item=>item.user_id.trim()===user.user_id.trim())
                if(result){
                    if(result.password===user.password){
                        setCookie("username",result.user_name||result.username)
                        setCookie('userid',result.user_id,{path:'/'});
                        navigate('/dashboard')

                    }else{
                        alert('Invalid Password')
                    }
                }else{
                    alert('Invalid user_id')
                }
            })
        }
    })
    return(
       <div>
         <form onSubmit={formik.handleSubmit} className={`${props.width}`}>
            <h3 className={`${props.title}`}>User Login</h3>
            <dl>
                <dt>User Id</dt>
                <dd>
                   <input type="text" onChange={formik.handleChange} className="form-control" name="user_id"/>
                </dd>
                  <dt>Password</dt>
                <dd>
                   <input type="password" onChange={formik.handleChange} className="form-control" name="password"/>
                </dd>
              
                
              
             
                 
            </dl>
            <button type="submit" className="btn btn-dark w-100">Login</button>
        </form>
       </div>
    )
}