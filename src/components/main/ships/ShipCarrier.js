/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import carriership from '../../../assets/Carrier Shape.png';

const shipStyle = css`
	width: 15em;
`
const ShipCarrier = () => (
  <img src={carriership} alt="carrier" css={shipStyle}/>
)

export default ShipCarrier;