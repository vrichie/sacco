'use client'
import React from 'react'

const page = () => {
  const userData=JSON.parse(localStorage.getItem("user"))
  console.log(userData.firstName)
  return (
    <div>
      <h1>Hello {userData?.firstName}, welcome.
      </h1>
    </div>
  )
}

export default page
