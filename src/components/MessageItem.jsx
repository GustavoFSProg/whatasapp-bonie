
function MessageItem({ data, user }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'
    }}>
      <div>
        UM
      </div>
      DOIS
      <div>
        TRES
      </div>
      <div>
        QUATRO
      </div>
    </div>

  )
}

export default MessageItem