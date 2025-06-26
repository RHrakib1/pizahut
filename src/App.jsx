import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Banner from './Component/Banner/Banner'
import Text from './Component/Text/Text'
import Ordars from './Component/Ordars/Ordars'
import Cooking from './Component/Cooking/Cooking'

function App() {

  const [cooking, setcooking] = useState([])

  const heandelCooking = (cook) => {
    setcooking(cook)
  }

  return (
    <>
      <main>
        <Header></Header>
        <Banner></Banner>
        <Text></Text>
        <div className='flex justify-between '>
          <Ordars heandelCooking={heandelCooking}></Ordars>
          <Cooking cooking={cooking}></Cooking>
        </div>
      </main>
    </>
  )
}

export default App
