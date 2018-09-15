import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class ModalWindow extends Component {

    state={
        modal:true
    }

    modalClose=()=> {
      let {modal}=this.state;

        this.setState({ modal: false });
      }

    render() {
        return (
            <div>
                  <Modal show={this.state.modal} onHide={this.modalClose}>
          <Modal.Header closeButton>
            <Modal.Title>UPUTSTVO</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
            Pronađite traženi broj postavkom datih brojeva u matematičku jednačinu. 
            Možete iskoristiti svaki od ponuđenih brojeva samo jedanput. 
            Ne smete postaviti dva broja zaredom bez znaka operacije između njih.
             Operacija mora biti matematički ispravna.
            </p>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.modalClose}>Zatvori</Button>
          </Modal.Footer>
        </Modal>
            </div>
        );
    }
}

export default ModalWindow;