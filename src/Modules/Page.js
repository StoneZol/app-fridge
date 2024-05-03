import * as React from "react";
import { createRoot, HashRouter, Link, Route, Routes } from "react-router-dom";
import Navigator from "./Navigator";
import AuthForm from "./AuthForm";
import RegForm from "./RegForm";
import ProductPage from "./ProductPage";

export default class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div><Navigator/>
                <Routes>
                    <Route path="/" element ={<ProductPage/>}></Route>
                    <Route path="/Auth" element={<AuthForm />}></Route>
                    <Route path="/Reg" element={<RegForm />}></Route>
                </Routes>
            </div>
        )
    }
}

