

const TableRow = ({data})=>{
    return(
        <tr>
            <td>{data.market_cap_rank}</td>
            <td className="name-cell">
                <img src={data.image} width="20px" alt="img" />
                <p>{data.name}</p>    
            </td>
            <td >{data.symbol.toUpperCase()}</td>
            <td className="right">${parseFloat(data.current_price)}</td>
            <td className="right">${data.total_volume.toLocaleString("en-US")}</td>
            <td className={data.price_change_percentage_24h >= 0 ? "right green":"right red"}>{data.price_change_percentage_24h}%</td>
            <td className="right">${data.market_cap.toLocaleString("en-US")}</td>
        </tr>
    )
    
}

export default TableRow;

