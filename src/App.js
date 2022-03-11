import './styles/Buttons.css';

function App() {
  return (
    <div>
      <h2>Normal buttons:</h2>
      <button className='button-size-big' style={{'margin-right': '10pt'}}>Create new</button>
      <button style={{'margin-right': '10pt'}}>Create new</button>
      <button className='button-size-small'>Create new</button>
      <h2>Disabled buttons:</h2>
      <button disabled className='button-size-big' style={{'margin-right': '10pt'}}>Create new</button>
      <button disabled style={{'margin-right': '10pt'}}>Create new</button>
      <button disabled className='button-size-small'>Create new</button>
    </div>
  );
}

export default App;
