import { useEffect, useState } from 'react'
import { getConnections } from '../api/get'
import ConnectionCard from './connectionCard'

const Connections = () => {
    const [connections ,setConnections] = useState([])

    useEffect(()=>{
        const fetchConnections = async()=>{
            try {
                const response = await getConnections();
                setConnections(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchConnections();
    },[])
   
    if(connections.length===0){
        return <p>No connections available</p>
    }
    
  return (
    <div>
      {connections.map((connection,i) => (
        <ConnectionCard key={i} props={connection} />
      ))}
    </div>
  )
}

export default Connections