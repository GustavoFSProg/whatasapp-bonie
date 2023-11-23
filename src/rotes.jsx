import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Chatwindow from './components/chatWindow'

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/chat-window" exact element={<Chatwindow />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
