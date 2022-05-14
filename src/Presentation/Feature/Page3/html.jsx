
import './style.css';
import { Link } from "react-router-dom";
import Button from '../../Component/UI/Button'
export default
  function (navigate) {
  const _html =

    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h1>
              Oops!</h1>
            <h2>
              404 Not Found</h2>
            <div className="error-details">
              Sorry, an error has occured, Requested page not found!
            </div>
            <div className="error-actions">
              Take Me Home
              <br />
              <Button/>


            </div>
          </div>
        </div>
      </div>
    </div>



  return _html
}


