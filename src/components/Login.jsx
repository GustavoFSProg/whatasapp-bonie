// import api from "../api"
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { auth, databaseApp } from '../firebaseConfig'
import { collection, query, orderBy, addDoc, limit } from 'firebase/firestore'
import { useState } from 'react'

function Login({ onReceive }) {
  const [SignInWithGoogle] = useSignInWithGoogle(auth)

  const messageRef = collection(databaseApp, 'usuarios')
  const QueryMessages = query(messageRef, orderBy('id', 'asc'))
  const [my_messages] = useCollectionData(QueryMessages, { idField: 'name' })

  const [user] = useAuthState(auth)

  async function HandleLogin() {
    // console.log(`mensagem: ${my_messages}`)

    await SignInWithGoogle()

    const { photoURL, displayName } = auth.currentUser
    console.log(`NAME: ${displayName}`)
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh'
      }}
    >
      <button
        style={{
          color: 'gray',
          background: 'white',
          width: '40%'
        }}
        onClick={() => HandleLogin()}
      >
        {' '}
        Entrar com o Google
      </button>
    </div>
  )
}

// async function handleLoginFacebook() {
//   let result = await api.fbPopup()

//   if (result) {
//     onReceive(result.user)
//     console.log(result)

//   } else {
//     alert("erro")
//   }

// }

// return (
//   <div className="container-scroll">
//     <div
//       style={{
//         display: 'flex',
//         // flexDirection: 'column',
//         marginTop: '6px',
//       }}
//     >
//       <button style={{ height: '100px' }} onClick={handleLoginFacebook}>
//         Logar com Facebook
//       </button>
//     </div>
//   </div>
// )

export default Login
