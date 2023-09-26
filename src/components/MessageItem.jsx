
function MessageItem({ data, user }) {
  return (
    <div style={{
      display: 'flex',
      // flexDirection: 'column',
      justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'
    }}>
      <div >

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: user.id === data.author ? '#ccffcc' : '#c2d6d6',
          width: '10rem', height: '2rem',
          marginTop: '15px',
          padding: '20px 20px',
          marginLeft: '20px',
          marginRight: '20px',
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