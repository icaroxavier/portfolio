import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  padding: 2vh 10%;
  background: ${props => props.theme.colors.background};
  @media (max-width: 800px) {
    padding: 2vh 3%;
  }
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  main {
    width: 100%;
    height: 100%;
  }

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
  }

  p {
    font-size: 24px;
    line-height: 32px;
    ${props => props.theme.colors.text};
  }

  header {
    display: grid;
    grid-template-columns: 6fr 2fr;
    @media (max-width: 1025px) {
      grid-template-columns: 3fr 3fr;
    }
    @media (max-width: 700px) {
      grid-template-columns: 1fr 3fr;
    }

    width: 100%;
    height: 6vh;
    margin-bottom: 4vh;

    * {
      z-index: 3;
    }

    button {
      height: 100%;
    }

    svg {
      margin: 0;
      padding: 0;
      width: auto;
      cursor: pointer;
      height: 8vh;
    }

    .fundoHeader {
      position: absolute;
      left: 0;
      top: 0;
      width: 100vw;
      height: 12vh;
      z-index: 1;
      background: #333;
    }

    .botoes {
      z-index: 2;
      display: flex;
      justify-content: space-around;
      margin-top: 2vh;
      * {
        border: 2px solid white;
        border-color: ${props => props.theme.colors.text};
        background: #333;
        color: ${props => props.theme.colors.text};
        padding: 0 5%;

        border-radius: 100px;
        cursor: pointer;
        font-family: 'Raleway', sans-serif;
        font-weight: 500;
      }
      margin-bottom: 2vh;
    }
  }
`
