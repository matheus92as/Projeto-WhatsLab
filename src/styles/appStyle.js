import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
export const ContainerWhats = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  height: 90%;
  position: relative;
  border: 7px solid black;
  border-radius: 30px;
  overflow: hidden;
  background-color: #8fce00;
  background-image: url(https://i.pinimg.com/474x/40/39/e0/4039e0f1ef08b7b965bacb4641a7af49--wallpaper-whatsapp-whatsapp-background.jpg);
  h1 {
    color: white;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 770px) {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0px;
  }
`;
export const ChatBox = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  overflow-y: scroll;
  padding-bottom: 20px;
  justify-content: flex-start;
  flex-direction: column-reverse;
  text-align: flex-start;
  p {
    padding: 0px 15px;
    margin: 10px 0;
  }
`;

export const Inputs = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: #1e4545;
  padding: 15px 0;
  z-index: 2;

  input {
    border: 1px solid black;
    border-radius: 9px;
    margin-left: 15px;
    padding: 15px 13px;
    background-color: rgba(97, 124, 124, 0.5);
    color: #eeeeee;
    border: none;
    :focus,
    valid {
      outline: none;
    }
    ::placeholder {
      color: #bcbcbc;
    }
  }
  #name {
    width: 10%;
    margin: 0 5px;
    margin-left: 15px;
  }
  #msg {
    width: 75%;
    margin: 0 5px;
  }
  button {
    width: fit-content;
    margin-right: 15px;
    border: none;
    background-color: inherit;
    img {
      width: 25px;
    }
  }
  @media screen and (min-device-width: 376px) and (max-device-width: 430px) {
    /* padding: 10px; */
    #name {
      width: 12%;
      margin-left: 10px;
    }
    #msg {
      width: 65%;
      margin: 0 5px;
    }
    button{
      margin-right: 10px;
    }
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 375px){
    #name {
      width: 12%;
      margin: 0;
      margin-left: 5px;
    }
    #msg {
      width: 60%;
      margin: 0 5px;
    }
    button{
      padding: 0;
      margin-right: 5px;
    }
  }
`;
