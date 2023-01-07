import React from 'react'

const Cliente = ({ cliente }) => {
    const { nombre, empresa, email, telefono, id } = cliente
  return (
    
    <tr className='border-b'>
        <td className="p-6 space-y-2">
            <p className='text-2xl text-gray-800'>{nombre}</p>
            <p className='text-gray-600'>{empresa}</p>
        </td>
        <td className="p-6">
            <p className='text-gray-600'>
                <span className='text-gray-800 uppercase font-bold mr-2'>Email:</span>
                {email}
            </p>
            <p className='text-gray-600'>
                <span className='text-gray-800 uppercase font-bold mr-2'>Teléfono:</span>
                {telefono}
            </p>
        </td>
        <td className="p-6 flex gap-2 justify-end">
            <button className='px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm rounded-md'>Editar</button>
            <button className='px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-md'>Eliminar</button>
        </td>
    </tr>
    
  )
}

export default Cliente