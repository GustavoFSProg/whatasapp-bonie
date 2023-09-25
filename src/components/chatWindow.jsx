import { useState } from 'react'
import MessageItem from './MessageItem'
// import avatar from './assets/avatar.png'
import avatar1 from '../assets/avatar-1.jpeg'

import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchIcon from '@mui/icons-material/Search'
import '../App.css'


function Chatwindow() {
  const [list, setList] = useState([{}, {}])
  const [user, setUser] = useState({
    id: 1231,
    avatares: avatar1,
    name: 'Gustavo Sohne'
  })

  return (
    <div
      // style={{ visibility: 'hidden' }}
      className="main-container"
    >
      <div className="contentarea">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            color: 'black',
            height: '5rem',
            paddingBottom: '37px'
          }}
        >
          <img
            className="header-avatar"
            src={user.avatares}
            alt="avatar"
            style={{
              width: '3.8rem',
              height: '4rem',
              marginLeft: '13px',
              marginTop: '8px'
            }}
          />
          <p
            style={{
              marginLeft: '12px',
              marginTop: '27px',

              fontFamily: 'Arial',
              fontSize: '17px'
            }}
          >
            {user.name}
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '590px'
            }}
          >
            <SearchIcon style={{ display: 'flex', marginRight: '20px', fontSize: '29px' }} />
            <MoreVertIcon color="blue" style={{ display: 'flex', fontSize: '29px' }} />
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', color: 'black', alignItems: 'center' }}>
        CENTRO
        {list.map((item, key) => (
          <MessageItem key={key} data={item} user="author" />
        ))}
      </div>
    </div>
  )
}

export default Chatwindow
