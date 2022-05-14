import _UserRepos from './User'
import Axios from '../../Domain/Gateway/RestAPI/Axios'
import * as action  from '../../Domain/Entities/userSlice '
import {graphqlConfig} from '../../Domain/Gateway/Graphql/GraphqlConfig'



 
export const UserRepos=(useDispatch)=> _UserRepos
.setAxiox(Axios)
.setGraphql(graphqlConfig)
.setDispatch(useDispatch)
.setAction(action)

 