import { device } from '../../theme';
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

  background: ${(props): string => props.theme.btnPrimary};
  opacity: 1;
  // transition: opacity 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.5;
  }

`;

export const MenuButton = styled('button')`
  display: flex;
  width: 100%;
  height: 100%;
  
  border: 0;
  outline: 0; 
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  border-color: #ffffff;
  border-color: rgba(255, 255, 255, 0);

  background-color: #ffffff;
  background-color: rgba( 255, 255, 255, 0);

  justify-content: center;
  align-items: center;
  cursor: pointer;

  #bottom_line{
    background: #fff;
    background: rgba(255, 255, 255, 0);
  }

  &:hover{
    color: #B446BF;
    #bottom_line{
    background: linear-gradient(to right,#393D7A,#B446BF);
  }
  }

  &:active {
    color: #B446BF;
    #bottom_line{
    background: linear-gradient(to right,#393D7A,#B446BF);
  }
  }

`;

export const LogoButton = styled('button')`
  display: flex;
  height: 100%;
  height: 100%;
  
  border: 0;
  outline: 0; 
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  border-color: #ffffff;
  border-color: rgba(255, 255, 255, 0);

  background-color: #ffffff;
  background-color: rgba( 255, 255, 255, 0);

  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ContactButton = styled('button')`
  border-radius: 100px;
  border-color: #ffffff;
  border-color: rgba(255, 255, 255, 0);
  background: #02C8A3;
  //background: linear-gradient(to right, #00FACB, #9846BF);
  color: #fff;

  cursor: pointer;

  &:hover {
    background: #C9C8C8;
    //background: linear-gradient(to right, #ffffff, #C9C8C8);
    //color: #000;
  }

`;

export const MenuButton = styled('button')`
  border: 0px solid;
  outline: 0px; 
  font-size: 12px;
  padding: 6px 20px;
  font-family: avenir;
  font-weight: 500;
  border-radius: 3px;
  border-width: 1px;
  border-color: #ffffff;
  border-color: rgba(255, 255, 255, 0);
  background: #ffffff;
  background: rgba( 255, 255, 255, 0);
  color: ${({ theme }): string => theme.fontColor};
  
  cursor: pointer;

  &:hover{
    color: ${({ theme }): string => theme.colorAccent};
    
    .bottom_line{
      background: ${({ theme }): string => theme.colorAccent};
    }
  }
  
  @media ${device.mobileL} {
    font-size: 16px;
    padding: 6px 25px;
  }
  @media ${device.tablet} {
    font-size: 18px;
    padding: 8px 30px;
  }
`;

export const LogoButton = styled('button')`
  border: 0px solid;
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
  font-weight: 300;
  font-size: 10px;
  padding: 3px 10px;
  text-decoration: none;
  background: ${({ theme }): string => theme.btnPrimary};
  color: ${({ theme }): string => theme.btnPrimaryLight};

  cursor: pointer;

  &:hover{
    background: gray;
  }

  @media ${device.mobileM} {
    font-size: 12px;
    padding: 4px 20px;
  }

  @media ${device.mobileL} {
    font-size: 15px;
    padding: 5px 25px;
  }

  @media ${device.tablet} {
    font-size: 20px;
    padding: 6px 30px;
  }
  
  @media ${device.laptop} {
    font-size: 25px;
    padding: 6px 35px;
  }
`;

export const ViewMoreRoundButton = styled('button')`
  border: 2px solid;
  outline: 1px; 
  border-radius: 30px;
  
  border-color: ${({ theme }): string => theme.btnPrimary};
  background: #ffffff;
  background: rgba( 255, 255, 255, 0);
  font-family: avenir;
  font-weight: bold;
  font-size: 8px;
  padding: 3px 12px;
  text-decoration: none;
  color: ${({ theme }): string => theme.btnPrimary};

  cursor: pointer;

  &:hover {
    background: ${({ theme }): string => theme.btnPrimary};
    color: ${({ theme }): string => theme.btnPrimaryLight};
  }

  @media ${device.tablet} {
    font-size: 10px;
    padding: 4px 15px;
  }
  
  @media ${device.laptop} {
    font-size: 15px;
    padding: 5px 20px;
  }
`;

export const StoryTextButton = styled('button')`
  border: 0px solid;
  outline: 0px; 
  background: #ffffff;
  background: rgba( 255, 255, 255, 0);
  font-family: avenir;
  font-size: 15px;
  color: ${({ theme }): string => theme.btnPrimary};

  &:hover {
    color: ${({ theme }): string => theme.colorAccentLight};
  }

  cursor: pointer;
  
  @media ${device.tablet} {
    font-size: 18px;
  }
  
  @media ${device.laptop} {
    font-size: 20px;
  }
`;

export const FooterButton = styled('button')`
  border: 0px solid;
  outline: 0px; 
  background: #ffffff;
  background: rgba( 255, 255, 255, 0);
  font-family: avenir;
  font-size: 10px;
  color: #BEC8E2;
  text-decoration: underline;

  cursor: pointer;

  &:hover {
    color: ${({ theme }): string => theme.colorAccent};;
  }

  @media ${device.tablet} {
    font-size: 15px;
  }

  @media ${device.laptop} {
    font-size: 18px;
  }
`;

export const SendEmailRoundButton = styled('button')`
  border: 0px solid;
  outline: 0px; 
  border-radius: 30px;
  border-color: #ffffff;
  border-color: rgba(255, 255, 255, 0);
  font-family: avenir;
  font-weight: 300;
  font-size: 15px;
  padding: 3px 20px;
  text-decoration: none;
  background: ${({ theme }): string => theme.btnPrimary};
  color: ${({ theme }): string => theme.btnPrimaryLight};

  cursor: pointer;

  &:hover{
    background: gray;
  }

  @media ${device.tablet} {
    font-size: 20px;
    padding: 4px 25px;
  }

  @media ${device.laptop} {
    font-size: 25px;
    padding: 5px 30px;
  }
`;
