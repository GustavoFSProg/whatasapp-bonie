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
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import TextRotationDownIcon from '@mui/icons-material/TextRotationDown'
import EmojiPicker from 'emoji-picker-react'

function App() {

  const [clicked, setClicked] = useState(false)

  function handleEmoji() {
    setClicked(true)

    return
  }
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
          <input type="text"
            placeholder="Procurar ou começar uma nova conversa" />
          <button style={{
            marginTop: '5px',
            marginLeft: '-352px',
            background: 'none', border: 'none',
            cursor: 'pointer'
          }} onClick={() => alert("Clicado!!")}>

            <SearchIcon style={{
            // marginTop: '5px', marginLeft: '-352px',
            fontSize: '23px'
          }} />
          </button>
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
          {/* <a href={() =>
            <EmojiPicker />
          }> */}
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
              marginTop: '27px',

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
          width: '100%', height: '4.4rem',
          marginTop: '-1px',
          background: '#e6e6e6',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',

        }}>

          <div style={{ display: 'flex', alignItems: 'center' }}>

            {
              clicked === true ? <div style={{ marginTop: '-520px' }}>
                <EmojiPicker />

              </div> : <>
                <MoodIcon onClick={() => setClicked(true)}
                  style={{ marginLeft: '18px', color: '#737373' }} fontSize="large" />
            <AttachFileIcon style={{
              marginLeft: '8px', color: '#737373',
              fontSize: '27px'
            }} />
              </>
            }


          </div>


          <div>
            <input type="text" placeholder='Mensagem'
              style={{ width: '43.7rem', fontSize: '15px', height: '2.4rem', paddingLeft: '15px' }} />
          </div>

          {/* <TextRotationDownIcon style={{
            fontSize: '29px', display: 'flex', marginRight: '28px',
            color: '#737373'
          }} /> */}

          <MicIcon style={{
            fontSize: '29px', display: 'flex', marginRight: '28px',
            color: '#737373'
          }} />

        </div>
      </div>
    </div>
  )
}

export default App
