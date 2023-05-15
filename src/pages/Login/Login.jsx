import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthContext)

    const handleLogin = (event) =>{
        event.preventDefault()
        const form = event.target 
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user 
            console.log(loggedUser)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <div className="mr-12 w-1/2">
                <img src={login} alt="" />
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                <h1 className="text-3xl text-center font-bold">Login</h1>
                  <form onSubmit={handleLogin}>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" name="email" className="input input-bordered" />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" name="password" className="input input-bordered" />
                        <label className="label">
                          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                      </div>
                      <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Login" />
                      </div>
                  </form>
                  <p className="my-4 text-center">New to Car Doctors? <Link className="text-orange-600 font-bold" to="/signup">Sign Up</Link></p>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Login;