import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext)

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div>
             <div className="divider">OR</div>
             <div className="text-center">
             <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
                G
             </button>
             </div>
        </div>
    );
};

export default SocialLogin;