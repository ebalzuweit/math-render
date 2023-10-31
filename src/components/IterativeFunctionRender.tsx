import { useMemo } from 'react'
import { Line } from '@react-three/drei'
import IterativeFunction from '../math/IterativeFunction'

export interface IterativeFunctionProps {
	func: IterativeFunction
	from?: number
	to?: number
	color?: string
}
const IterativeFunctionRender: React.FC<IterativeFunctionProps> = ({
	func,
	from = -5_000,
	to = 5_000,
	color = "black"
}: IterativeFunctionProps) => {
	const points = useMemo(() => {
		const points = []
		for (let i = from; i < to; i++) {
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
export default IterativeFunctionRender