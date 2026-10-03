
import { Link,Outlet, useNavigate } from "react-router-dom";
import "./App.css";

function App(){
        let navigate=useNavigate();

    function LoginClick(){
        navigate('/dashboard')
    }
    return(
        <div>
            <header className="d-flex flex-row align-items-center p-2 justify-content-between fs-2 bg-light">
                <div>
                    <span className="bi bi-pencil-square fw-bold text-primary"><Link className="text-decoration-none">Task Flow</Link></span>
                </div>
                <div>
                    <span>Products</span>
                    <span className="mx-3">Pricing</span>
                    <span>Preview</span>

                </div>
                <div>
                    <button className="btn btn-primary">Support</button>
                    <button onClick={LoginClick} className="mx-2 btn brn-warning">Login</button>

                </div>
            </header>
            <div>
                <Outlet/>
            </div>
            <footer className="bg-light text-center p-2" style={{marginTop:'100px'}}>
                & copy; copyright 2026 Task Flow
            </footer>
        </div>
    )
}
export default App;