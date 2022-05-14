import React, { Component } from 'react';
import Html from './html.jsx'
export default
class Nave extends Component {
    state = {}
    constructor(props) {
        super(props);
       
    }
    

    render() {
        return (Html.call(this));
    }
}


