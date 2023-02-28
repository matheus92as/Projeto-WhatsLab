import styled from "styled-components";

export const Backgound = styled.div`
  display: ${(props) => (props.show === false ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(30, 69, 69, 0.7);
  z-index: 3;
  position: absolute;
  bottom: 0;
  .content {
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    width: 300px;
    height: fit-content;
    padding: 10px;
    border-radius: 10px;
    background-color: #617c7c;
    color: #eeeeee;
    p {
      margin: 5px 0 25px 0px;
      padding: 0;
    }
    button {
      padding: 10px 20px;
      border-radius: 5px;
      margin: 5px;
    }
  }
  #buttons {
    display: flex;
    justify-content: end;
  }
  #no {
    border: 1px solid #eeeeee;
    background-color: inherit;
    color: #37af03;
    transition: 0.2s;
    :hover {
      background-color: #8ea2a2;
      color: #45d904;
      transition: 0.2s;
    }
  }
  #yes {
    border: none;
    background-color: #37af03;
    color: black;
    transition: 0.2s;
    :hover {
      background-color: #45d904;
      transition: 0.2s;
    }
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 400px) {
    .content {
      width: 80%;
      button {
        margin: 0px;
      }
      #buttons {
        gap: 5px;
      }
    }
  }
`;
