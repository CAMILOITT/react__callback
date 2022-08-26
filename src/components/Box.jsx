import { useState } from 'react';
import './Box.css';

export default function Box({ numberBox, setCountClicked, countClicked }) {
  const [countLocal, setCountLocal] = useState(0);

  function incrementCount() {
    setCountClicked(countClicked + 1);
    setCountLocal(countLocal + 1);
  }

  return (
    <div className="main__boxCounter" onClick={incrementCount}>
      <p className="boxCounter__boxNumber">CAJA {numberBox}</p>
      <p className="boxCounter__clicks">
        clicks dados <span className="clicks__number">{countLocal}</span>
      </p>
    </div>
  );
}
