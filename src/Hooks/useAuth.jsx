import { use } from "react";
import { AuthContext } from "../Context/AuthContext";


const useAuth = () => {
  const authInfo = use(AuthContext);
  return authInfo; //return kore dite hobe must. ei return kora ta ami miss korchilam
};
export default useAuth;
