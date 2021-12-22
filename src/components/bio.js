import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const BioSection = styled(Box)`
  padding-top: 4px;
  padding-bottom: 4px;
 display: flex;
 width: 100%;
 height: min-content;
 
 text-align: left;
 border-bottom: 1px solid white;
 margin-bottom: 2vh;
`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
  height: 1px;
  width: min-content;
  height: min-content;
  white-space: nowrap;
  font: 700 16px Roboto, sans-serif;
  
`

export const BioDescription = styled.span`
 font: 300 16px 'Raleway', sans-serif;
 text-align: left;
`