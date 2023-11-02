import React from 'react'
import FunctionsSketchpad from './components/FunctionSketchpad'
import GlobalStyle from './styles/global'
import {
  BorderedContainer,
  Title,
  TopLeft
} from './styles/styles'


const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />

      <FunctionsSketchpad />

      <TopLeft>
        <BorderedContainer>
          <Title>math-render</Title>
        </BorderedContainer>
      </TopLeft>
    </>
  )
}

export default App
