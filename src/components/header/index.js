/** @jsxRuntime classic */
/** @jsx jsx */

// import React from 'react'
import { css, jsx } from '@emotion/react'

const style = css`
	height: 5em;
	background: purple;
`
const Header = () => (
  <header css={style}>
		<div>Header</div>
	</header>
)

export default Header