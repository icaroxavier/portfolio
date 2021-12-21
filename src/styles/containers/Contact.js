import styled from "styled-components";

export const Contact = styled.div`

    width: 100vw;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    padding: 5% 35%;

    @media (max-width: 1300px) {
        padding: 5% 24%;
    }
    @media (max-width: 1025px) {
        padding: 5% 15%;
    }
    @media (max-width: 700px) {
        padding: 5% 7%;
    }
    

    .content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        color: ${props => props.theme.colors.text};
        width: 100%;
        height: 100%;
        background: ${props => props.theme.colors.background};
        box-shadow: 0px 0px 7px black;
        padding: 5% 5%;
        align-items: center;
        border-radius: 10px;

        h2 {
            font-size: 24px;
            font-family: 'Raleway', sans-serif;
            font-weight: 700;
            margin-top: 2vh;
            margin-bottom: 2vh;
            
        }

        form {
            margin-top: 5%;
            display: flex;
            flex-direction: column;
            width: 80%;

            label {
                margin-bottom: 4px;
                width: 100%;
            }

            input {
                width: 100%;
                background:  ${props => props.theme.colors.background};
                border-bottom: ;
                margin-bottom: 3vh;
                height: 4vh;
                border: none;
                border-bottom: 1px solid ${props => props.theme.colors.text};
                border-radius: 3px;
                
                padding: 1% 2%;
                transition: 0.5s;
            }

            textarea {
                background:  ${props => props.theme.colors.background};
                border: 1px solid ${props => props.theme.colors.text};
                border-radius: 4px;
                margin-bottom: 5vh;
                padding: 2%;
                transition: 0.5s;
            }

            button {
                border: 2px solid ${props => props.theme.colors.text};
                width: min-content;
                align-self: center;
                padding: 3% 10%;
                border-radius: 10px;
                margin-bottom: 2%;
            }

        }
        

    }

`