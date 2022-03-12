import './styles/Buttons.css';
import { useEffect, useState } from 'react'

function App() {
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 3000)
  // }, [])

  window.addEventListener('load', () => {
    setLoading(!loading)
  });

  return (
    <div>
      {loading ? 
      <div style={{'backgroundColor': 'white', 'position': 'absolute', 'top': '0px', 'right': '0px',
      'bottom': '0px', 'left': '0px', 'textAlign': 'center', 'padding': '20% 0 20%', 'fontSize': '50pt'}}>Loading...</div>
      :
        <div>
          <h2>Color palette:</h2>
          <div style={{'backgroundColor': 'var(--classic-blue-t2)', 'padding':'10pt', 'maxWidth': '100pt'}}>Classic blue tint 2</div>
          <div style={{'backgroundColor': 'var(--classic-blue-t1)', 'padding':'10pt', 'maxWidth': '100pt'}}>Classic blue tint 1</div>
          <div style={{'backgroundColor': 'var(--classic-blue)', 'padding':'10pt', 'color': 'white', 'maxWidth': '100pt'}}>Classic blue</div>
          <div style={{'backgroundColor': 'var(--classic-blue-s1)', 'padding':'10pt', 'color': 'white', 'maxWidth': '100pt'}}>Classic blue shade 1</div>
          <div style={{'backgroundColor': 'var(--classic-blue-s2)', 'padding':'10pt', 'color': 'white', 'maxWidth': '100pt'}}>Classic blue shade 2</div>

          <h2>Normal buttons:</h2>
          <button className='button-size-big' style={{'marginRight': '10pt'}}>Create new</button>
          <button style={{'marginRight': '10pt'}}>Create new</button>
          <button className='button-size-small'>Create new</button>
          
          <h2>Disabled buttons:</h2>
          <button disabled className='button-size-big' style={{'marginRight': '10pt'}}>Create new</button>
          <button disabled style={{'marginRight': '10pt'}}>Create new</button>
          <button disabled className='button-size-small'>Create new</button>
        </div>
      }
    </div>      
  );
}

export default App;
