import imageAvatar from '../assets/avatar.png'

function ChatListContacts() {
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
