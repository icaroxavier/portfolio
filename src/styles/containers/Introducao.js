import styled from 'styled-components'

export const Introducao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};

  .doguin {
    * {
      width: 50vw;
      height: 50vh;
    }
  }
`
