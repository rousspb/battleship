/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import aircraft from '../../../assets/Aircraft Shape.png';

const shipStyle = css`
	width: 15em;
`
const ShipAircraft = () => (
  <img src={aircraft} alt="aircraft" css={shipStyle}/>
)

export default ShipAircraft;