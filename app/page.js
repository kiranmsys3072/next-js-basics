'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
  const router=useRouter()
  return (
    <div>
      <button className='border ' onClick={()=> router.push(
        'about'
      )}>Go</button>
    </div>
  )
}

export default page