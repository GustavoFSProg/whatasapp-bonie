import './global.css'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'
// import { useCollectionData } from 'react-firebase-hooks/firestore'
import { auth, databaseApp } from './firebaseConfig'
import { collection, query, orderBy, addDoc, limit } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Login from './components/Login'
import './App.css'
import './NewChat.css'
import avatar from './assets/avatar.png'
import avatar1 from './assets/avatar-1.jpeg'

import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import ChatIcon from '@mui/icons-material/Chat'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import MoodIcon from '@mui/icons-material/Mood'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import MicIcon from '@mui/icons-material/Mic'
import SearchIcon from '@mui/icons-material/Search'
import TextRotationDownIcon from '@mui/icons-material/TextRotationDown'
import ClearIcon from '@mui/icons-material/Clear'
import EmojiPicker, { Emoji } from 'emoji-picker-react'
import whats from '../src/assets/whats-2.png'
import Chatwindow from './components/chatWindow'
import ChatListItem from './components/ChatListItem'
import ChatListContacts from './components/ChatListContacts'

function App() {
  const [clicked, setClicked] = useState(false)
  const [listen, setListen] = useState(false)
  const [chatlist, setChatList] = useState([])
  const [intro, setIntro] = useState(false)
  const [text, setText] = useState('')
  const [emoji, setEmoji] = useState('')
  const [openConversas, setOpenConversas] = useState(false)

  const messageRef = collection(databaseApp, 'users')

  // const [user, setUser] = useState(null)

  const [user] = useAuthState(auth)

  function handleWindow() {
    setIntro(true)
  }

  async function AddDocs(u) {
    await addDoc(
      messageRef,
      {
        name: u.displayName,
        avatar: u.photoURL
      },
      { marge: true }
    )

    return console.log(u)
  }

  function setOpenFalas() {
    setOpenConversas(true)
  }

  function handleChatList() {
    setChatList(true)
  }

  function SignOut() {
    return (
      auth.currentUser && (
        <button
          style={{
            height: '28px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '17px'
          }}
          className="botao-logout"
          onClick={() => auth.signOut()}
        >
          Log Out
        </button>
      )
    )
  }

  // async function addUser(u) {
  //   await db.collection('users').doc(u.id).set({
  //     name: u.name,
  //     avatar: u.avatar,
  //   }, { marge: true })
  // }

  function NewChat({ chatList, user }) {
    return (
      <>

        <div className="newChatContainer">
          <div className="newChat">
            <div className="newChat--Head">
              <div className="newChat--backbutton"></div>
              <div className="newChat--list">


              </div>
              <div className="newChat--headTitle">
                <ArrowBackIcon
                  style={{ cursor: 'pointer' }}
                  onClick={() => setOpenConversas(false)}
                />
                <div style={{ fontSize: '20px', marginLeft: '15px', fontFamily: 'Mooli' }}>
                  {' '}
                  Nova Conversa
                </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          <div style={{ cursor: 'pointer' }} onClick={handleWindow}>
            <ChatListContacts />
          </div>
        </div>
      </>
    )
  }

  if (user === null) {
    return <Login onReceive={user} />
  }

  const { photoURL, uid, displayName } = auth.currentUser

  const u = { photoURL, displayName }

  AddDocs(u)

  // useEffect(() => {

  //   const { photoURL, uid, displayName } = auth.currentUser

  //   const u = { photoURL, displayName }

  //   AddDocs(u)
  // }, [])

  return (
    <div className="app-window">
      <div className="sidebar">
        <div>
          <SignOut />
        </div>
        {openConversas === true ? (
          <NewChat user={user} chatlist={chatlist} />
        ) : (
          <>
            <header style={{ height: '7rem' }}>
              <img className="header-avatar" src={photoURL} alt="avatar" />
              <span>{displayName}</span>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '1.5rem',
                  width: '7.8rem'
                }}
              >
                <div className="header-buttons">
                  <div className="header-btn">
                    <DonutLargeIcon size="28" color="blue" />
                    <ChatIcon
                      size="28"
                      color="blue"
                      style={{ cursor: 'pointer' }}
                      onClick={() => setOpenFalas()}
                    />
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
              {/* <div className="chatlist">

              </div> */}

            </div>
            <ChatListItem />

          </>
        )
        }

        {/* <div className="search-input">
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
        </div> */}

        {/* <div className="chatlist">asas */}
        {/* <div
            style={{ cursor: 'pointer' }}

            onClick={handleWindow}>
            {chatlist}

asas

          </div> */}
        {/* </div> */}
        {/* <ChatListItem /> */}

      </div>

      <div className="contentarea">
        {intro === false ? (
          <div className="main-container">
            <img src={whats} alt="novo" width="898" />
          </div>
        ) : (
          // <Chatwindow photoURL={photoURL} displayName={displayName} />
          <Chatwindow user={user} />
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
                <TextRotationDownIcon
                  fontSize="large"
                  style={{
                    cursor: 'pointer',
                    marginLeft: '15px',
                    color: 'gray'
                  }}
                  onClick={() => setOpenConversas(false)}
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
