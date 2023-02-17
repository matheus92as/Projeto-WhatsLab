import React from "react";
import { Backgound } from "../styles/delModalStyle";

class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Backgound
        onClick={(e) => this.props.clickFora(e)}
        show={this.props.show}
        index={this.props.index}
      >
        <div id={`content${this.props.index}`} className="content">
          <p>Quer deletar esta mensagem?</p>
          <div id="buttons">
            <button id="no" onClick={this.props.cancel}>
              Cancelar
            </button>
            <button onClick={this.props.confirm} id="yes">
              Confirmar
            </button>
          </div>
        </div>
      </Backgound>
    );
  }
}

export default DeleteModal;
