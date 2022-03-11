import './styles/Buttons.css';

function App() {
  return (
    <div>
      <h2>Color palette:</h2>
      <div style={{'background-color': 'var(--classic-blue-t2)', 'padding':'10pt', 'max-width': '100pt'}}>Classic blue tint 2</div>
      <div style={{'background-color': 'var(--classic-blue-t1)', 'padding':'10pt', 'max-width': '100pt'}}>Classic blue tint 1</div>
      <div style={{'background-color': 'var(--classic-blue)', 'padding':'10pt', 'color': 'white', 'max-width': '100pt'}}>Classic blue</div>
      <div style={{'background-color': 'var(--classic-blue-s1)', 'padding':'10pt', 'color': 'white', 'max-width': '100pt'}}>Classic blue shade 1</div>
      <div style={{'background-color': 'var(--classic-blue-s2)', 'padding':'10pt', 'color': 'white', 'max-width': '100pt'}}>Classic blue shade 2</div>

      
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
