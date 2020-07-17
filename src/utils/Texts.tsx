import { darkColor, lightColor } from '../utils/colorlist';

import styled from 'styled-components';

export const H1 = styled('text')`
  font-size: 50px;
  font-family: futura;
  font-weight: 300;

  @media (max-width: 1000px) {
    font-size: 40px;
  }
<<<<<<< HEAD
  
=======
>>>>>>> 24955d3... dooboolab.com Final completion
  @media (max-width: 800px) {
    font-size: 35px;
  }
  
  @media (max-width: 600px) {
    font-size: 30px;
  }

  @media (prefers-color-scheme: dark) {
    color: #D3D8E8;
  }

  @media (prefers-color-scheme: light){
    color: #FFFFFF;
  }
`;

export const H2 = styled('text')`
  font-size: 50px;
  font-weight: bold;
  font-family: futura;

  @media (max-width: 1000px) {
    font-size: 40px;
  }
  
  @media (max-width: 800px) {
    font-size: 35px;
  }

  @media (prefers-color-scheme: dark) {
<<<<<<< HEAD
    color: #D3D8E8;
  }

  @media (prefers-color-scheme: light){
    color: #000000;
=======
      color: ${darkColor.ON_BACKGROUND_TEXT};
  }

  @media (prefers-color-scheme: light){
      color: ${lightColor.ON_BACKGROUND_TEXT};
>>>>>>> 24955d3... dooboolab.com Final completion
  }
`;

export const H3 = styled('text')`
  font-size: 40px;
  font-family: avenir;

  @media (max-width: 1000px) {
    font-size: 30px;
  }
  
  @media (max-width: 800px) {
    font-size: 30px;
  }

  @media (prefers-color-scheme: dark) {
      color: ${darkColor.ON_SUB_BACKGROUND_TEXT};
  }
<<<<<<< HEAD

  @media (prefers-color-scheme: light){
    color: #393D7A;
  }
`;

export const H4 = styled('text')`
  font-size: 40px;
  font-family: avenir;

  @media (max-width: 1000px) {
    font-size: 30px;
  }
  
  @media (max-width: 800px) {
    font-size: 30px;
  }

  @media (prefers-color-scheme: dark) {
    color: ${darkColor.ON_SUB_BACKGROUND_TEXT};
  }

  @media (prefers-color-scheme: light){
    color: ${lightColor.ON_SUB_BACKGROUND_TEXT};
  }
`;

export const H5 = styled('text')`
  font-size: 30px;
  font-family: futura;
  
  @media (max-width: 1000px) {
    font-size: 25px;
  }  
=======

  @media (prefers-color-scheme: light){
      color: ${lightColor.ON_SUB_BACKGROUND_TEXT};
  }
`;

export const H4 = styled('text')`
  font-size: 40px;
  font-family: avenir;

  @media (max-width: 1000px) {
    font-size: 30px;
  }
  
  @media (max-width: 800px) {
    font-size: 30px;
  }


>>>>>>> 24955d3... dooboolab.com Final completion
  @media (prefers-color-scheme: dark) {
      color: ${darkColor.ON_SUB_BACKGROUND_TEXT};
  }

<<<<<<< HEAD
  @media (max-width: 800px) {
    font-size: 20px;
  }

  @media (prefers-color-scheme: dark) {
    color: ${darkColor.ON_SUB_BACKGROUND_TEXT};
  }

  @media (prefers-color-scheme: light){
    color: ${lightColor.ON_SUB_BACKGROUND_TEXT};
=======
  @media (prefers-color-scheme: light){
      color: ${lightColor.ON_SUB_BACKGROUND_TEXT};
  }
`;

export const H5 = styled('text')`
  font-size: 30px;
  font-family: futura;
  
  @media (max-width: 1000px) {
    font-size: 25px;
  }

  @media (max-width: 800px) {
    font-size: 20px;
  }


  @media (prefers-color-scheme: dark) {
      color: ${darkColor.ON_SUB_BACKGROUND_TEXT};
  }

  @media (prefers-color-scheme: light){
      color: ${lightColor.ON_SUB_BACKGROUND_TEXT};
>>>>>>> 24955d3... dooboolab.com Final completion
  }
`;

export const H = styled('text')`
  font-size: 50px;
  font-family: futura;

  @media (max-width: 1000px) {
    font-size: 40px;
  }

  @media (max-width: 800px) {
    font-size: 35px;
  }

  @media (max-width: 600px) {
    font-size: 30px;
  }

  @media (prefers-color-scheme: dark) {
<<<<<<< HEAD
    color: ${darkColor.ON_SUB_BACKGROUND_TEXT};
=======
      color: ${darkColor.ON_SUB_BACKGROUND_TEXT};
  }

  @media (prefers-color-scheme: light){
      color: ${lightColor.ON_SUB_BACKGROUND_TEXT};
>>>>>>> 24955d3... dooboolab.com Final completion
  }

<<<<<<< HEAD
  @media (prefers-color-scheme: light){
    color: ${lightColor.ON_SUB_BACKGROUND_TEXT};
=======
export const BODY1 = styled('text')`
  font-size: 24px;
  font-family: avenir;
  font-weight: lighter;
  
  @media (max-width: 1000px) {
    font-size: 20px;
  }

  @media (max-width: 800px) {
    font-size: 15px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
>>>>>>> 24955d3... dooboolab.com Final completion
  }

  @media (prefers-color-scheme: dark) {
      color: ${darkColor.ON_BUTTON};
  }

  @media (prefers-color-scheme: light){
      color: ${lightColor.ON_BUTTON};
  }
`;

<<<<<<< HEAD
export const BODY1 = styled('text')`
=======
export const BODY2 = styled('text')`
>>>>>>> 24955d3... dooboolab.com Final completion
  font-size: 24px;
  font-family: avenir;
  font-weight: lighter;
  
  @media (max-width: 1000px) {
    font-size: 20px;
  }

  @media (max-width: 800px) {
    font-size: 15px;
<<<<<<< HEAD
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }

  @media (prefers-color-scheme: dark) {
      color: #D3D8E8;
  }

  @media (prefers-color-scheme: light){
      color: #FFFFFF;
  }
`;

export const BODY2 = styled('text')`
  font-size: 24px;
  font-family: avenir;
  font-weight: lighter;
  
  @media (max-width: 1000px) {
    font-size: 20px;
  }

  @media (max-width: 800px) {
    font-size: 15px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }

  @media (prefers-color-scheme: dark) {
    color: ${darkColor.ON_BACKGROUND_TEXT};
  }

  @media (prefers-color-scheme: light){
    color: ${lightColor.ON_BACKGROUND_TEXT};
=======
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }

  @media (prefers-color-scheme: dark) {
      color: ${darkColor.ON_BACKGROUND_TEXT};
  }

  @media (prefers-color-scheme: light){
      color: ${lightColor.ON_BACKGROUND_TEXT};
>>>>>>> 24955d3... dooboolab.com Final completion
  }
`;
