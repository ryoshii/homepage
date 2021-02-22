import styled from 'styled-components'
import { Box } from '../src/components/foundation/layout/Box'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return ( 
  <Box
    flex="1"
    display="flex"
    flexWrap="wrap"
    flexDirection="column"
    justifyContent="space-between"
    backgroundImage="url(/images/bubbles.svg)"
    backgroundRepeat="no-repeat"
    backgroundPosition="bottom right"
  >
    <Title>My page</Title>
  </Box>)
}
