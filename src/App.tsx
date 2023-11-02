import React, { Fragment, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import IterativeFunctionLine from './components/threejs/IterativeFunctionLine'
import GlobalStyle from './styles/global'
import {
  BorderedContainer,
  ThreeCanvasContainer,
  Title,
  TopLeft,
  BottomRight
} from './styles/styles'
import IterativeFunctionControls from './components/IterativeFunctionControls'
import { v4 as uuid } from 'uuid'
import { Circle, Wings } from './math/IterativeFunctionExamples'


const App: React.FC = () => {
  const [funcList, setFuncList] = useState([
    {
      key: uuid(),
      func: Wings()
    }
  ])

  const renders = funcList.map((func) => {
    return (
      <Fragment key={func.key}>
        <IterativeFunctionLine
          func={func.func}
          color="black"
        />
      </Fragment>
    )
  })
  const controls = funcList.map((func) => {
    return (
      <li key={func.key}>
        <IterativeFunctionControls
          func={func.func}
          onFuncChange={(updatedFunction) => {
            const newFuncList = funcList.map((f) => {
              if (f.key === func.key) {
                return {
                  key: f.key,
                  func: updatedFunction
                }
              } else {
                return f
              }
            })
            setFuncList(newFuncList)
          }}
          color="black"
        />
      </li>
    )
  })

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
            {renders}
          </group>
        </Canvas>

        <TopLeft>
          <BorderedContainer>
            <Title>math-render</Title>
          </BorderedContainer>
        </TopLeft>

        <BottomRight>
          <ul style={{ listStyleType: 'none' }}>
            {controls}
            <li key='add_button'>
              <button
                title='Add a new function'
                onClick={() => {
                  const newFuncList = funcList.concat({
                    key: uuid(),
                    func: Circle()
                  })
                  setFuncList(newFuncList)
                }}
              >
                Add
              </button>
            </li>
          </ul>
        </BottomRight>
      </ThreeCanvasContainer>
    </>
  )
}

export default App
