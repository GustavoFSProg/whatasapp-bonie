
function MessageItem({ data, user }) {
  return (
    <div style={{
      display: 'flex',
      // flexDirection: 'column',
      marginTop: '6px',
      justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'
    }}>
      <div >

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: user.id === data.author ? '#ccffcc' : '#c2d6d6',
          width: '10rem', height: '2rem',
          // marginTop: '-7px',
          padding: '20px 20px',
          marginLeft: '70px',
          marginRight: '70px',
          borderRadius: '10px'
        }}>
          {data.body}
          {data.author}
        </div>

      </div>



    </div>

  )
}

export default MessageItem