import { useEffect, useState } from 'react'
import MessageItem from './MessageItem'
import avatar1 from '../assets/avatar-1.jpeg'

import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchIcon from '@mui/icons-material/Search'
import '../App.css'
import api from '../api'

function Chatwindow({ text }) {
  const room_id = sessionStorage.getItem('ROOM-ID') // const [list, setList] = useState([
  const [rooms, setRooms] = useState('')

  async function RoomList() {
    const { data } = await api.get(`/get-one-room/${room_id}`)

    setRooms(data)

    console.log(`data: ${data.title}`)
  }

  useEffect(() => {
    // RoomList()
  }, [])
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
            marginLeft: '-10px'
          }}
        >
          {/* <img
            className="header-avatar"
            src={user}
            alt="avatar"
            style={{
              width: '3.8rem',
              height: '3.8rem',
              marginLeft: '-73px'
              // marginTop: '8px'
            }}
          /> */}
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
            blanc
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

        <button onClick={() => RoomList()}>VER MENSAGENS</button>
      </div>
      <div
        // style={{ visibility: 'hidden' }}
        className="main-container"
      >
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
          <h3>{rooms.title} </h3>
          <br />
          <br />
          <h2> MENSAGENS: </h2>
          <h3>{rooms.messages} </h3>
        </span>

        {/* <div style={{ marginTop: '50px' }}>
          {list.map((item, key) => (
            <MessageItem key={key} data={item} user={user} />
          ))}
        </div> */}
        {text}
      </div>
    </>
  )
}

export default Chatwindow
