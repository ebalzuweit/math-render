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
  const [xFunc, setXFunc] = useState(new MathFunction('i 10 / cos'))
  const [yFunc, setYFunc] = useState(new MathFunction('i 10 / sin'))
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
              xFct={xFunc.function}
              yFct={yFunc.function}
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
              input={xFunc.rawText}
              onChange={(e) => {
                const fct = new MathFunction(e.target.value, xFunc)
                setXFunc(fct)
              }}
            />
            <LabeledInput
              label='y:'
              input={yFunc.rawText}
              onChange={(e) => {
                const fct = new MathFunction(e.target.value, yFunc)
                setYFunc(fct)
              }}
            />
            <LabeledInput
              label='z:'
              input={zFunc.rawText}
              onChange={(e) => {
                const fct = new MathFunction(e.target.value, zFunc)
                setZFunc(fct)
              }}
            />
          </BorderedContainer>
        </BottomCenter>
      </ThreeCanvasContainer>
    </>
  )
}

export default App
