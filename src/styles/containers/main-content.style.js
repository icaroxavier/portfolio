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
    padding: 0% 35%;
    position: relative;
    z-index: 2;
    @media (max-width: 1600px) {
      padding: 0% 32%;
    }
    @media (max-width: 1500px) {
      padding: 0% 30%;
    }
    @media (max-width: 1400px) {
      padding: 0% 25%;
    }
    @media (max-width: 1300px) {
      padding: 0% 20%;
    }
    @media (max-width: 1300px) {
      padding: 0% 20%;
    }
    @media (max-width: 1100px) {
      padding: 0% 18%;
    }
    @media (max-width: 800px) {
      padding: 0% 15%;
    }
    @media (max-width: 450px) {
      padding: 0% 10%;
    }
    @media (max-width: 400px) {
      padding: 0% 8%;
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
