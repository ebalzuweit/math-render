import IterativeFunction from "./IterativeFunction";
import MathFunction from "./MathFunction";

export function Circle(): IterativeFunction {
	return new IterativeFunction(
		new MathFunction('i sin'),
		new MathFunction('i cos'),
		new MathFunction('0')
	)
}

export function Wings(): IterativeFunction {
	return new IterativeFunction(
		new MathFunction('i 2 / cos'),
		new MathFunction('i sin'),
		new MathFunction('i cos')
	)
}