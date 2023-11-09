import { useEffect, useState } from 'react'
import imageAvatar from '../assets/avatar.png'
import api from '../api'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth, databaseApp } from '../firebaseConfig'

function ChatListContacts() {
  const [contacts, setContacts] = useState([])
  const [users, setUsers] = useState([])
  const [name, setName] = useState({})
  const [pessoa, setPessoa] = useState({})

  async function RoomList(e) {
    const { data } = await api.get('/get-all-room')

    setContacts(data)

    console.log(data)
  }

  async function getUsers() {
    const { data } = await api.get('/get-all-users')

    setUsers(data)

    console.log(data)
  }

  async function enterRoom(user2) {
    try {
      const { photoURL, displayName, uid } = auth.currentUser

      console.log(`uid: ${uid}`)
      console.log(`user2: ${user2}`)

      const { data } = await api.get(`/get-user-dois/${uid}/${user2}`)
      // const userData = await api.get(`/get-user-dois/${id}`)
      // setPessoa(data)

      // console.log(`userDataUm: ${data.title}`)

      if (data === null) {
        try {
          const dados = {
            user1: uid,
            user2: user2,
            title: 'Titulo NOVO',
            image: 'imagem - 0002',
            messages: ['Olá!', 'oiii']
          }
          await api.post('/register-chat-room', dados)

          return alert('DEU Successo!')
        } catch (error) {
          return alert(`erro: ${error}`)
        }

        alert(`Cadastrou a sala de conversas:`)
        //
        console.log('Deu ERRO')
      } else {
        alert(`Encontrou a sala de conversas:`)

        // setUsers(data)
      }

      // if (userData && userDataUm) {
      //   return alert('ja te sala!!')
      // }
    } catch (error) {
      console.log(error)
    }
  }

  async function getRooms() {
    const { data } = await api.get(`/get-all-room`)

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
              {/* <button onClick={() => getUsers(item.id)}>entrar</button> */}
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
              {console.log(item)}
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
                  {item.user2}
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
