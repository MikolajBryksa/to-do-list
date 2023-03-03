import React, { Component } from 'react'
import * as Icon from 'react-bootstrap-icons';

class CardForm extends Component {
    userNameInput = React.createRef();

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.userNameInput.current.value)

    }

    render() {
        return (
            <div className="text-center m-2">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Github Username" ref={this.userNameInput} required/>
                    <button type="submit" className="btn btn-primary me-1"><Icon.CheckLg /></button>
                </form>
            </div>
        )
    }
}

export default CardForm;