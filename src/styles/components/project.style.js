import styled from "styled-components";

export const ProjectContainer = styled.div`

    width: 100%;
    padding: 0 2%;
    margin-bottom: 3vh;
    
    h2 {
        font: 400 20px Roboto, sans-serif;
        padding: 3% 0;
        
    }

    p {
        font: 300 16px 'Raleway', sans-serif;
        padding: 2% 1%;
    }

    a {
        color: #99f;
        text-decoration: underline;
    }

    img {
        transition: 0.2s;
    }

    .imageContainer {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: ${props => props.padding};
    }


`
