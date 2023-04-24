import { useState } from 'react'
import './App.css'
import avatar from './assets/avatar.png'
// import { BsFillChatLeftTextFill } from 'react-icons/bs'
// import { MdOutlineDonutLarge } from 'react-icons/md'

import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import ChatIcon from '@mui/icons-material/Chat'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import MoodIcon from '@mui/icons-material/Mood'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import MicIcon from '@mui/icons-material/Mic'
import SearchIcon from '@mui/icons-material/Search'
import TextRotationDownIcon from '@mui/icons-material/TextRotationDown'
import ClearIcon from '@mui/icons-material/Clear'
import EmojiPicker from 'emoji-picker-react'

function App() {
  const [clicked, setClicked] = useState(false)
  const [listen, setListen] = useState(false)
  const [list, setList] = useState([])
  const [chatlist, setChatList] = useState(false)

  let recognition = null

  let SpechRecgonition = window.SpechRecgonition || window.webkitSpechRecognition

  if (SpechRecgonition !== undefined) {
    recognition = new SpechRecgonition()
  }

  function handleChatList() {
    setChatList(true)

  }

  function handleMicClick() {

    if (recognition !== null) {
      recognition.onstart = () => {
        setListen(true)
      }

      recognition.onend = () => {
        setListen(false)
      }

      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript)
      }

      recognition.start()

    }
  }

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
          <input type="text" placeholder="Procurar ou começar uma nova conversa" />
          <button
            style={{
              marginTop: '5px',
              marginLeft: '-352px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => alert('Clicado!!')}
          >
            <SearchIcon
              style={{
                // marginTop: '5px', marginLeft: '-352px',
                fontSize: '23px',
              }}
            />
          </button>
        </div>

        <button onClick={() => setChatList(true)}> setar
        </button>


        <div className="chatlist" >

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



        <div className="contentarea">
          {chatlist === true ? <>

            <div className="body"
              style={{
                width: '100%',
                height: '90vh',
                background: '#fff7e6',
              }}
            >
              <h1>Porra!!</h1>
              {list.map((item, key) => {
                <MessageItem
                  key={key}
                  data={item}
                />

              })}

            </div>

          </> : <p>asdf</p>
          }
        <div
          style={{
            display: 'flex',
            width: '100%',
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
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '590px',
              }}
            >
              <SearchIcon style={{ display: 'flex', marginRight: '20px', fontSize: '29px' }} />
              <MoreVertIcon color="blue" style={{ display: 'flex', fontSize: '29px' }} />
            </div>
          </div>


        <div
          style={{
            width: '100%',
            height: '4.4rem',
            marginTop: '-1px',
            background: '#e6e6e6',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
            <div style={{ display: 'flex', alignItems: 'center' }}>
            {clicked === true ? (
              <div
                style={{
                  marginTop: '-499px',
                    width: 'auto',
                }}
              >
                {/* width="55rem" */}
                <EmojiPicker searchDisabled skinTonesDisabled width="55rem" />
                <ClearIcon
                  onClick={() => setClicked(false)}
                  style={{
                    cursor: 'pointer',
                    color: '#737373',
                    marginLeft: '-288px',
                    fontSize: '30px',
                  }}
                />
              </div>
            ) : (
              <>
                <MoodIcon
                  onClick={() => setClicked(true)}
                  style={{
                    marginLeft: '18px',
                    cursor: 'pointer',
                    color: '#737373',
                  }}
                  fontSize="large"
                />
                <AttachFileIcon
                  style={{
                    marginLeft: '8px',
                    color: '#737373',
                    fontSize: '27px',
                  }}
                    />
                  </>
            )}
          </div>
            <div
              style={{
                display: 'flex',
                marginRight: '80px',
              }}
            >
            <input
              type="text"
                placeholder="Digite a Mensagem"
              style={{
                width: '42.9rem',
                fontSize: '15px',
                height: '2.4rem',
                paddingLeft: '15px',
              }}
            />
            </div>
        </div>
          <div onClick={handleMicClick}>
            <MicIcon
              style={{
                fontSize: '29px',
                display: 'flex',
                marginLeft: '808px',
                marginTop: '-48px',
                color: listen === true ? '#126ece' : '#919191',
              }}
            />
          </div>


          <div>
          {/* <TextRotationDownIcon style={{
            fontSize: '29px', display: 'flex', marginRight: '28px',
            color: '#737373'
          }} /> */}
        </div>
        <br />
      </div>
      </div>
    </div>
  )
}

export default App
