import { useEffect, useState } from "react"

//component
import DataDetails from '../Components/data_details'

const Home = () => {
    //Fetch all data to display
    const [datas, setDatas] = useState(null)

    useEffect(() => {
        const fetchAllData = async () => {
            const response = await fetch('/admin/')
            const json = await response.json()

            if(response.ok){
                setDatas(json)
            }
        }

        fetchAllData()
    }, [])

    return(
        <div className="home">
            <div className="all-data flex justify-center mt-40">
                <table className="table-fixed border border-collapse border-slate-700">
                    <thead>
                        <tr>
                            <th className="px-28 bg-slate-700 text-white">ID</th>
                            <th className="px-28 bg-slate-700 text-white">Name</th>
                            <th className="px-28 bg-slate-700 text-white">Age</th>
                            <th className="px-28 bg-slate-700 text-white">Gender</th>
                            <th className="px-28 bg-slate-700 text-white">Date Created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas && datas.map((data) => (
                            <DataDetails key={datas._id} data={data}/>
                        ))}
                    </tbody>
                </table>
                
            </div>
        </div>
    )
}

export default Home