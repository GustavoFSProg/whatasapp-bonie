import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { auth, databaseApp } from '../firebaseConfig'
import { collection, query, orderBy, addDoc, limit } from 'firebase/firestore'
import { useState } from 'react'


function ShowContacts() {
  const [user] = useAuthState(auth)

  return (
    <div >
      <header>
        <ChatRoom />
      </header>
    </div>
  )
}

export const ChatRoom = () => {
  const [formValue, setFormValue] = useState('')
  const messageRef = collection(databaseApp, 'usuarios')
  // eslint-disable-next-line no-undef
  const QueryMessages = query(messageRef, limit(20))
  const [my_messages] = useCollectionData(QueryMessages, { idField: 'id' })

  console.log(my_messages)

  async function sendMessage(e) {
    e.preventDefault()

    const { photoURL, uid } = auth.currentUser

  }
  return (
    <>
      {/* <main> */}
      <div style={{ marginTop: '3px', marginLeft: '5px' }}>
        {my_messages &&
          my_messages.map(msg => {
            return (
              <>

                <div key={msg.id}>
                  <img src={msg.avatar} alt="iamgem" />

                  <span>
                    {msg.name}
                  </span>
                </ div>

              </>

            )
          })}
      </div >
      {/* </main > */}


      {/* {console.log(default_messages)} */}
      {/* < br />
      < form onSubmit={sendMessage} >
        <input placeholder="Digite sua mensagem"
          type="text" value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          style={{
            paddingLeft: '19px',

          }} />
        <button className="enviar-button" type="submit">Enviar</button>
      </form>
    </>
  )
}

export const ChatMessage = (props) => {
  // eslint-disable-next-line react/prop-types
  const { displayName, photoURL, uid, createdAt } = props
  // eslint-disable-next-line react/prop-types
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'


  return (
    <div >

      <img src={photoURL} alt="photo" height="15" width="30"
        style={{ marginTop: '20px' }} />

      <p style={{
        fontSize: '17px', width: '25rem',
        marginLeft: '10px', color: 'darkblue', fontFamily: 'Poppins'
      }}>
        {displayName}
        <br />
      </p>
    </div>
  )
} */}
    </>

  )
}
export default ShowContacts