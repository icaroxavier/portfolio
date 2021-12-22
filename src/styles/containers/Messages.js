import styled from "styled-components";

export const MessagesContainer = styled.div`

    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .passwordTeste {
        height: 5vh;
        width: 10vw;
        position: absolute;
        top: 40%;
        right: 50%;
        margin-right: -5vw;
        background: #222224;
        border-radius: 5px;
        color: ${props =>  props.theme.colors.text};
        padding: 0 1vw;

        @media (max-width: 1025px) {
            width: 20vw;
            margin-right: -10vw;
        }
        @media (max-width: 700px) {
            width: 40vw;
            margin-right: -20vw;
        }
        @media (max-width: 300px) {
            width: 80vw;
            margin-right: -40vw;
        }
        
    }

    .divMessages {
        margin-top:4vh;
        width: 30vw;
        height: 100%;
    }

`