import styled from 'styled-components';

export const ButtonPrimary = styled('button')`
  display: flex;
  width: 100%;
  height: 100%;
  
  border: 0;
  outline: 0; 
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  border-color: #e3e3e3;
  margin-bottom: 8px;

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
  border: 0;
  outline: 0; 
  border-radius: 100px;
  border-style: solid;
  border-color: #ffffff;
  border-color: rgba(255, 255, 255, 0);
  background: #02C8A3;
  //background: linear-gradient(to right, #00FACB, #9846BF);
  color: #fff;

  font-size: -10px;

  cursor: pointer;

  &:hover {
    background: #C9C8C8;
    //background: linear-gradient(to right, #ffffff, #C9C8C8);
    //color: #000;
  }

`;
