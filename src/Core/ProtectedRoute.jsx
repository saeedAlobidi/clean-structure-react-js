import { Suspense } from 'react';
import NotFound from '../Presentation/Feature/Page3/index';
import auth from './Auth'
export default (_component) => {

   return  auth.isAuthenticated()?_component:NotFound
      
    
}