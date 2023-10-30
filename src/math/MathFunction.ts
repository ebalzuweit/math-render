class MathFunction {
	rawText: string;
	functionText: string;
	function: (i: number) => number;

	constructor(text: string);
	constructor(text: string, prev: MathFunction);
	constructor(text: string, prev?: MathFunction) {
		this.rawText = text
		this.functionText = '0'
		this.function = prev
			? prev.function
			: (i: number) => 0
		this.trySetFunctionFromRawText()
	}

	trySetFunctionFromRawText(): boolean {
		// FIXME: Parse this.rawText into function
		// Use reverse polish notation
		// Supported operations: +, -, /, *, sin, cos, tan, abs
		// Supported tokens: i, number

		const tokens = this.rawText.split(' ')
		if (tokens.length <= 0)
			return false

		const n = new Number(tokens[0])

		const fct = (i: number) => {
			return n.valueOf()
		}
		this.functionText = this.rawText
		this.function = fct
		return true
	}
}
export default MathFunction