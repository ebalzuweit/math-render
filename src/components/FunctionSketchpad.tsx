import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Fragment, useState } from "react"
import { v4 } from "uuid"
import { Circle, Wings } from "../math/IterativeFunctionExamples"
import { BottomRight, ThreeCanvasContainer } from "../styles/styles"
import IterativeFunctionControls from "./IterativeFunctionControls"
import IterativeFunctionLine from "./threejs/IterativeFunctionLine"

const FunctionSketchpad: React.FC = () => {
	const [funcList, setFuncList] = useState([
		{
			key: v4(),
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


			<BottomRight>
				<ul style={{ listStyleType: 'none' }}>
					{controls}
					<li key='add_button'>
						<button
							title='Add a new function'
							onClick={() => {
								const newFuncList = funcList.concat({
									key: v4(),
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
	)
}
export default FunctionSketchpad