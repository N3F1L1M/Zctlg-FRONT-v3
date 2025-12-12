import React from 'react'

export default async function busqueda({ params }) {

    const { query } = await params;
    const queryDecoded = decodeURIComponent(query)

  return (
    <div className="container mx-auto px-4 py-8 border">
      
      {queryDecoded} 
    
    
    </div>
  )



}
