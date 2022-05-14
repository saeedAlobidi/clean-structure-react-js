
import { useNavigate,Route, Navigate } from "react-router-dom";

 


    export const LoadComponent=

    (url,component) => {
        let navigate = useNavigate();

        return  <Route path={url} exact element={<component />} />
 

    }

