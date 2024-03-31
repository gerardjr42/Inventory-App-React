import './App.css'
import SideBar from './components/Sidebar'
import Form from './pages/Form'
import Main from './pages/Main'
import Table from './pages/Table'

//Create variable and update variable to another component
const App = () => {
  // Add a switch statement for our pages
  let component
  switch(window.location.pathname) {
    case "/main":
      component = <Main/>
      break
    case "/form":
      component = <Form/>
      break
    case "/table":
      component = <Table/>
      break
  }

  return (
    <>
    <SideBar />
    {component}
    </>
  )
}

export default App
