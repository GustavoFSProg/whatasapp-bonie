import { useState } from 'react'
import './App.css'
import avatar from './assets/avatar.png'
// import { BsFillChatLeftTextFill } from 'react-icons/bs'
// import { MdOutlineDonutLarge } from 'react-icons/md'

import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import ChatIcon from '@mui/icons-material/Chat'
import MoreVertIcon from '@mui/icons-material/MoreVert'

function App() {
  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img className="header-avatar" src={avatar} alt="avatar" />

          <div
            style={{ display: 'flex', flexDirection: 'column', height: '1.5rem', width: '7.8rem' }}
          >
            <div className="header-buttons">
              <div className="header-btn">
                <DonutLargeIcon size="28" color="blue" />
                <ChatIcon size="28" color="blue" />
                <MoreVertIcon size="28" color="blue" />
              </div>
            </div>
          </div>
        </header>

        <div className="search-input">
          <input type="text" />
        </div>

        <div className="chatlist">
          <img className="header-avatar" src={avatar} alt="avatar" />
          <div className="chat-list-container">
            <span style={{ marginLeft: '-18px', fontFamily: 'Arial', fontSize: '17px' }}>
              Fulano
            </span>

            <span style={{
              marginTop: '3px', marginLeft: '-2px',
              fontFamily: 'Arial', fontSize: '14px'
            }}>
              Mensagem
            </span>
          </div>
        </div>
      </div>

      <div className="contentarea">contentarea</div>
    </div>
  )
}

export default App
