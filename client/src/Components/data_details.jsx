const data_details = ( {data} ) =>{
    return(
        <tr>
            <td className="text-center border border-slate-700">{data._id}</td>
            <td className="text-center border border-slate-700">{data.name}</td>
            <td className="text-center border border-slate-700">{data.age}</td>
            <td className="text-center border border-slate-700">{data.gender}</td>
            <td className="text-center border border-slate-700">{data.createdAt}</td>
        </tr>
    )
}

export default data_details