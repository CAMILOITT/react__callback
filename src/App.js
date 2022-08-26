import { useState } from 'react';
import Box from './components/Box';
import './App.css';

function App() {
  const [countClicked, setCountClicked] = useState(0);

  return (
    <div className="App">
      <header className="App__header">
        <h1 className="header__title">contador de click por cuadros</h1>
      </header>
      <main className="App__main">
        
        <div className="main__containerCount">
          <Box
            numberBox={1}
            setCountClicked={setCountClicked}
            countClicked={countClicked}
          />
          <Box
            numberBox={2}
            setCountClicked={setCountClicked}
            countClicked={countClicked}
          />
          <Box
            numberBox={2}
            setCountClicked={setCountClicked}
            countClicked={countClicked}
          />
          <Box
            numberBox={3}
            setCountClicked={setCountClicked}
            countClicked={countClicked}
          />
          <Box
            numberBox={4}
            setCountClicked={setCountClicked}
            countClicked={countClicked}
          />
          <Box
            numberBox={5}
            setCountClicked={setCountClicked}
            countClicked={countClicked}
          />
          <Box
            numberBox={6}
            setCountClicked={setCountClicked}
            countClicked={countClicked}
          />
        </div>

        <p className="main__total">
          Conteos totales:
          <span className="total__numberClicked">{countClicked}</span>
        </p>
      </main>
    </div>
  );
}

export default App;
