import { publicRequest } from "../requestMetods";

export const register = async () => {
   publicRequest.post("/auth/register")
}