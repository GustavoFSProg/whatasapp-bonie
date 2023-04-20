import { useState } from 'react'
import './App.css'
import avatar from './assets/avatar.png'
// import { BsFillChatLeftTextFill } from 'react-icons/bs'
// import { MdOutlineDonutLarge } from 'react-icons/md'

import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import ChatIcon from '@mui/icons-material/Chat'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import MoodIcon from '@mui/icons-material/Mood'
import AttachFileIcon from '@mui/icons-material/AttachFile';

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

            <span
              style={{
                marginTop: '3px',
                marginLeft: '-2px',
                fontFamily: 'Arial',
                fontSize: '14px',
              }}
            >
              Mensagem
            </span>
          </div>
        </div>
      </div>

      <div className="contentarea">
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'f',
            color: 'black',
            height: '5rem',
            background: '#bfbfbf',
          }}
        >
          <img
            className="header-avatar"
            src={avatar}
            alt="avatar"
            style={{
              width: '3.5rem',
              height: '3.4rem',
              marginLeft: '13px',
              marginTop: '8px',
            }}
          />
          <p
            style={{
              marginLeft: '12px',
              marginTop: '21px',

              fontFamily: 'Arial',
              fontSize: '17px',
            }}
          >
            Fulano
          </p>
        </div>
        <div style={{
          width: '100%', height: '90vh',

          background: '#fff7e6'
        }}>

        </div>

        <div style={{
          width: '100%', height: '4rem',
          marginTop: '-1px',
          background: '#e6e6e6',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',

        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>

            <MoodIcon style={{ marginLeft: '18px', color: '#737373' }} fontSize="large" />
            <AttachFileIcon style={{
              marginLeft: '8px', color: '#737373',
              fontSize: '27px'
            }} />
          </div>
          <h1>Torta</h1>

        </div>
      </div>
    </div>
  )
}

export default App
