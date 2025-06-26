import React from 'react'

export default function Cooking({ cooking }) {
    const { calories, preparing_time, recipe_name, recipe_id } = cooking
    return (
        <div className='w-96 shadow-2xl '>
            <table className="table-auto w-full border border-gray-300">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Calories</th>
                        <th className="border px-4 py-2">Time</th>
                    </tr>
                </thead>
                <tbody>

                    <tr className="hover:bg-gray-100">
                        <td className="border px-4 py-2">{recipe_id}</td>
                        <td className="border px-4 py-2">{recipe_name}</td>
                        <td className="border px-4 py-2">{calories}</td>
                        <td className="border px-4 py-2">{preparing_time}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}
