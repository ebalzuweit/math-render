type FunctionType = (i: number) => number
class MathFunction {
	rawText: string
	functionText: string
	function: FunctionType

	constructor(text: string);
	constructor(text: string, prev: MathFunction);
	constructor(text: string, prev?: MathFunction) {
		// set defaults
		this.rawText = text
		this.functionText = '0'
		this.function = prev
			? prev.function
			: (i: number) => 0
		// try parse
		if (this.trySetFunctionFromRawText()) {
			this.functionText = text
		}
	}

	isTokenNumber(token: string): number | undefined {
		const n = parseFloat(token)
		if (isNaN(n)) {
			return undefined
		}
		return n
	}

	trySetFunctionFromRawText(): boolean {
		const tokens = this.rawText.split(' ')
		if (tokens.length <= 0)
			return false

		const stack: Array<FunctionType> = []
		for (let i = 0; i < tokens.length; i++) {
			const token = tokens[i]

			if (token === '') // Extra whitespace before split
				continue

			// Handle constants
			const n = this.isTokenNumber(token)
			if (n !== undefined) {
				stack.push((i: number) => n)
				continue
			}

			// Handle i
			if (token === 'i') {
				stack.push((i: number) => i)
				continue
			}

			if (stack.length < 1) {
				// Operation with no stack
				return false
			}

			// Single param operations
			let a: FunctionType, b: FunctionType
			switch (token) {
				case 'abs':
					a = stack.pop()!
					stack.push((i: number) => Math.abs(a(i)))
					continue
				case 'sin':
					a = stack.pop()!
					stack.push((i: number) => Math.sin(a(i)))
					continue
				case 'cos':
					a = stack.pop()!
					stack.push((i: number) => Math.cos(a(i)))
					continue
			}

			if (stack.length < 2) {
				// Operation with insufficient stack
				return false
			}

			// Double param operations
			switch (token) {
				case '+':
					b = stack.pop()!
					a = stack.pop()!
					stack.push((i: number) => a(i) + b(i))
					continue
				case '-':
					b = stack.pop()!
					a = stack.pop()!
					stack.push((i: number) => a(i) - b(i))
					continue
				case '*':
					b = stack.pop()!
					a = stack.pop()!
					stack.push((i: number) => a(i) * b(i))
					continue
				case '/':
					b = stack.pop()!
					a = stack.pop()!
					stack.push((i: number) => a(i) / b(i))
					continue
				case '**':
					b = stack.pop()!
					a = stack.pop()!
					stack.push((i: number) => a(i) ** b(i))
					continue
			}

			// Failed to handle token
			return false
		}
		if (stack.length === 1) {
			this.function = stack[0]
			return true
		}
		return false
	}
}
export default MathFunction