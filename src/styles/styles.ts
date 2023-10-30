import styled from 'styled-components'

export const ThreeCanvasContainer = styled.div`
	position: absolute;
	top: 0vw;
	left: 0vw;
    right: 0vw;
	bottom: 0vw;
`

export const BorderedContainer = styled.div`
	border: 1px solid black;
	border-radius: 2px;

	padding: 12px;
`

export const Title = styled.h1`
	font-family: monospace, ui-monospace;
	font-size: 2em;
	line-height: 0em;

	opacity: 0.6;
	user-select: none;
`

export const TopLeft = styled.div`
	position: absolute;
	top: 5vw;
	left: 5vw;
`

export const BottomCenter = styled.div`
	position: absolute;
	bottom: 5vw;
	left: 10vw;
	margin: auto;
`