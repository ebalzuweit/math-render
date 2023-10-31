import { Vector3 } from "three"
import MathFunction from "./MathFunction"

class IterativeFunction {
	x: MathFunction
	y: MathFunction
	z: MathFunction

	constructor(x: MathFunction, y: MathFunction, z: MathFunction) {
		this.x = x
		this.y = y
		this.z = z
	}

	evaluate(i: number): Vector3 {
		return new Vector3(
			this.x.function(i),
			this.y.function(i),
			this.z.function(i)
		)
	}
}
export default IterativeFunction