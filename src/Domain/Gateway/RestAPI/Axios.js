import axios from 'axios'
import progress from 'nprogress'
import events from '../../Core/globalEvent'
import apiConstraints from '../../Core/APIConstraints'

 class Axios{
    apiClient;
    constructor (){
        this.apiClient = axios.create({
            baseURL: apiConstraints.baseURL,
            timeout: 1000000,
            headers: {
                Accept: 'application/json',
                'X-P-T': apiConstraints.toekn
            }
        });
    }
     

    
      initInterceptors() {
 
        this.apiClient.interceptors.request.use(function (req) {
    
            events.api_interceptors_request_begin(req);
    
            !progress.isStarted() ? progress.start() : false
    
            const userToken = window.sessionStorage.getItem("X-U-T");
    
            req.headers['X-U-T'] = userToken == null ? "not authentication :(" : userToken;
    
            events.api_interceptors_request_end(req);
    
            return req;
        });
    
    
        this.apiClient.interceptors.response.use(function (response) {
    
            events.api_interceptors_response_begin(response);
    
            progress.isStarted() ? progress.done() : progress.isStarted()
    
            const userToken = response.headers['X-U-T'];
    
            window.sessionStorage.setItem("X-U-T", userToken == null ? "not authentication :(" : userToken);
    
            events.api_interceptors_response_end(response);
            return response;
        });
     
    }

      getInstance(){
        return this.apiClient;
    }
}

export default new Axios()
 



