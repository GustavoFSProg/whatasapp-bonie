import { useEffect, useState } from 'react'
import imageAvatar from '../assets/avatar.png'
import api from '../api'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth, databaseApp } from '../firebaseConfig'

function ChatListContacts() {
  const [contacts, setContacts] = useState([])
  const [users, setUsers] = useState([])
  const [name, setName] = useState({})

  async function RoomList(e) {
    const { data } = await api.get('/get-all-room')

    setContacts(data)

    console.log(data)
  }

  async function getUsers(e) {
    const { data } = await api.get('/get-all-users')

    setUsers(data)

    console.log(data)
  }

  async function enterRoom(id) {
    try {
      const { photoURL, displayName, uid } = auth.currentUser

      const dados = {
        user1: uid,
        user2: id,
        title: 'Titulo teste',
        image: 'imagem - 01',
        messages: ['Olá!', 'oiii']
      }
      await api.post('/register-chat-room', dados)

      alert(`Cadastrou a sala de conversas:`)
    } catch (error) {
      console.log(error)
    }
  }

  async function getUser(id) {
    const { data } = await api.get(`/get-user/${id}`)

    if (!data) {
      return alert('Usuario não encontrado!!')
    }

    setName(data)
    console.log(name)

    return name
  }

  useEffect(() => {
    RoomList(), getUsers()
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        marginTop: '10px',
        flexDirection: 'column'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          flexDirection: 'column',
          height: '71px',
          paddingTop: '8px',
          paddingBottom: '8px',
          paddingLeft: '8px',
          paddingRight: '18px',
          borderBottom: '2px solid gray'
        }}
      >
        {contacts.map((item) => {
          return (
            <div key={item.id}>
              <button onClick={() => getUser(item.user2)}>entrar</button>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  fontSize: '20px',
                  height: '6rem',
                  width: '100%',
                  alignItems: 'center',
                  marginLeft: '10px'
                }}
              >
                {/* <span>{item.title}</span> */}
                <img src={name.avatar} alt="avatar" />
                <span
                  style={{
                    display: 'flex',
                    marginLeft: '8px'
                  }}
                >
                  {name.name}
                </span>
                <br />
              </div>
              <br />
            </div>
          )
        })}

        {users.map((item) => {
          return (
            <div key={item.id}>
              <button onClick={() => enterRoom(item.id)}>Enter ROOM</button>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  fontSize: '20px',
                  height: '6rem',
                  width: '100%',
                  alignItems: 'center',
                  marginLeft: '10px'
                }}
              >
                {/* <span>{item.title}</span> */}
                <img src={item.avatar} alt="avatar" />
                <span
                  style={{
                    display: 'flex',
                    marginLeft: '8px'
                  }}
                >
                  {item.name}
                </span>
                <br />
              </div>
              <br />
            </div>
          )
        })}
      </div>
      <br />
      <br />
      <br />

      {/* <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          flexDirection: 'row',
          height: '71px',
          paddingTop: '8px',
          paddingBottom: '8px',
          paddingLeft: '8px',
          paddingRight: '18px',
          borderBottom: '2px solid gray',
          marginTop: '8px'
        }}
      >
        <img style={{ borderRadius: '50%' }} src={imageAvatar} alt="foto" width="55" />
        <div
          style={{
            display: 'flex',
            marginTop: '10px',
            marginLeft: '11px',
            alignItems: 'flex-start',
            width: '80%',

            fontSize: '14px',
            flexDirection: 'column'
          }}
        >
          <span> NOME DO CONTADO</span>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          flexDirection: 'row',
          height: '71px',
          paddingTop: '8px',
          paddingBottom: '8px',
          paddingLeft: '8px',
          paddingRight: '18px',
          borderBottom: '2px solid gray',
          marginTop: '8px'
        }}
      >
        <img style={{ borderRadius: '50%' }} src={imageAvatar} alt="foto" width="55" />
        <div
          style={{
            display: 'flex',
            marginTop: '10px',
            marginLeft: '11px',
            alignItems: 'flex-start',
            width: '80%',

            fontSize: '14px',
            flexDirection: 'column'
          }}
        >
          <span> NOME DO CONTADO</span>
        </div>
      </div> */}

      <div className="newChat--list"></div>
    </div>
  )
}

export default ChatListContacts
