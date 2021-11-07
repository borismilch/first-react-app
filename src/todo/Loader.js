import React from 'react'


export default function Loader () {
  return (
   <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '.5rem'}}> <div className="lds-ring"><div></div><div></div><div></div><div></div></div> </div>
  )
}