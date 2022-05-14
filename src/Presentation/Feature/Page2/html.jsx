
import './style.css';
import logo from '../../Resources/logo.svg';
import Nav from '../../Component/Header/index'
import Footer from '../../Component/Footer/index'
export default
  function () {
  const _html =

    <div className="App">
      <Nav greenStyle={true} />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>


  return _html
}


