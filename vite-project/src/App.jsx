import React from 'react'
import { motion } from "framer-motion"

const App = () => {
  return (
    <div className='flex p-5 m-5'>

        <motion.div 
          className='w-[300px] h-[300px] bg-slate-500 mx-auto'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
          
        <motion.div 
          className='w-[300px] h-[300px] bg-teal-500 mx-auto' 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.div 
          className='w-[300px] h-[300px] bg-cyan-500 mx-auto' 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

    </div>
  )
}

export default App