import React from 'react'
import { FaFire } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";

export default function Ordar({ or ,heandelCooking}) {
    const { recipe_name, recipe_id, recipe_image, short_description, ingredients, preparing_time, calories } = or
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-2xl m-5">
                <figure className="px-10 pt-10">
                    <img
                        src={recipe_image}
                        alt="Shoes"
                        className="rounded-xl  w-96" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className='text-left'>{short_description}</p>
                    <h2 className='flex justify-items-start font-bold text-xl'>Ingredients:{ingredients.length}</h2>
                    <div className='text-left'>
                        {
                            ingredients.map(data => <li>{data}</li>)
                        }
                    </div>
                    <div className='flex gap-5'>
                        <div className='flex gap-2'>
                            <button><FaFire /></button>
                            {preparing_time} min
                        </div>
                        <div className='flex gap-2'>
                            <button><CiTimer /></button>
                            {calories} calories
                        </div>
                    </div>
                    <div className="card-actions">
                        <button onClick={()=>heandelCooking(or)} className="btn rounded-full bg-green-400">Want to cook</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
