import Header from './components/header'
import Player from './components/main/aside/player'
import ShipAircraft from './components/main/ships/ShipAircraft'
import ShipBattleship from './components/main/ships/ShipBattleship'
import ShipCarrier from './components/main/ships/ShipCarrier'
import ShipCruiser from './components/main/ships/ShipCruiser'
import ShipSubmarine from './components/main/ships/ShipSubmarine'
import Layout from './components/main/aside/layout'
function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Player />
      <Player />
      <ShipAircraft />
      <ShipBattleship />
      <ShipCarrier />
      <ShipCruiser />
      <ShipSubmarine />
      <Layout />
      </main>
    </div>
  );
}

export default App;
