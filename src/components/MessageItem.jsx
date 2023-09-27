
function MessageItem({ data, user }) {
  return (
    <div className="container-scroll" >
      <div style={{
        display: 'flex',
        // flexDirection: 'column',
        marginTop: '6px',
        justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'
      }}>
        <div >

          <div className="container-messages"
            style={{
              background: user.id === data.author ? '#ccffcc' : '#c2d6d6',

            }}>
            {data.body}
            {data.author}
          </div>
        </div>
      </div>




    </div >

  )
}

export default MessageItem