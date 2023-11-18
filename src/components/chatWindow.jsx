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
  const [users, setUsers] = useState({})
  const [usersDois, setUsersDois] = useState({})

  async function RoomList() {
    const { data } = await api.get(`/get-one-room/${room_id}`)

    setRooms(data)

    console.log(`data: ${data.title}`)
  }

  async function getOneUserByIdUm(id) {
    const { data } = await api.get(`/get-one-user/${id}`)
    // console.log(`data:${data.idGoogle}`)
    // console.log(`data:${data.avatar}`)

    setUsers(data)

    // console.log(`NOMBRE: ${data.idGoogle}`)
  }

  async function getOneUserByIdDois(id) {
    const { data } = await api.get(`/get-one-user/${id}`)
    // console.log(`data:${data.idGoogle}`)
    // console.log(`data:${data.avatar}`)

    setUsersDois(data)

    // console.log(`NOMBRE: ${data.idGoogle}`)
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
          <div style={{ color: 'blue', fontSize: '17px' }}>
            <h2> MENSAGENS USER 1: </h2>

            <img src={users.avatar} alt="imagem" />

            <h3>{rooms.user1Messages} </h3>
          </div>
          <br />
          <br />

          <div style={{ color: 'darkgreen', fontSize: '17px' }}>
            <h2> MENSAGENS USER 2: </h2>
            <img src={usersDois.avatar} alt="imagem" />

            <h3>{rooms.user2Messages} </h3>
          </div>
        </span>

        <button
          style={{
            height: '30px',
            alignItems: 'center',
            justifyContent: 'center',
            width: '150px',
            fontSize: '14px',
            display: 'flex'
          }}
          onClick={() => getOneUserByIdUm(rooms.user1)}
        >
          SEARCHING - UM
        </button>
        <br />
        <br />
        <br />
        <button
          style={{
            height: '30px',
            alignItems: 'center',
            justifyContent: 'center',
            width: '150px',
            fontSize: '14px',
            display: 'flex'
          }}
          onClick={() => getOneUserByIdDois(rooms.user2)}
        >
          SEARCHING - DOIS
        </button>

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
