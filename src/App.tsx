import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import IterativeFunctionRender from './components/IterativeFunctionRender'
import GlobalStyle from './styles/global'
import {
  BorderedContainer,
  ThreeCanvasContainer,
  Title,
  TopLeft,
  BottomCenter
} from './styles/styles'
import MathFunction from './math/MathFunction'
import IterativeFunction from './math/IterativeFunction'
import IterativeFunctionControls from './components/IterativeFunctionControls'


const App: React.FC = () => {
  const [func, setFunc] = useState(new IterativeFunction(
    new MathFunction('i 10 / cos'),
    new MathFunction('i 10 / sin'),
    new MathFunction('0')
  ))

  return (
    <>
      <GlobalStyle />

      <ThreeCanvasContainer>
        <Canvas>
          <OrbitControls
            minDistance={1}
            maxDistance={100}
            enableDamping={false}
          />
          <color attach="background" args={['#dedede']} />
          <group>
            <IterativeFunctionRender
              func={func}
              color="black"
            />
          </group>
        </Canvas>

        <TopLeft>
          <BorderedContainer>
            <Title>math-render</Title>
          </BorderedContainer>
        </TopLeft>

        <BottomCenter>
          <IterativeFunctionControls
            func={func}
            onFuncChange={setFunc}
            color="black"
          />
        </BottomCenter>
      </ThreeCanvasContainer>
    </>
  )
}

export default App
