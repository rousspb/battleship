/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const positionStyle = css`
	width: 2em;
	height: 2em;
	border: 1px solid gray;
`

const layoutStyle = css`
display: grid;
grid-template-columns: repeat(10, 2em);
`
const Layout = () => {
	const matrix = [];
		for(var i=0; i<=9; i++) {
				matrix[i] = ''
		}
  return (
	<section css={layoutStyle}>
		{matrix.map((val) => <div css={positionStyle}>
			{matrix.map((val) => <div css={positionStyle}/>)}
		</div>)}
	</section>
	)
}

export default Layout;