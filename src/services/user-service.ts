import axios from "axios";
import { URL_API_GITHUB } from "../utils/system";

export function findUserByUsername(username: string){
    return axios.get(`${URL_API_GITHUB}/${username}`);
}