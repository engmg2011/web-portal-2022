import axios from 'axios';
import {ApiUrl} from "../config/api";


export const getUsersList = async (params) => (await axios.get(ApiUrl+'/customers', {params})).data;
export const createUser = async (data) => await axios.post(ApiUrl+'/customers/create', data);
export const updateUser = async (data) => await axios.post(ApiUrl+`/customers/${data.id}/update`, data);
export const deleteUser = async (id) => await axios.post(ApiUrl+`/customers/${id}/delete`);
export const getUser = async (id) => (await axios.get(ApiUrl+'/customers/'+id)).data;

