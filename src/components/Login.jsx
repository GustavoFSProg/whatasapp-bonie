// import api from "../api"
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth, databaseApp } from '../firebaseConfig'

function Login({ onReceive }) {
  const [SignInWithGoogle] = useSignInWithGoogle(auth)

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
        onClick={() => SignInWithGoogle()}
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
