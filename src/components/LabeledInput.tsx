import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
	display: inline-block;
	font-size: 1.5em;
	font-family: cursive;
	color: gray;

	margin: 2px;
`
const Input = styled.input`
	background: transparent;
	border: 0;
	border-bottom: 1px solid gray;

	margin: 4px;

	font-size: 1em;
	font-family: cursive;
	color: gray;
`

interface LabeledInputProps {
	label: string
	input: string
	onChange: React.ChangeEventHandler<HTMLInputElement>
}
const LabeledInput: React.FC<LabeledInputProps> = ({ label, input, onChange }: LabeledInputProps) => {
	return (
		<Label>
			{label}
			<Input
				type='text'
				value={input}
				onChange={onChange}
			/>
		</Label>
	)
}
export default LabeledInput