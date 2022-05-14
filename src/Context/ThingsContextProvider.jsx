
import React, { Component, useRef, useEffect, useState,useContext } from 'react';
export const ThingsContext = React.createContext({})
export const ThingsProvider = ThingsContext.Provider

class ThingsContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <ThingsProvider value="saeed@gmail.com">
                {this.props.children}
            </ThingsProvider>);
    }
}

export default ThingsContextProvider;