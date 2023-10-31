import { useMemo } from 'react'
import { Line } from '@react-three/drei'
import { Vector3 } from 'three'

export type IterativeFunction = (i: number) => number
export interface IterativeFunctionProps {
	xFct: (i: number) => number
	yFct: (i: number) => number
	zFct: (i: number) => number
	from?: number
	to?: number
}
const IterativeFunctionRender: React.FC<IterativeFunctionProps> = ({ xFct, yFct, zFct, from = -5_000, to = 5_000 }: IterativeFunctionProps) => {
	const points = useMemo(() => {
		const points = []
		for (let i = from; i < to; i++) {
			const point = new Vector3(xFct(i), yFct(i), zFct(i))
			points.push(point)
		}
		return points
	}, [xFct, yFct, zFct, from, to])

	return (
		<Line
			points={points}
			color="black"
			lineWidth={1}
		/>
	)
}
export default IterativeFunctionRender