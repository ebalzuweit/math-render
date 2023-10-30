import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import LabeledInput from './components/LabeledInput'
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


const App: React.FC = () => {
  const [zFunc, setZFunc] = useState(new MathFunction('0'))

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
              xFct={(i: number) => Math.cos(i / 10)}
              yFct={(i: number) => Math.sin(i / 10)}
              zFct={zFunc.function}
            />
          </group>
        </Canvas>

        <TopLeft>
          <BorderedContainer>
            <Title>math-render</Title>
          </BorderedContainer>
        </TopLeft>

        <BottomCenter>
          <BorderedContainer>
            <LabeledInput
              label='x:'
              input='i 10 / cos'
              onChange={(e) => {
                console.log('Updating x function')
              }}
            />
            <LabeledInput
              label='y:'
              input='i 10 / sin'
              onChange={(e) => {
                console.log('Updating y function')
              }}
            />
            <LabeledInput
              label='z:'
              input={zFunc.rawText}
              onChange={(e) => {
                setZFunc(new MathFunction(e.target.value, zFunc))
              }}
            />
          </BorderedContainer>
        </BottomCenter>
      </ThreeCanvasContainer>
    </>
  )
}

export default App
