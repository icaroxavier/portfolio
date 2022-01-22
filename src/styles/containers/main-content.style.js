import styled from 'styled-components'

export const MainContentContainer = styled.div`
  padding-top: 4vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  position: relative;
  line-height: normal;

  .content {
    width: 100%;
    height: 100%;
    padding: 0 35%;
    position: relative;
    z-index: 2;
    @media (max-width: 1600px) {
      padding: 0 32%;
    }
    @media (max-width: 1500px) {
      padding: 0 30%;
    }
    @media (max-width: 1400px) {
      padding: 0 25%;
    }
    @media (max-width: 1300px) {
      padding: 0 20%;
    }
    @media (max-width: 1300px) {
      padding: 0 20%;
    }
    @media (max-width: 1100px) {
      padding: 0 18%;
    }
    @media (max-width: 800px) {
      padding: 0 15%;
    }
    @media (max-width: 450px) {
      padding: 0 10%;
    }
    @media (max-width: 400px) {
      padding: 0 8%;
    }

  }

  

  h3 {
    font-size: 24px;
    text-decoration: underline;
    margin-bottom: 1vh;
  }
  a {
        color: #99f;
        text-decoration: underline;
        font-weight: 500;
    }

  p {
    font: 300 16px 'Raleway', sans-serif;
    text-align: justify;
    img {
      float: right;
      margin-left: 3%;
    }

    u {
      font-weight: 500;
    }
  }
  .titulo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  
`

export const SelectorContainer = styled.div`
  
  display: flex;
  height: min-content;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 5px 2px;
  margin-top: 5vh;
  margin-bottom: 3vh;
  
  .no-select {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently */
  }
  
`

export const SelectorBall = styled.div`

  width: 20px;
  height: 20px;
  background: ${props => props.selected ? props.theme.colors.text : props.theme.colors.text + '88'};
  margin: 0 1%;
  border-radius: 10px;
  cursor: pointer;

`

export const SelectorArrow = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;

  font: 700 16px 'Raleway', sans-serif;
  cursor: pointer;
  width: min-content;
  height: min-content;
  margin: 0 3%;

  
  @media (max-width: 1000px) {
    margin: 0 5%;
  }
  @media (max-width: 700px) {
    margin: 0 7%;
  }
  

`
