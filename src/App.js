import React from "react";
import {createRoot, HashRouter, RouterProvider, Routes, Route, Link} from "react-router-dom";
import logo from './logo.svg';
import axios from "axios";
import './App.css';
import Page from "./Modules/Page";

export default function App() {
    return (<div><Page />
    </div>)
}
