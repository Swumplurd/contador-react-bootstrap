import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import ContadorApp from './ContadorApp'

const divRoot = document.querySelector("#root");

ReactDOM.render(<ContadorApp value={0} />, divRoot);