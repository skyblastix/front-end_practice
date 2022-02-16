import { useState } from "react"

import Edit from "./componments/Edit"
import List from "./componments/List"
import './index.css'

const Home = () =>{
    
const [data, setData] = useState([])
 
 return <div className="app">
        <Edit add = {setData} />
        <List  listData = {data} deleteData={setData}/>
    </div>
}

export default Home