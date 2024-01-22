import React from 'react'

const profilexyz = ({params}:any) => {
  return (
    <div>
      <h1>Profile</h1>
      <span>{params.username}</span>
    </div>
  )
}

export default profilexyz