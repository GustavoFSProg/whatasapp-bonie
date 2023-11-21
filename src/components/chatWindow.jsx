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

  async function getOneUserByIdUm(id) {
    // const id = sessionStorage.getItem('user1')

    const { data } = await api.get(`/get-one-user/${id}`)
    // console.log(`data:${data.idGoogle}`)
    // console.log(`data:${data.avatar}`)

    setUsers(data)

    // console.log(`NOMBRE: ${data.idGoogle}`)
  }

  async function getOneUserByIdDois(id) {
    // const id = sessionStorage.getItem('user2')

    const { data } = await api.get(`/get-one-user/${id}`)
    // console.log(`data:${data.idGoogle}`)
    // console.log(`data:${data.avatar}`)

    setUsersDois(data)

    // console.log(`NOMBRE: ${data.idGoogle}`)
  }

  async function RoomList() {
    const { data } = await api.get(`/get-one-room/${room_id}`)

    setRooms(data)

    // sessionStorage.setItem('user1', rooms.user1)
    // sessionStorage.setItem('user2', rooms.user2)

    console.log(`data: ${data.title}`)

    getOneUserByIdUm(rooms.user1)

    getOneUserByIdDois(rooms.user2)

    // return console.log()
  }

  async function getOneUserByIdUm() {
    const id = sessionStorage.getItem('user1')

    const { data } = await api.get(`/get-one-user/${id}`)
    // console.log(`data:${data.idGoogle}`)
    // console.log(`data:${data.avatar}`)

    setUsers(data)

    // console.log(`NOMBRE: ${data.idGoogle}`)
  }

  async function getOneUserByIdDois() {
    const id = sessionStorage.getItem('user2')

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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingLeft: '30px',
              paddingTop: '30px',
              paddingBottom: '15px',
              marginLeft: '20px',
              borderRadius: '15px',

              color: 'blue',
              fontSize: '17px',
              width: '400px',
              height: 'auto',
              background: '#e6e6e6'
            }}
          >
            <h4
              style={{
                marginTop: '-10px'
              }}
            >
              USER 1:
            </h4>
            {/* <span> USER 1: </span> */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                // paddingLeft: '30px',
                marginTop: '-33px',
                // justifyContent: 'center',

                color: 'blue',
                fontSize: '14px'
              }}
            >
              <img src={users.avatar} alt="imagem" />

              <h3
                style={{
                  marginLeft: '8px',
                  display: 'flex'
                }}
              >
                {rooms.user1Messages}{' '}
              </h3>
            </div>
          </div>
          <br />
          <br />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingRight: '30px',
              paddingLeft: '30px',
              paddingTop: '30px',
              paddingBottom: '15px',
              marginLeft: '430px',
              borderRadius: '15px',
              color: 'blue',
              fontSize: '17px',
              // width: 'auto',
              // maxWidth: '400px',
              width: '400px',
              height: 'auto',
              background: '#c1f0c1'
            }}
          >
            <h4
              style={{
                marginTop: '-10px'
              }}
            >
              USER 2:
            </h4>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                // paddingLeft: '30px',
                marginTop: '-33px',
                // justifyContent: 'center',

                color: 'blue',
                fontSize: '14px'
              }}
            >
              <img src={usersDois.avatar} alt="imagem" />

              <h3
                style={{
                  marginLeft: '8px',
                  display: 'flex'
                }}
              >
                {rooms.user2Messages}{' '}
              </h3>
            </div>
          </div>
        </span>

        {/* <button
          style={{
            height: '30px',
            alignItems: 'center',
            justifyContent: 'center',
            width: '150px',
            fontSize: '14px',
            display: 'flex'
          }}
          onClick={() => getOneUserByIdUm()}
        >
          SEARCHING - UM
        </button> */}
        <br />
        <br />
        <br />
        {/* <button
          style={{
            height: '30px',
            alignItems: 'center',
            justifyContent: 'center',
            width: '150px',
            fontSize: '14px',
            display: 'flex'
          }}
          onClick={() => getOneUserByIdDois()}
        >
          SEARCHING - DOIS
        </button> */}

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
