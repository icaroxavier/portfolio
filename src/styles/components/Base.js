import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  margin: 0;
  
  * {
    margin: 0;
    padding: 0;
  }

 

  background: ${props => props.theme.colors.background};
  
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  main {
    width: 100%;
    height: 100%;
  }

  h1 {
    font-size: 54px;
    
    background-image: linear-gradient(45deg, #ff003d, #3d00eb);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    
  }

  p {
    font-size: 24px;
    line-height: 32px;
    ${props => props.theme.colors.text};
  }

  header {
    padding: 1vh 5%;
    display: grid;
    background: ${props => props.theme.colors.background};
    
    grid-template-columns: 6fr 2fr;
    @media (max-width: 1025px) {
      grid-template-columns: 3fr 3fr;
    }
    @media (max-width: 700px) {
      grid-template-columns: 1fr 4fr;
    }

    width: 100%;
    height: 10vh;
    box-shadow: 0px 0px 7px black;
    z-index: 2;

    

    button {
      border: 2px solid white;
        border-color: ${props => props.theme.colors.text};
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        padding: 2% 5%;
        height: auto;
        @media (max-width: 350px) {
          height: min-content;
          padding: 2% 3%;
          font-size: 15px;
        }

        @media (max-width: 300px) {
          height: min-content;
          padding: 2% 3%;
          font-size: 13px;
        }
       

        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
       
        align-self: center;
        border-radius: 100px;
        cursor: pointer;
        font-family: 'Raleway', sans-serif;
        font-weight: 500;

    }

    svg {
      margin: 0;
      padding: 0;
      height: 8vh;
      width: auto;
      cursor: pointer;
      
    }

   

    .botoes {
      display: flex;
      justify-content: space-around;
    }
  }

  main {
    flex-grow: 1;
   
  }

  footer {
    box-shadow: 0px 0px 7px black;
    height: 10vh;
    width: 100%;
    background: ${props => props.theme.colors.background};
    padding: 1vh 25%;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1025px) {
      font-size: 14px;
    }

    @media (max-width: 700px) {
      font-size: 12px;
      padding: 1vh 15%;
    }

    @media (max-width: 500px) {
      font-size: 12px;
      padding: 1vh 10%;
    }

   
   
    span {
      color: #999;
      height: min-content;
      @media (max-width: 1025px) {
        font-size: 14px;
      }
      @media (max-width: 700px) {
        font-size: 12px;
      }
      @media (max-width: 300px) {
        font-size: 10px;
      }
      
    }

    

    .containerImages {
       flex-grow: 1;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      
      .divImage {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; 
        
        height: 5vh;
        width: 5vh;
        margin: 0 5px;
        background: #222225;
        box-shadow: 0px 0px 7px black;
 
        padding: 1vh;
        border-radius: 360px;
        cursor: pointer;
      }
    }
  }
`
