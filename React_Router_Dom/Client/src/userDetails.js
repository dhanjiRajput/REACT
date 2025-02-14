import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
let token = Cookies.get("token");
let decode = token ? jwtDecode(token) : null;
const getUserDetails = () =>{
    return decode;
};

export default getUserDetails;