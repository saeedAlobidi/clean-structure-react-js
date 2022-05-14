
import './style.css';
import { Link } from "react-router-dom";


export default
    function () {
    const _html =

    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0" 
    style={this.props.greenStyle?{background:"#1abc9c"}:{background:"#000"}}>
    <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
    <li><Link to="/ReactLogo" className="nav-link px-2 text-white">Logo</Link></li>
    <li><Link to="/test" className="nav-link px-2 text-white">Pricing</Link></li>
    <li><Link to="/test" className="nav-link px-2 text-white">FAQs</Link></li>
    <li><Link to="/test" className="nav-link px-2 text-white">About</Link></li>

  </ul>



    return _html
}
