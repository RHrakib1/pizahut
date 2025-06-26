import React from 'react'

export default function Cooking({ cooking }) {
  return (
    <div className='w-96 shadow-2xl p-5'>
        <h1 className='text-3xl font-bold p-5'>cooking: {cooking.length}</h1>
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
            cooking.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className=" px-4 py-2">{item.recipe_id}</td>
                <td className=" px-4 py-2">{item.recipe_name}</td>
                <td className=" px-4 py-2">{item.calories}</td>
                <td className=" px-4 py-2">{item.preparing_time} </td>
                <td><button className='btn rounded-full bg-green-400'>Preparing</button></td>
                
              </tr>
            ))
          }
        </tbody>
        
      </table>
      
    </div>
  )
}
