import styled from 'styled-components'

const Page = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 257px 1fr;
`
const Inner = styled.div`
  display: 'flex';
  flex-direction: 'column';
`

const Content = styled.main`
  padding: 38px 30px;
`

export { Page, Inner, Content }
