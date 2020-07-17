import { darkColor, lightColor } from '../../utils/colorlist';

import styled from 'styled-components';

export const ButtonPrimary = styled('button')`
  width: 100%;
  height: 100%;
  border: 0;
  outline: 0; 
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  border-color: #e3e3e3;
  margin-bottom: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${(props): string => props.theme.btnPrimary};
  opacity: 1;
  // transition: opacity 0.2s;

  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const MenuButton = styled('button')`
  width: 100%;
  height: 100%;
  border: 0px;
  outline: 0px;
  font-size: 20px;
  font-family: avenir;
  font-weight: 500;
  padding: 6px 40px;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  border-color: #ffffff;
  border-color: rgba(255, 255, 255, 0);
  background-color: #ffffff;
  background-color: rgba( 255, 255, 255, 0);

  cursor: pointer;

  #bottom_line{
    background: #fff;
    background: rgba(255, 255, 255, 0);
  }

  @media (max-width: 1000px) {
    font-size: 18px;
    padding: 6px 30px;
  }

  @media (max-width: 800px) {
    font-size: 15px;
    padding: 6px 25px;
  }

  @media (max-width: 500px) {
    font-size: 12px;
    padding: 6px 15px;
  }

  @media (prefers-color-scheme: dark) {
    color: ${darkColor.ON_BACKGROUND_TEXT};
    &:hover{
    color: #B290B7;
      #bottom_line{
        background: linear-gradient(to right,#9497C2,#B290B7);
      }
    }
  }

  @media (prefers-color-scheme: light){
    color: ${lightColor.ON_BACKGROUND_TEXT};
    &:hover{
    color: #B446BF;
      #bottom_line{
        background: linear-gradient(to right,#393D7A,#B446BF);
      }
    }
  }
`;

export const LogoButton = styled('button')`
  border: 0px;
  outline: 0px; 
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  border-color: #ffffff;
  border-color: rgba(255, 255, 255, 0);
  background-color: #ffffff;
  background-color: rgba( 255, 255, 255, 0);
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const IntroRoundButton = styled('button')`
  border: 0px solid;
  outline: 0px; 
  border-radius: 30px;
  border-color: #ffffff;
  border-color: rgba(255, 255, 255, 0);
  font-family: avenir;
  font-size: 32px;
  font-weight: 300;
  padding: 6px 40px;
  text-decoration: none;

  cursor: pointer;

  @media (max-width: 1000px) {
    font-size: 25px;
    padding: 6px 35px;
  }

  @media (max-width: 800px) {
    font-size: 20px;
    padding: 6px 30px;
  }

  @media (max-width: 600px) {
    font-size: 15px;
    padding: 6px 25px;
  }

  @media (prefers-color-scheme: dark) {
      background: ${darkColor.BUTTON};
      color: ${darkColor.ON_BUTTON};
     &:hover{
      background: ${darkColor.ON_BUTTON};
      color: ${darkColor.BUTTON};
    }
  }

  @media (prefers-color-scheme: light){
      background: ${lightColor.BUTTON};
      color: ${lightColor.ON_BUTTON};
    &:hover{
      background: ${lightColor.ON_BUTTON};
      color: ${lightColor.BUTTON};
    }
  }
`;

export const ViewMoreRoundButton = styled('button')`
  border: 2px solid;
  outline: 1px; 
  border-radius: 30px;
  border-color: #02C8A3;
  background: #ffffff;
  background: rgba( 255, 255, 255, 0);
  font-family: avenir;
  font-size: 20px;
  font-weight: bold;
  padding: 5px 25px;
  text-decoration: none;
  color: #02C8A3;

  cursor: pointer;

  &:hover {
    background: #02C8A3;
    color: #ffffff;
  }


  @media (max-width: 1000px) {
    font-size: 15px;
    padding: 5px 20px;
  }

  @media (max-width: 800px) {
    font-size: 10px;
    padding: 4px 15px;
  }
  
  @media (max-width: 600px) {
    font-size: 8px;
    padding: 3px 12px;
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
    background: #00BA90;
    color: #ffffff;
  }
  border-color: #00BA90;
  }
`;

export const StoryTextButton = styled('button')`
  border: 0px solid;
  outline: 0px; 
  background: #ffffff;
  background: rgba( 255, 255, 255, 0);
  font-family: avenir;
  font-size: 24px;

  cursor: pointer;

  @media (max-width: 1000px) {
    font-size: 20px;
  }

  @media (max-width: 800px) {
    font-size: 15px;
  }
  

  @media (prefers-color-scheme: light) {
    color: ${lightColor.BUTTON};
    &:hover {
    color: #393D7A;
  }
  }

  @media (prefers-color-scheme: dark) {
    color: ${darkColor.BUTTON};
    &:hover {
    color: #8A96DC;
  }
  }
`;

export const FooterButton = styled('button')`
  border: 0px solid;
  outline: 0px; 
  background: #ffffff;
  background: rgba( 255, 255, 255, 0);
  font-family: avenir;
  font-size: 20px;
  color: ${lightColor.ON_FOOTER_TEXT};

  cursor: pointer;

  @media (max-width: 1000px) {
    font-size: 18px;
  }

  @media (max-width: 800px) {
    font-size: 15px;
  }

  @media (max-width: 600px) {
    font-size: 10px;
  }

  @media (prefers-color-scheme: light) {
    &:hover {
    color: ${lightColor.TAB_BUTTON};
  }
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
    color: ${darkColor.TAB_BUTTON};
  }
  }
`;

export const SendEmailRoundButton = styled('button')`
  border: 0px solid;
  outline: 0px; 
  border-radius: 30px;
  border-color: #ffffff;
  border-color: rgba(255, 255, 255, 0);
  font-family: avenir;
  font-size: 25px;
  font-weight: 300;
  padding: 6px 40px;
  text-decoration: none;

  cursor: pointer;

  @media (max-width: 800px) {
    font-size: 20px;
    padding: 6px 30px;
  }

  @media (max-width: 600px) {
    font-size: 15px;
    padding: 6px 25px;
  }

  @media (prefers-color-scheme: dark) {
      background: ${darkColor.BUTTON};
      color: ${darkColor.ON_BUTTON};
     &:hover{
      background: ${darkColor.ON_BUTTON};
      color: ${darkColor.BUTTON};
    }
  }

  @media (prefers-color-scheme: light){
      background: ${lightColor.BUTTON};
      color: ${lightColor.ON_BUTTON};
    &:hover{
      background: ${lightColor.ON_BUTTON};
      color: ${lightColor.BUTTON};
    }
  }
`;
