
 import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

 class User{ 


     server;
     graphql;
     dispatch; 
      userAction
     setAxiox=(server)=> {
        this.server = server
        return this;
    }
    setGraphql=(graphql)=> {
        this.graphql = graphql
        return this;
    }
     setDispatch=(dispatch)=> {
        this.dispatch = dispatch
        return this;
    }

    setAction=(action)=> {
      this.userAction = action
      return this;
  }


     setUserInfo=async(data) =>{
      const {incrementByAmount} = this.userAction
        this.dispatch(incrementByAmount(2022))
        
     }
   
    
      getUserInfo=async(id)=> {
      
       return  this.server.getInstance().get(id);
     
    }
  
    getUseFromGraphqlInfo=async()=> {
        return   this.graphql
        .query({
          query: gql`
          query ($id: Int) { # Define which variables will be used in the query (id)
            Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
              id
              title {
                romaji
                english
                native
              }
            }
          }
          `
        });
      
     }



 
}

export default new User()