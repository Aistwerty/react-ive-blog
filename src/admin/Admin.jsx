import React from "react";
import {ClientAuth} from "./Auth";

export class Admin extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.changeH1("Кабинет администратора");
    }

    render() {
        return <h1> страница админа</h1>
    }
}