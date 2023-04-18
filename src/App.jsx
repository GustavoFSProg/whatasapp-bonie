import { useState } from 'react'
import './App.css'
import avatar from './assets/avatar.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-window">
      <div className="sidebar">
        <header >
          <img className="header-avatar" src={avatar} alt="avatar" />
          
          <div className="header-buttons">botoes</div>

        </header>
        
        <div className="search">Search</div>

        <div className="chatlist">chatlist</div>

      </div>

      <div className="contentarea">contentarea</div>
    </div>
  )
}

export default App
