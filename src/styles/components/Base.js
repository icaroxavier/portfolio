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
        padding: 0 5%;
        height: auto;
        box-shadow: 3px 3px 4px black;
       
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
     
      * {
       
      }
     
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
  }
`
