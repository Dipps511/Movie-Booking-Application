// import React,{Component} from "react";
// import "./Header.css";
// import Logo from '../../assets/logo.svg';
// import Button from "@material-ui/core/Button";
// import LoginAndRegisterModal from "./LoginAndRegisterModal";
// import Modal from "react-modal";
// const LogoStyle = {
//     textAlign: 'center',
//     height:'35px',
//     background: '#ff7f7f',
//     position: 'fixed', top: 9, left: 9, right: 0, bottom: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//     animation: 'spin 8s linear infinite',
//     textTransform: 'uppercase'
// };
//
// const loginHandler = () => {
//
//     }
//
// function modalOpen() {
//     const [modalIsOpen, setIsOpen] = React.useState(false);
//
//     function openModal() {
//         setIsOpen(true);
//     }
//
//     function closeModal() {
//         setIsOpen(false);
//     }
// }
//
// class Header extends Component{
//     render(){
//         return(
//             <React.Fragment>
//                 <div className={"header"}>
//
//                     <span><img  src={Logo} alt="logo" style={LogoStyle} ></img></span>
//                     <span><Button variant="contained" color="default" onClick={modalOpen} style={{marginLeft: 1200}}>Login</Button></span>
//                 </div>
//                 <div>
//                     <Modal isOpen={""}></Modal>
//
//
//                 </div>
//             </React.Fragment>
//
//
//         )
//     }
// }
// export default Header;


import React, { Fragment, useState } from "react";
import {
    Button,
    Tab,
    Tabs,
    TextField,
    Typography,
    FormControl,
} from "@material-ui/core";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Panel from "../tabPanel/Panel";
import "./Header.css";

//Header.JS   common functionality

const Header = ({ bookShow, bookShowId }) => {
    const [loginOpen, setLoginOpen] = useState(false);
    const [value, setValue] = useState(0);
    const [login, setLogin] = useState(false);
    const [success, setSuccess] = useState(false);

    const loginHandler = () => {
        setLoginOpen(true);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const loginFormHandler = () => {
        setLogin(true);
        setLoginOpen(false);
    };

    const registerFormHandler = () => {
        setLogin(false);
        setSuccess(true);
    };

    return (
        <Fragment>
            <div className="header">
                <Link to="/">
                    <img className="logo" src={Logo} alt="logo" />
                </Link>
                <div className="book-show">
                {login ? (
                    <Link
                        className="book-show-button"
                        to={"/book-show/" + bookShowId}
                        style={{textDecoration: "none"}}
                    >
                        <Button variant="contained" name="Book Show" color="primary">
                            Book Show
                        </Button>
                    </Link>
                ) : (<Button
                    className="book-show-button"

                    variant="contained" name="Book Show"
                    color="primary" style={{textDecoration: "none"}}
                    onClick={loginHandler}>
                    Book Show
                </Button>)
                }
                {/*</div>*/}
                {/*<div className="button-group">*/}
                    {login ? (
                        <Button
                            variant="contained"
                            name="Logout"
                            onClick={() => {
                                setLogin(false);
                            }}
                        >
                            Logout
                        </Button>
                    ) : (
                        <Button variant="contained" name="Login" onClick={loginHandler}>
                        Login
                        </Button>
                        )
                    }





                </div>
            </div>

            <Modal
                isOpen={loginOpen}
                ariaHideApp={false}
                style={{
                    overlay: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(255, 255, 255, 0.75)",
                    },
                    content: {
                        position: "absolute",
                        top: "40px",
                        left: "500px",
                        right: "500px",
                        bottom: "40px",
                        width: "300px",
                        border: "1px solid #ccc",
                        background: "#fff",
                        overflow: "auto",
                        WebkitOverflowScrolling: "touch",
                        borderRadius: "4px",
                        outline: "none",
                        padding: "20px",
                    },
                }}
            >
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Login" />
                    <Tab label="Register" />
                </Tabs>
                <Panel value={value} index={0}>
                    <TextField label="Username" required style={{ margin: "5px 0px" }} />
                    <TextField
                        label="Password"
                        required
                        type="password"
                        style={{ margin: "5px 0px" }}
                    />
                    <br/>
                    <Button
                        variant="contained"
                        onClick={loginFormHandler}
                        color="primary"
                        style={{ margin: "20px 20px" }}
                    >
                        Login
                    </Button>
                </Panel>
                <Panel value={value} index={1}>
                    <TextField
                        label="First Name"
                        required
                        style={{ margin: "5px 0px" }}
                    />
                    <TextField label="Last Name" style={{ margin: "5px 0px" }} />
                    <TextField label="Email" required style={{ margin: "5px 0px" }} />
                    <TextField
                        label="Password"
                        required={true}
                        type="password"
                        style={{ margin: "5px 0px" }}
                    />
                    <TextField
                        label="Contact No"
                        required
                        style={{ margin: "5px 0px" }}
                    />
                    {success ? (
                        <Typography variant="subtitle1" gutterBottom>
                            Registration Successful. Please login!
                        </Typography>
                    ) : null}
                    <Button
                        variant="contained"
                        onClick={registerFormHandler}
                        color="primary"
                        style={{ margin: "20px 20px" }}
                    >
                        Register
                    </Button>
                </Panel>
            </Modal>
        </Fragment>
    );
};

export default Header;