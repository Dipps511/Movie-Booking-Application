import React,{Component} from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import "./Home.css";
import Header from "../../common/header/Header";
import Heading from "../../common/heading/Heading";
import {GridListTile, GridListTileBar} from "@material-ui/core";

import BookShow from "../bookshow/BookShow";
import {Details} from "@material-ui/icons";

class Home extends Component{
    render(){
        return(
            <div>
            <Header/>
            <Heading home={"Upcoming Movies"}/>
                {/*<BookShow/>*/}
                {/*<Details/>*/}
            </div>
        )
    }
}
export default Home;

