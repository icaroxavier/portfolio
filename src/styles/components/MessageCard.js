import styled from "styled-components"

export const MessageCardComponent = styled.div`

    width: 100%;
    height: min-content;
    display: flex;
    flex-direction: column;
    padding: 2% 5%;
    background: #171718;
    border-radius: 10px;
    position: relative;
    margin-bottom: 2vh;

    h2 {
        font-size: 18px;
        color: ${props => props.theme.colors.text};
    }

    h3 {
        font-size: 16px;
        color: ${props => props.theme.colors.text}E6;
        
    }
    p {
        font-size: 14px;
        color: ${props => props.theme.colors.text}CC;
        line-height: normal;
        margin: 5px 0;
    }

    span {
        font-size: 16px;
        color: ${props => props.theme.colors.text}E6;
    }

    
`