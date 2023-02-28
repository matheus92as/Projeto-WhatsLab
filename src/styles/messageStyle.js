import styled from "styled-components";

export const BalaoMsgEu = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  position: relative;
  background-color: #eeeeee;
  box-shadow: 4px 6px rgba(0, 0, 0, 0.5);
  margin: 5px 10px;
  max-width: 60%;
  min-width: 8%;
  border-radius: 0.5em;
  .p2 {
    word-wrap: break-word;
  }
  &:after {
    content: "";
    border: 15px solid transparent;
    border-radius: 5px;
    border-top-color: #eeeeee;
    position: absolute;
    top: 0px;
    right: -8px;
  }
`;
export const BalaoMsgOutros = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  position: relative;
  background-color: #2f4b4b;
  box-shadow: -4px 6px rgba(0, 0, 0, 0.5);
  margin: 10px 15px;
  max-width: 60%;
  min-width: 8%;
  border-radius: 0.5em;
  .p1 {
    position: absolute;
    top: -10px;
    left: -5px;
    font-weight: bolder;
    color: #3d85c6;
    z-index: 2;
  }
  .p2 {
    margin-top: 22px;
    word-wrap: break-word;
    color: #bcbcbc;
  }
  &:after {
    content: "";
    border: 15px solid transparent;
    border-top-color: #2f4b4b;
    position: absolute;
    border-radius: 5px;
    top: 0px;
    left: -8px;
  }
`;