
import Nav from '../../Component/Header/index'
import Footer from '../../Component/Footer/index'

export default
    function ({user,data,refData}) {
    const _html =
            
    <div >
      <Nav greenStyle={true} />
       <h1> user</h1>{user}
      <br/>
      <h1> data</h1>{ data.title}
      <br/>

      <h1> refData</h1>{refData.current.title}
      <br/>

       
       
       <Footer />
  </div>


    return _html
}


