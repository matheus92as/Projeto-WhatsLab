import React from "react";
import * as A from "./styles/appStyle";
import Send from "./img/send_whats.png";
import Message from "./components/Message";

class App extends React.Component {
  state = {
    chat: [],
    inputNome: "",
    inputComentario: "",
  };

  adicionarComentario = () => {
    const novoComentario = {
      nome: this.state.inputNome,
      comentario: this.state.inputComentario,
    };
    const novaListaChat = [novoComentario, ...this.state.chat];

    this.setState({ chat: novaListaChat });
    this.setState({ inputNome: "" });
    this.setState({ inputComentario: "" });
  };

  deletarComentario = (mensagem) => {
    this.setState({ chat: this.state.chat.filter((msg) => msg !== mensagem) });
  };

  onChangeInputNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  onChangeInputComentario = (event) => {
    this.setState({ inputComentario: event.target.value });
  };

  render() {

    return (
      <A.MainContainer>
        <A.ContainerWhats>
          <h1>WhatsLab</h1>
          <A.ChatBox>
            {this.state.chat.map((mensagem, i) => (
              <Message
                deletarComentario={this.deletarComentario}
                mensagem={mensagem}
                key={i}
                index={i}
              ></Message>
            ))}
          </A.ChatBox>
          <A.Inputs>
            <input
              id="name"
              value={this.state.inputNome}
              onChange={this.onChangeInputNome}
              placeholder={"Nome"}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  this.adicionarComentario();
                }
              }}
            />
            <input
              id="msg"
              value={this.state.inputComentario}
              onChange={this.onChangeInputComentario}
              placeholder={"Mensagem"}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  this.adicionarComentario();
                }
              }}
            />
            <button onClick={this.adicionarComentario}>
              <img src={Send} alt="Send Button" />
            </button>
          </A.Inputs>
        </A.ContainerWhats>
      </A.MainContainer>
    );
  }
}

export default App;
