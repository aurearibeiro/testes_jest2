import { useState } from "react";
import { Dropdown } from "./components/dropdown/Dropdown";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <div className="App">
      {selectedPokemon && <div>Seu pokemon: {selectedPokemon}</div>}
      <Dropdown
        title="Selecione seu Pokemon Inicial"
        options={["Bubassaur", "Squirtle", "Charmelon"]}
        onSelect={setSelectedPokemon}
      />
    </div>
  );
}

export default App;
