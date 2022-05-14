import React, { Component } from 'react';
import { ThingsContext } from '../../../Context/ThingsContextProvider'
import Html from './html.jsx'
class ReactLogo extends Component {

   
    state = {}

    constructor(props) {
        super(props);
        console.log("constructor")
    }


    componentDidMount() {

        console.log("componentDidMount",this.context)
    }
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    render() {
        console.log(this.context)
        console.log("render")
        return (Html.call(this));
    }
}

ReactLogo.contextType = ThingsContext;


export default ReactLogo