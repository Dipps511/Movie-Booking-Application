import React, {Component} from 'react';
import "./Modal.css";
import Modal from 'react-modal';
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
class LoginAndRegisterModal extends Component{
    render(){
        return(
            <React.Fragment>
                <div>
                    <Modal>
                        <form>
                            <h1>hello</h1>
                            <Button>check</Button>
                        </form>
                    </Modal>
                </div>
            </React.Fragment>
        )
    }
}
export default LoginAndRegisterModal;
