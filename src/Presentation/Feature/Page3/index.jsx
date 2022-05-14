import React, { Component } from 'react';
import Html from './html.jsx'


export default
    class NotFound extends Component {
    state = {
        s: "s"
    }
    constructor(props) {
        super(props);
        console.log("constructor")
    }



    componentDidMount() {
        console.log("componentDidMount")
    }
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    render() {
        console.log("render")
        return (Html.call(this));
    }
}


