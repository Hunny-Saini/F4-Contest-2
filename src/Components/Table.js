import { useState, useEffect } from "react";
import axios from "axios";
import TableRow from "./TableRow";


function Table() {

    let [data,setData] = useState([]);
    useEffect(()=>{
      axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
      .then(res => setData(res.data))
      .catch(error => console.log(error))
    },[])
  
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th className="left">#</th>
                        <th className="left">NAME</th>
                        <th className="left">SYMBOL</th>
                        <th className="right">PRICE</th>
                        <th className="right">TOTAL VOLUME</th>
                        <th className="right">PRICE CHANGE (%)</th>
                        <th className="right">MARKET CAP</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((value,index)=>{
                            return <TableRow data={value} key={index}/>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
  
export default Table;
