import { useEffect, useState } from 'react'
import imageAvatar from '../assets/avatar.png'
import api from '../api'

function ChatListContacts() {
  const [contacts, setContacts] = useState([])

  // const [user] = useAuthState(auth)
  // const { photoURL, displayName, uid } = auth.currentUser

  async function RoomList(e) {
    const { data } = await api.get('/get-all-room')

    setContacts(data)
  }

  useEffect(() => {
    RoomList()
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
          flexDirection: 'row',
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
            <div
              key={item.id}
              style={{ display: 'flex', height: '65px', width: '100%', alignItems: 'center' }}
            >
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  marginTop: '25px',
                  alignItems: 'center'
                }}
                key={item.id}
              >
                {/* <img src={item.avatar} alt="iamgem" /> */}

                <span>{item.title}</span>
                <span>{item.user2}</span>
              </div>
            </div>
          )
        })}
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
      </div>

      <div className="newChat--list"></div>
    </div>
  )
}

export default ChatListContacts
