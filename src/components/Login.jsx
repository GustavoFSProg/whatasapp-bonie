import api from "../api"


function Login({ onReceive }) {

  async function handleLoginFacebook() {
    let result = await api.fbPopup()

    if (result) {
      onReceive(result.user)
      console.log(result)

    } else {
      console.log("erro")
    }

  }


  return (
    <div className="container-scroll">
      <div
        style={{
          display: 'flex',
          // flexDirection: 'column',
          marginTop: '6px',
        }}
      >
        <button onClick={handleLoginFacebook}>
          Logar com Facebook
        </button>
      </div>
    </div>
  )
}

export default Login
