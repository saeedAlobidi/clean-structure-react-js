 
let container = null;
 import {UserRepos} from '../Index'
 const setDispatch=jest.fn();
 jest.setTimeout(1000000)
describe("Repository", () => {
  
  beforeEach(() => {
    
  });
  
  it("should be return object that have userId=1 when call axios api and pass 1", async() => {

      const  result= await UserRepos(setDispatch).getUserInfo("1")
    
      expect(result["data"])
      .toMatchObject({ userId:1, id: 1, title: 'delectus aut autem', completed: false })
      

});

it("should be return object that have  when call graphql", async() => {

  const  result= await UserRepos(setDispatch).getUseFromGraphqlInfo()
 expect(result.data["Media"])
  .toMatchObject({__typename: 'Media',id: 1, title: { __typename: 'MediaTitle', romaji: 'Cowboy Bebop', english: 'Cowboy Bebop', native: 'カウボーイビバップ' } })
  

});
  afterEach(() => {
     
  });
});

