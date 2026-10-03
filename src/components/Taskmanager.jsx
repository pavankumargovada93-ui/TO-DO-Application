import { UserLogin } from "./login";
import { UserRegister } from "./register";

export function TaskManagerHome(){
    return(
       
         <section className="d-flex justify-content-center align-items-center" style={{height:"600px",marginTop:'50px'}}>
            <div style={{width:'300px',height:'400px'}}>
                <ul className="nav nav-tabs">
                    <li className="nav-item"><a href="#register"data-bs-toggle="tab" className="nav-link active fw-bold">User Register</a></li>
                     <li className="nav-item"><a href="#login" data-bs-toggle="tab" className="nav-link fw-bold">User Login</a></li>


                </ul>
                <div className="mt-3 tab-content">
                    <div className="tab-pane p-3 active" id="register">
                       <UserRegister/>
                    </div>
                    <div className="tab-pane" id="login">
                          <UserLogin/>
                    </div>

                </div>

            </div>
        </section>
       
    )
}