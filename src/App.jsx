import './App.css'
import BarChart from './components/BarChart'
import LineChart from './components/LineChart'
// import DaisyNav from './components/DaisyNav'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <div>
        {/* <DaisyNav></DaisyNav> */}
        <NavBar></NavBar>
        <LineChart></LineChart>
        <BarChart></BarChart>
      </div>
    </>
  )
}

export default App
