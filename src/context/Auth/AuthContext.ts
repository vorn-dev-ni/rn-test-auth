import { createContext } from "react";
import { FormLoginType } from "../../components/Auth/LoginForm";

type AuthContextType = {
 accessToken:string;
 refreshToken:string;
 session_id:string; // islogin = true 
 logout:()=>void;
 login:(form:FormLoginType,type:'email'|'telephone')=>void;
 loading?:boolean;
 getUserprofile: () => void,
 currentUser:UserType
}
 const AuthContext = createContext({} as AuthContextType )

 export default AuthContext