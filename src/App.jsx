import SideBar from './components/Sidebar'
import Main from './pages/Main'
import Form from './pages/Form'
import Table from './pages/Table'
//After installing router and wrapping our app.jsx with BrowserRoute we have import the following
import { Route, Routes } from 'react-router-dom'

//Create variable and update variable to another component
const App = () => {
  return (
    <>
    <SideBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/form" element={<Form />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </>
  )
}

export default App
