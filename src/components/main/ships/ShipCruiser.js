/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import cruisership from '../../../assets/Cruiser Shape.png';

const shipStyle = css`
	width: 15em;
`
const ShipCruiser = () => (
  <img src={cruisership} alt="cruiser" css={shipStyle}/>
)

export default ShipCruiser;