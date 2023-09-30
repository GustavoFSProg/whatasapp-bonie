import { useState } from 'react'
import MessageItem from './MessageItem'
import avatar1 from '../assets/avatar-1.jpeg'

import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchIcon from '@mui/icons-material/Search'
import '../App.css'

function Chatwindow({ user, data }) {
  const [list, setList] = useState([
    { author: 123, body: 'Blablabla' },
    { author: 123, body: 'Blablabla' },
    { author: 1234, body: 'blueJeans' },
    { author: 1234, body: 'Eu de novo' },
    { author: 1234, body: 'Eu de novo' },
    { author: 1234, body: 'Eu de novo' },
    { author: 1234, body: 'Eu de novo' },
    { author: 1234, body: 'Eu de novo' },
    { author: 1234, body: 'Eu de novo' },
    { author: 1234, body: 'Eu de novo' },
    { author: 1234, body: 'Eu de novo' },
    { author: 1234, body: 'Eu de novo' },
    { author: 1234, body: 'Eu de novo' },
    { author: 1234, body: 'Eu de novo' },
    { author: 1234, body: 'Eu de novo' },
    { author: 1234, body: 'Eu de novo' }
  ])

  return (
    <>
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            color: 'black',
            height: '3rem',
            paddingBottom: '37px',
            marginTop: '45px',
            marginLeft: '-10px',

          }}
        >
          <img
            className="header-avatar"
            src={user.photoURL}
            alt="avatar"
            style={{
              width: '3.8rem',
              height: '3.8rem',
              marginLeft: '-73px',
              // marginTop: '8px'
            }}
          />
          <span
            style={{
              marginLeft: '-42px',
              // marginTop: '27px',
              color: 'black',
              fontFamily: 'Arial',
              fontSize: '14px',
              width: '280px'
            }}
          >
            {user.displayName}
          </span>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '380px'
            }}
          >
            <SearchIcon style={{ display: 'flex', marginRight: '20px', fontSize: '29px' }} />
            <MoreVertIcon color="blue" style={{ display: 'flex', fontSize: '29px' }} />
          </div>
        </div>
      </div>
      <div
        // style={{ visibility: 'hidden' }}
        className="main-container"
      >

        <div style={{ marginTop: '50px' }}>
          {list.map((item, key) => (
            <MessageItem key={key} data={item} user={user} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Chatwindow
