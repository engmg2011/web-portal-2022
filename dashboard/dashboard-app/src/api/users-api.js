import axios from 'axios';
import {ApiUrl} from "../config/api";


export const usersList = async (params) => await axios.get(ApiUrl+'/users', {params});
export const createUser = async (data) => await axios.post(ApiUrl+'/users', data);
export const updateUser = async (data) => await axios.post(ApiUrl+`/users/${data.id}/delete/`, data);
export const deleteUser = async (id) => await axios.post(ApiUrl+`/users/${id}/delete/`);
