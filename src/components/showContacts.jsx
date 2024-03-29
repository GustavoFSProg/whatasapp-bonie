import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { auth, databaseApp } from '../firebaseConfig'
import { collection, query, orderBy, addDoc, limit } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import api from '../api'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import Chatwindow from './chatWindow'
// import Chatwindow from './chatWindow'

function ShowContacts() {
  const [user] = useAuthState(auth)

  return (
    <div>
      <header>
        <ChatRoom />
      </header>
    </div>
  )
}

export const ChatUsersList = () => {
  const [room, setRoom] = useState([])

  const navigate = useNavigate()

  const [user] = useAuthState(auth)

  const { photoURL, displayName, uid } = auth.currentUser

  // async function getContacts(e) {
  //   const { data } = await api.get('/get-all-users')

  //   setRoom(data)
  // }

  async function setChatUsers({ user1, user2, messages }) {
    try {
      const data = { users: [user1, user2], messages: [messages] }

      const user = await api.post('Cregister-chats', data)

      return alert('Sucesso!!')
    } catch (error) {
      return console.log(`ERROR: ${error}`)
    }
  }

  async function goToChatWndow(id) {
    sessionStorage.setItem('ROOM-ID', id)

    // navigate('/chat-window')
    return <Chatwindow text="bom-dia" />

    // console.log(data)
  }

  async function RoomList(e) {
    const { data } = await api.get('/get-all-room')

    setRoom(data)

    // console.log(data)
  }

  useEffect(() => {
    // getContacts()
    RoomList()
  }, [room])

  return (
    <>
      <main style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
        <div style={{ marginTop: '3px', marginLeft: '5px' }}>
          {room.map((item) => {
            return (
              <div
                key={item.id}
                // onClick={() => chatWindows(item.messages)}
                // onClick={() =>
                //   setChatUsers({
                //     user1: item.name,
                //     user2: displayName,
                //     messages: 'Mues caros amigos!'
                //   })
                // }
                style={{
                  display: 'flex',
                  justifyContent: 'center',

                  height: '65px',
                  width: '100%',
                  alignItems: 'center'
                }}
              >
                <button onClick={() => goToChatWndow(item.id)}>CHAT</button>

                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    marginLeft: '20px',
                    fontSize: '21px'
                  }}
                  key={item.id}
                >
                  {/* <img src={item.image} alt="imagem" /> */}
                  <span>{item.title}</span>
                  {/* <span>{item.user2}</span> */}
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}

export const ChatMessage = (props) => {
  // eslint-disable-next-line react/prop-types
  const { displayName, photoURL, uid, createdAt } = props
  // eslint-disable-next-line react/prop-types
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'

  return (
    <div>
      <img src={photoURL} alt="photo" height="15" width="30" style={{ marginTop: '20px' }} />

      <p
        style={{
          fontSize: '17px',
          width: '25rem',
          marginLeft: '10px',
          color: 'darkblue',
          fontFamily: 'Poppins'
        }}
      >
        {displayName}
        <br />
      </p>
    </div>
  )
}

export default ShowContacts
