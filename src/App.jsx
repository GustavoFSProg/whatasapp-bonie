import './global.css'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { app, auth, databaseApp } from './firebaseConfig'
import { collection, query, orderBy, addDoc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Login from './components/Login'
import './App.css'
import './NewChat.css'
import { getDatabase, ref, push, get } from 'firebase/database'
// import { } from 'firebase/firestore'
// import avatar from './assets/avatar.png'
// import avatar1 from './assets/avatar-1.jpeg'

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
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { DoorBack } from '@mui/icons-material'
import { getAuth } from 'firebase/auth'
import ShowContacts, { ChatUsersList } from './components/showContacts'
import api from './api'

function App() {
  const [clicked, setClicked] = useState(false)
  const [listen, setListen] = useState(false)
  const [chatlist, setChatList] = useState([])
  const [intro, setIntro] = useState(false)
  const [text, setText] = useState('')
  const [emoji, setEmoji] = useState('')
  const [openConversas, setOpenConversas] = useState(false)
  const [desabilit, setDesabilit] = useState(false)

  const messageRef = collection(databaseApp, 'usuarios')
  const QueryMessages = query(messageRef, orderBy('id', 'asc'))
  const [my_messages] = useCollectionData(QueryMessages, { idField: 'id' })

  const [user] = useAuthState(auth)

  // console.log(`user: ${user}`)

  function handleWindow() {
    setIntro(true)
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
              <div className="newChat--list"></div>
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
            <div></div>
          </div>
          {/* <div style={{ cursor: 'pointer' }} onClick={handleWindow}> */}
          <div style={{ cursor: 'pointer' }}>
            <ChatListContacts />
          </div>
        </div>
      </>
    )
  }

  // async function AddDocs(u) {
  //   await addDoc(
  //     messageRef,
  //     {
  //       uid: u.uid,
  //       name: u.displayName,
  //       // name: "Cabaça",
  //       avatar: u.photoURL
  //       // avatar: "Foto da cabaça"
  //     },
  //     { merge: true }
  //   )
  // }

  if (!auth.currentUser) {
    return <Login onReceive={user} />
  }

  async function getOneUser() {
    const { data } = await api.get(`/get-one-user/${uid}`)
    console.log(`data:${data}`)

    if (!data) {
      const user = { photoURL, displayName, uid }
      const data = await api.post('/register-users', user)
      alert('Usuário Cadastrado com sucesso!!')

      return console.log(data)
    }
    if (data.idGoogle === uid) {
      alert('Usuario ja cadastrado!!')
    }
    // console.log(`NOMBRE: ${data.idGoogle}`)
  }

  const { photoURL, displayName, uid } = auth.currentUser

  async function RegisterUser() {
    // const user = { photoURL, displayName, uid }
    // const data = await api.post('/register-users', user)
    // return console.log(data)
  }

  // function AddOnClick() {
  //   AddDocs(u)
  //   setDesabilit(true)

  //   return alert('SHOW!!!!')
  // }

  // useEffect(() => {
  //   getOneUser()
  // }, [])

  return (
    <div className="app-window">
      <div className="sidebar">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div>
            <SignOut />
          </div>
          <button
            style={{
              height: '30px',
              alignItems: 'center',
              justifyContent: 'center',
              width: '150px',
              fontSize: '14px',
              display: 'flex'
            }}
            onClick={getOneUser}
          >
            CADASTRO
          </button>
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
                    fontSize: '23px'
                  }}
                />
              </button>
              {/* <div className="chatlist">

              </div> */}
            </div>
            <div style={{ cursor: 'pointer' }} onClick={handleWindow}>
              {/* <ChatListItem /> */}
              <ChatUsersList />
            </div>
          </>
        )}
      </div>

      <div className="contentarea">
        {intro === false ? (
          <div className="main-container">
            <img src={whats} alt="novo" width="898" />
          </div>
        ) : (
          // <Chatwindow photoURL={photoURL} displayName={displayName} />
          <Chatwindow text={text} />
        )}

        {/* // ********** */}
        {/* <ChatRoom /> */}

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
