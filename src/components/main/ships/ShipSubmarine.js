/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import submarineship from '../../../assets/Submarine Shape.png';

const shipStyle = css`
	width: 15em;
`
const ShipSubmarine = () => (
  <img src={submarineship} alt="submarine" css={shipStyle}/>
)

export default ShipSubmarine;