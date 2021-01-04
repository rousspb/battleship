/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import battleship from '../../../assets/Battleship Shape.png';

const shipStyle = css`
	width: 15em;
`
const ShipBattleship = () => (
  <img src={battleship} alt="Battleship" css={shipStyle}/>
)

export default ShipBattleship;