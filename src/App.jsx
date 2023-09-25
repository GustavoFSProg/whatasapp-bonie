import { useState } from 'react'
import './App.css'
import avatar from './assets/avatar.png'
import avatar1 from './assets/avatar-1.jpeg'
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
import EmojiPicker, { Emoji } from 'emoji-picker-react'
import whats from '../src/assets/whats-2.png'
import Chatwindow from './components/chatWindow'

function App() {
  const [clicked, setClicked] = useState(false)
  const [listen, setListen] = useState(false)
  const [chatlist, setChatList] = useState(false)
  const [intro, setIntro] = useState(false)
  const [text, setText] = useState('')
  const [emoji, setEmoji] = useState('')

  let recognition = null
  let SpechRecgonition = window.SpechRecgonition || window.webkitSpechRecognition

  if (SpechRecgonition !== undefined) {
    const recognition = new SpechRecgonition()
  }

  function handleWindow() {
    setIntro(true)
  }

  function handleChatList() {
    setChatList(true)
  }

  const handleMicClick = () => {
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

      console.log(recognition)
    }
  }

  function handleOpenEmoji() {
    setClicked(true)

    return
  }

  function handleClickEmoji(e) {
    setText(e + emoji.emoji)
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
              cursor: 'pointer'
            }}
            onClick={() => alert('Clicado!!')}
          >
            <SearchIcon
              style={{
                // marginTop: '5px', marginLeft: '-352px',
                fontSize: '23px'
              }}
            />
          </button>
        </div>

        <div className="chatlist">
          <img className="header-avatar" src={avatar} alt="avatar" />
          <div onClick={handleWindow} className="chat-list-container">
            <span
              style={{
                marginLeft: '-18px',
                fontFamily: 'Arial',
                fontSize: '17px'
              }}
            >
              Barbara
            </span>

            <span
              style={{
                marginTop: '3px',
                marginLeft: '-2px',
                fontFamily: 'Arial',
                fontSize: '14px'
              }}
            >
              Mensagem
            </span>
          </div>

        </div>
      </div>

      <div className="contentarea">
        {intro === false ? (
          <div className="main-container">
            <img src={whats} alt="novo" width="898" />
          </div>
        ) : (
          <Chatwindow />
        )}

        <div
          style={{
            width: '100%',
            height: '4.4rem',
            marginTop: '-1px',
            background: '#e6e6e6',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
            // background: 'green'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {clicked === true ? (
              <div
                style={{
                  marginTop: '-487px',
                  width: 'auto',
                  fixed: 'bottom'
                }}
              >
                <Emoji size={50} unified={emoji.unified} />
                <EmojiPicker
                  emojiStyle="google"
                  searchDisabled={false}
                  lazyLoadEmojis={false}
                  theme="dark"
                  onEmojiClick={(e) => {
                    setEmoji(e)
                    console.log(e)
                  }}
                  searchPlaceHolder="Ara"
                  previewConfig={{
                    showPreview: true,
                    defaultEmoji: '1f92a',
                    defaultCaption: 'Bit emoji araaaa'
                  }}
                />

                <ClearIcon
                  onClick={() => setClicked(false)}
                  style={{
                    cursor: 'pointer',
                    color: '#737373',
                    marginLeft: '-288px',
                    fontSize: '30px'
                  }}
                />
              </div>
            ) : (
              <div style={{ display: 'flex' }}>
                <MoodIcon
                  onClick={() => setClicked(true)}
                  style={{
                    marginLeft: '18px',
                    cursor: 'pointer',
                    color: '#737373'
                  }}
                  fontSize="large"
                />
                <AttachFileIcon
                  style={{
                    marginLeft: '8px',
                    color: '#737373',
                    fontSize: '27px'
                  }}
                />
                <input
                  type="text"
                  placeholder="Digite uma mensagem!!"
                  id="text"
                  onChange={(e) => setText(e.target.value)}
                  value={text || emoji.emoji}
                  style={{
                    width: '42.9rem',
                    fontSize: '15px',
                    height: '2.4rem',
                    paddingLeft: '15px'
                  }}
                />

                <div onClick={() => handleMicClick()}>
                  <MicIcon
                    style={{
                      fontSize: '29px',
                      display: 'flex',
                      marginLeft: '8px',
                      marginTop: '4px',
                      color: listen === true ? '#126ece' : '#919191'
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            marginRight: '80px'
          }}
        ></div>
      </div>

      <br />
    </div>
  )
}

export default App
