import rubLogo from '../public/rubbank-icon.svg';
import './App.css';

function App() {
  return (
    <>
      <div>
        <a href="https://rubcube.com" target="_blank">
          <img src={rubLogo} className="logo rubbank" alt="Rubbank logo" />
        </a>
      </div>
      <h1>Rub<span style={{fontWeight: 10}}>bank</span></h1>
    </>
  )
}

export default App
