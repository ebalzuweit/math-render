import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Fragment, useState } from "react"
import { v4 } from "uuid"
import IterativeFunction from "../math/IterativeFunction"
import { Circle, Wings } from "../math/IterativeFunctionExamples"
import { BottomRight, ThreeCanvasContainer } from "../styles/styles"
import IterativeFunctionControls from "./IterativeFunctionControls"
import IterativeFunctionLine from "./threejs/IterativeFunctionLine"

interface IterativeFunctionListItem {
	key: string
	func: IterativeFunction
	color: string
}
const FunctionSketchpad: React.FC = () => {
	const [funcList, setFuncList] = useState<IterativeFunctionListItem[]>([
		{
			key: v4(),
			func: Wings(),
			color: '#000000'
		}
	])

	const renders = funcList.map((func) => {
		return (
			<Fragment key={func.key}>
				<IterativeFunctionLine
					func={func.func}
					color={func.color}
				/>
			</Fragment>
		)
	})
	const controls = funcList.map((func) => {
		return (
			<li key={func.key}>
				<IterativeFunctionControls
					func={func.func}
					color={func.color}
					onFuncChange={(updatedFunction) => {
						const newFuncList = funcList.map((f) => {
							if (f.key === func.key) {
								return {
									key: f.key,
									func: updatedFunction,
									color: f.color
								}
							} else {
								return f
							}
						})
						setFuncList(newFuncList)
					}}
					onColorChange={(color) => {
						const newFuncList = funcList.map((f) => {
							if (f.key === func.key) {
								return {
									key: f.key,
									func: f.func,
									color: color
								}
							} else {
								return f
							}
						})
						setFuncList(newFuncList)
					}}
				/>
				<button
					title='Copy this function'
					type='button'
					onClick={() => {
						const newFuncList = funcList.concat({
							key: v4(),
							func: func.func,
							color: func.color
						})
						setFuncList(newFuncList)
					}}
				>
					Copy
				</button>
				<button
					title='Remove this function'
					type='button'
					onClick={() => {
						const newFuncList = funcList.filter((f) => f.key !== func.key)
						setFuncList(newFuncList)
					}}
				>
					Remove
				</button>
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
							type='button'
							onClick={() => {
								const newFuncList = funcList.concat({
									key: v4(),
									func: Circle(),
									color: '#000000'
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