import { AxiosRequestConfig, AxiosResponse } from "axios";


function api_interceptors_request_begin(req) {

  return true;
}


function api_interceptors_request_end(req) {

  return true;
}

function api_interceptors_response_begin(response) {

  return true;
}

function api_interceptors_response_end(response) {

  return true;
}

 
 



export default {  api_interceptors_request_begin, api_interceptors_request_end, api_interceptors_response_begin, api_interceptors_response_end }