import './global.css'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { auth, databaseApp } from './firebaseConfig'
import { collection, query, orderBy, addDoc, limit } from 'firebase/firestore'
import { useState } from 'react'
import Login from './components/Login'


function App() {
  const [clicked, setClicked] = useState(false)
  const [listen, setListen] = useState(false)
  const [chatlist, setChatList] = useState(false)
  const [intro, setIntro] = useState(false)
  const [text, setText] = useState('')
  const [emoji, setEmoji] = useState('')
  const [openConversas, setOpenConversas] = useState(false)

  // const [user, setUser] = useState(null)

  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <header>
        <h1 className="react-chat">React-Chat    ⚛️</h1>
        <img className="imagem" src={auth.currentUser ? auth.currentUser.photoURL : null} />
        <SignOut />
      </header>
      <section>{user ? <ChatRoom /> : <Login onReceive={user} />}</section>
    </div>
  )
}

export const ChatRoom = () => {
  const [formValue, setFormValue] = useState('')
  const messageRef = collection(databaseApp, 'my_messages')
  // eslint-disable-next-line no-undef
  const QueryMessages = query(messageRef, orderBy('createdAt', "asc"))
  const [my_messages] = useCollectionData(QueryMessages, { idField: 'id' })

  async function sendMessage(e) {
    e.preventDefault()

    const { photoURL, uid, displayName } = auth.currentUser

    console.log(auth.currentUser)

    await addDoc(messageRef, {
      text: formValue,
      uid,
      photoURL,
      // createdAt: serverTimestamp(Date)
      createdAt: Date(),
    })

    // await deleteDoc(doc(db, "cities", "DC"));

    setFormValue('')
  }
  // let messages = "Nova ideia!!!"
  return (
    <>
      <main>
        <div style={{ marginTop: '3px', marginLeft: '5px' }}>
          {my_messages &&
            my_messages.map((msg, index) => {
              return (


                // eslint-disable-next-line no-undef
                <ChatMessage
                  key={index}
                  createdAt={msg.createdAt}
                  text={msg.text}
                  photoURL={msg.photoURL}
                />
              )
            })}
        </div >
      </main>


      {/* {console.log(default_messages)} */}
      <br />
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
  const { text, photoURL, uid, createdAt } = props
  // eslint-disable-next-line react/prop-types
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'

  // const messageClass = uid === auth.currentUser.uid ? "send" : "recived"
  const { displayName } = auth.currentUser

  return (
    <div className={`message ${messageClass}`}>

      <img src={photoURL} alt="photo" height="15" width="30"
        style={{ marginTop: '20px' }} />
      <div style={{ color: 'white' }}>

        {displayName}
      </div>

      <p style={{
        fontSize: '17px', width: '25rem',
        marginLeft: '10px', color: 'darkblue', fontFamily: 'Poppins'
      }}>
        {' '}
        {text}
        <br />
        <span style={{ color: 'black', fontSize: '13px' }}> {createdAt}</span>
      </p>
    </div>
  )
}

export const SignIn = () => {
  const [SignInWithGoogle] = useSignInWithGoogle(auth)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      {' '}
      <button
        style={{
          color: 'gray',
          background: 'white',
          width: '50%',
        }}
        onClick={() => SignInWithGoogle()}
      >
        {' '}
        SignIn With Google
      </button>
    </div>
  )
}

export const SignOut = () => {
  return (
    auth.currentUser && (
      <button className="botao-logout"
        onClick={() => auth.signOut()}>
        Log Out
      </button>
    )
  )
}

export default App