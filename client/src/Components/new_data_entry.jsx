import { useState } from 'react'

const New_data_entry = ({closeModal}) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const workout = {name, age, gender}
        
        const response = await fetch('/admin/', {
            method:'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type' : 'application/json'
            }
        })

        const json = await response.json
        if(response.ok){
            setName('')
            setAge('')
            setGender('')
            closeModal(false)
            console.log('new data', json)
        }
    }

    return(
        <div className="signup-form bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-max">
            <div className="container border-4 border-slate-700 rounded-md">
                <form className="inner-form flex flex-col p-7" onSubmit={handleSubmit}>
                    <h3 className='pb-10 font-bold'>Add/Create a new person's details</h3>

                    <label className='font-bold text-blue-800'>Name: </label>
                    <input
                        className='appearance-none bg-transparent outline-none focus:outline-none border-b border-b-blue-950'
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name} 
                    />
                    <label className='font-bold text-blue-800'>Age: </label>
                    
                    <input
                        className='appearance-none bg-transparent outline-none focus:outline-none border-b border-b-blue-950'
                        type="number"
                        onChange={(e) => setAge(e.target.value)}
                        value={age} 
                    />
                    <label className='font-bold text-blue-800'>Gender: </label>
                    <input 
                        className='appearance-none bg-transparent outline-none focus:outline-none border-b border-b-blue-950'
                        type="text"
                        onChange={(e) => setGender(e.target.value)}
                        value={gender} 
                    />
                    <div className="flex flex-row mt-10">
                        <button className='border-2 border-green-500 w-[40%] rounded-md hover:bg-green-500 hover:text-white ease-in-out transition duration-150'>
                            Create Data
                        </button>
                        <button className='border-2 border-red-500 w-[40%] ml-auto rounded-md hover:bg-red-500 hover:text-white ease-in-out transition duration-150'
                        onClick={() => closeModal(false)}>
                            Cancel
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default New_data_entry