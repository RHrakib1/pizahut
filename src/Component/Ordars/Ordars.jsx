import React, { useEffect, useState } from 'react'
import Ordar from './Ordar'

export default function Ordars({heandelCooking}) {
    const [ordars, setordars] = useState([])
    useEffect(() => {
        fetch('pizza.json')
            .then(res => res.json())
            .then(data => setordars(data))
    }, [])
    return (
        <div>
            <h1>Ordars:{ordars.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2'>

                {
                    ordars.map(or => <Ordar heandelCooking={heandelCooking} or={or}></Ordar>)
                }
            </div>

        </div>
    )
}
