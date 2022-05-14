import _UserUsecase from './User'
import {UserRepos} from '../Repository/Index'



export const UserUsecase= (useDispatch)=> _UserUsecase.setUserRepos(UserRepos(useDispatch))


 