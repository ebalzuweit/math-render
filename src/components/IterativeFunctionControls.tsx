import { Fragment } from "react"
import IterativeFunction from "../math/IterativeFunction"
import MathFunction from "../math/MathFunction"
import LabeledInput from "./LabeledInput"

interface IterativeFunctionControlsProps {
	func: IterativeFunction
	onFuncChange: (func: IterativeFunction) => void
	color: string
}
const IterativeFunctionControls: React.FC<IterativeFunctionControlsProps> = ({
	func,
	onFuncChange
}: IterativeFunctionControlsProps) => {
	return (
		<Fragment>
			<LabeledInput
				label="x:"
				input={func.x.rawText}
				isValid={func.x.rawText === func.x.functionText}
				onChange={(e) => {
					const fct = new MathFunction(e.target.value, func.x)
					const iFct = new IterativeFunction(
						fct,
						func.y,
						func.z
					)
					onFuncChange(iFct)
				}}
			/>
			<LabeledInput
				label="y:"
				input={func.y.rawText}
				isValid={func.y.rawText === func.y.functionText}
				onChange={(e) => {
					const fct = new MathFunction(e.target.value, func.y)
					const iFct = new IterativeFunction(
						func.x,
						fct,
						func.z
					)
					onFuncChange(iFct)
				}}
			/>
			<LabeledInput
				label="z"
				input={func.z.rawText}
				isValid={func.z.rawText === func.z.functionText}
				onChange={(e) => {
					const fct = new MathFunction(e.target.value, func.z)
					const iFct = new IterativeFunction(
						func.x,
						func.y,
						fct
					)
					onFuncChange(iFct)
				}}
			/>
		</Fragment>
	)
}
export default IterativeFunctionControls