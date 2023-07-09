"use client"
import React, { useState } from 'react'

function DynamicForm() {

  let newData =({
    name: "",
    number: "",
    address: "",
  });
  const [data, setData] = useState(newData)
  const [userData, setUserData] = useState([])

  const updateData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
  const formHandle = (e) => {
    e.preventDefault();
    setData(newData)
    setUserData(current => [...current,data])
  }

  function removeData(key){
    let remove    = [...userData];
    remove.splice(key, 1);
    setUserData(remove)
  }
  return (
    <>
        <div className='bg-white w-full max-w-2xl py-8 md:mt-24 rounded-lg mx-auto'>
            <div className='text-center'>
                <h4 className='font-bold text-xl text-gray-800 mt-24 mb-12'>User Data Form</h4>
            </div>
            <form onSubmit={formHandle} className='mx-auto w-full max-w-xl flex flex-col gap-4 justify-center mb-16'>
                <input type="text" placeholder='Enter your name' value={data.name} onChange={updateData} name='name' className="border border-gray-400 rounded p-4 w-full focus:border-blue-500 focus:border-2 focus:ring-0 outline-none" />
                <input type="tel" placeholder='Enter your phone number' value={data.number} onChange={updateData} name='number' className="border border-gray-400 rounded p-4 w-full focus:border-blue-500 focus:border-2 focus:ring-0 outline-none" />
                <textarea placeholder='Enter your address' name='address' value={data.address} onChange={updateData} className='border border-gray-400 rounded p-4 w-full focus:border-blue-500 focus:border-2 focus:ring-0 outline-none'></textarea>
                <button type='submit' className='border border-yellow-500 bg-yellow-400 rounded p-4 w-full text-center'>Submit</button>
            </form>
        </div>
        {
            userData.length > 0 &&
            <div className='w-full max-w-7xl mx-auto mt-12'>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Address
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.map((data,key) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={key}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {data.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {data.number}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.address}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className='bg-red-400 p-4 rounded text-white' onClick={() => removeData(key)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
        }
    </>
  )
}

export default DynamicForm