import React from 'react'

export default function UserData() {

  const arr =[
    {
      index : 1 , name :"rohit", age:"22"
    }
  ]
  console.table(arr)

  return (
    <div className='User-page'> 

    {/*  style={{padding:180, height:'100vh'}} */}
      <h1> Request a not be available.  </h1>
      {/*  style={{fontWeight:"bold", fontSize:"5rem" ,color:"#fff" }} */}

     <h2>
     {arr.map((data , index)=>(
        <div key={index}>
          <p> {data.index} </p>
          <p> {data.name} </p>
        </div>
        ))}
     </h2>

  </div>
  )
}
