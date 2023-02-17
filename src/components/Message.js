import React from "react";
import { BalaoMsgEu, BalaoMsgOutros } from "../styles/messageStyle";
import DeleteModal from "./DeleteModal";

class Message extends React.Component {
  state = {
    deleteModal: false,
  };

  constructor(props) {
    super(props);
  }

  onDoubleClick = () => {
    this.setState({ deleteModal: true });
  };

  confirm = () => {
    this.props.deletarComentario(this.props.mensagem);
    this.setState({ deleteModal: false });
  };

  cancel = () => {
    this.setState({ deleteModal: false });
  };

  clickFora = (event) => {
    let modal = document.getElementById(`content${this.props.index}`);
    if (!modal.contains(event.target)) {
      this.setState({ deleteModal: false });
    }
  };

  render() {
    const me = this.props.mensagem.nome.toLowerCase();

    return (
      <>
        {this.props.mensagem.comentario === "" ||
        this.props.mensagem.nome === "" ? null : me === "eu" ? (
          <>
            <DeleteModal
              index={this.props.index}
              show={this.state.deleteModal}
              clickFora={this.clickFora}
              confirm={this.confirm}
              cancel={this.cancel}
            />
            <BalaoMsgEu onDoubleClick={this.onDoubleClick}>
              <p className="p2">{this.props.mensagem.comentario}</p>
            </BalaoMsgEu>
          </>
        ) : (
          <>
            <DeleteModal
              index={this.props.index}
              show={this.state.deleteModal}
              clickFora={this.clickFora}
              confirm={this.confirm}
              cancel={this.cancel}
            />
            <BalaoMsgOutros onDoubleClick={this.onDoubleClick}>
              <p className="p1">{this.props.mensagem.nome}</p>
              <p className="p2">{this.props.mensagem.comentario}</p>
            </BalaoMsgOutros>
          </>
        )}
      </>
    );
  }
}

export default Message;
