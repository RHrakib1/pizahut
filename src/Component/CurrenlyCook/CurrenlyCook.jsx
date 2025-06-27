import React from 'react'

export default function CurrenlyCook({ preparing }) {

    // total calorice
    const totalCalorice = preparing.reduce((sum, item) => {
        const calorice = (item.calories)
        return sum + calorice
    }, 0)


    //total time
    const totaltime = preparing.reduce((sum, item) => {
        const time = item.preparing_time
        return sum + time
    }, 0)


    return (
        <div>
            <div className='w-96 shadow-2xl p-5'>
                <h1 className='text-3xl font-bold p-5'> Currenly cooking:{preparing.length} </h1>
                <table className="table-auto w-full  border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className=" px-4 py-2">ID</th>
                            <th className=" px-4 py-2">Name</th>
                            <th className=" px-4 py-2">Calories</th>
                            <th className=" px-4 py-2">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            preparing.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className=" px-4 py-2">{item.recipe_id}</td>
                                    <td className=" px-4 py-2">{item.recipe_name}</td>
                                    <td className=" px-4 py-2">{item.calories}</td>
                                    <td className=" px-4 py-2">{item.preparing_time} </td>

                                </tr>
                            ))
                        }
                    </tbody>
                    <div>
                        <p>Total Time:{totaltime}</p>
                        <p>Total Calories: {totalCalorice}</p>
                    </div>

                </table>

            </div>
        </div>
    )
}
