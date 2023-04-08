import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Grid({ i, j }) {
  const alphas = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  const getSeatNumber = () => {
    console.log(`${i}, ${j}`);
    let row = [alphas[i % 26]];
    let copy = i;

    while (i >= 26) {
      row.push(`${alphas[i % 26]}`);
      i = Math.floor(i / 26);
    }

    return `${row.join('').toUpperCase()}${j}`;
  };

  return <div className='box'>{getSeatNumber()}</div>;
}

function App() {
  const [rows, setRows] = useState();
  const [cols, setCols] = useState();
  const [isReady, setIsReady] = useState(false);
  const [grid, setGrid] = useState([]);

  const handleClick = (e) => {
    setIsReady(true);

    let tempGrid = [];
    for (let i = 0; i < rows; i++) {
      tempGrid.push(new Array(cols));
    }

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        tempGrid[i][j] = <Grid i={i} j={j} />;
      }
    }
    setGrid(tempGrid);
  };

  return (
    <div className='App'>
      <div>
        <input
          type='number'
          value={rows}
          placeholder='Enter no. of rows'
          onChange={(e) => {
            setRows(e.target.value);
          }}
        />
        <input
          type='number'
          value={cols}
          placeholder='Enter no. of cols'
          onChange={(e) => {
            setCols(e.target.value);
          }}
        />
        <button value='submit' onClick={handleClick} disabled={!rows || !cols}>
          {' '}
          Submit
        </button>
      </div>

      {isReady &&
        grid.map((row) => {
          return (
            <div className='row'>
              {row.map((col) => {
                return col;
              })}
            </div>
          );
        })}
    </div>
  );
}

export default App;
