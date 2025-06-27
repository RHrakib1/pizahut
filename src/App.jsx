import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Banner from './Component/Banner/Banner'
import Text from './Component/Text/Text'
import Ordars from './Component/Ordars/Ordars'
import Cooking from './Component/Cooking/Cooking'
import CurrenlyCook from './Component/CurrenlyCook/CurrenlyCook'

function App() {

  const [cooking, setcooking] = useState([])
  const [preparing, setpreparing] = useState([])

  const heandelCooking = (cook) => {
    setcooking([...cooking, cook])
  }

  const hendelPerparing = (id) => {
    const remaining = cooking.filter(item => item.recipe_id !== id);
    const moveitem = cooking.find(item=>item.recipe_id == id)
    
    setcooking(remaining);
    setpreparing([...preparing,moveitem])
  }

  return (
    <>
      <main>
        <Header></Header>
        <Banner></Banner>
        <Text></Text>
        <div className='flex justify-between '>
          <Ordars heandelCooking={heandelCooking}></Ordars>
          <div>
            <Cooking hendelPerparing={hendelPerparing} cooking={cooking}></Cooking>
            <CurrenlyCook preparing={preparing} ></CurrenlyCook>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
