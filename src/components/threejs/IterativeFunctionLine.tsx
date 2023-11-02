import { Line } from '@react-three/drei'
import { useMemo } from 'react'
import IterativeFunction from '../../math/IterativeFunction'

export interface IterativeFunctionLineProps {
	func: IterativeFunction
	color?: string
	from?: number
	to?: number
	step_size?: number
}
const IterativeFunctionLine: React.FC<IterativeFunctionLineProps> = ({
	func,
	color = "black",
	from = -5_000,
	to = 5_000,
	step_size = 0.1
}: IterativeFunctionLineProps) => {
	const points = useMemo(() => {
		const points = []
		for (let i = from; i < to; i += step_size) {
			const point = func.evaluate(i)
			points.push(point)
		}
		return points
	}, [func, from, to])

	return (
		<Line
			points={points}
			color={color}
			lineWidth={1}
		/>
	)
}
export default IterativeFunctionLine