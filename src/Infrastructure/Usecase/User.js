 class User {
    userRepos;
    constructor() {

    }
 

    setUserRepos = (userRepos) => {
        this.userRepos = userRepos
        return this;
    }


    getUserInfo = async (id) => {

        this.userRepos.setUserInfo(id)
        const { data } = await this.userRepos.getUserInfo(id)
        return data;
    }
    getUseFromGraphqlInfo = async () => {

        const data=await this.userRepos.getUseFromGraphqlInfo()
        console.log(data)
    }
    

} 

export default new User()