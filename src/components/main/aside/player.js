/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

const PlayerBoxStyle = styled.section`
	background-color: ${({green, yellow}) => {
		if(yellow)
			return '#FFB200'
		if(green)
			return '#20B8A0'
		return '#A6A5A5'
	}};
	width: 14em;
	height: 14em;
	font-weight: bold;
`

const numberStyle = css`
	font-size: 4em;
	padding-top: 0.5em;
`

const lineStyle = css`
flex-grow: 1;
flex-shrink: 1;
background-color: black;
height: 1px;
position: relative;
top: 2.45em;
`

const namePlayerStyle = css`
	margin-top: 1.6em;
	font-size: 2em;
`

const PlayerBox = () => (
  <PlayerBoxStyle green>
		<div css={numberStyle}>00</div>
		<div css={lineStyle}></div>
		<div css={namePlayerStyle}>player 1</div>
	</PlayerBoxStyle>
)

export default PlayerBox