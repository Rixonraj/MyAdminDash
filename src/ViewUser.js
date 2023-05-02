import React,{useEffect} from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function ViewUser() {
  const params = useParams()
  // const [searchparams] = useSearchParams()

  useEffect(() => {
    
  // QueryParam
    // console.log((searchparams.get('status')))
  }, [])
  
  return (
    // URL Param
    <h1>Id: {params.id}</h1>
    // <h1>vIEW USER</h1>
  )
}

export default ViewUser