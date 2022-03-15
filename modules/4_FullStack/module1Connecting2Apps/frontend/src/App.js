import React, { useState, useEffect } from 'react'
import { getAllXfilesCharacters } from './services/xfilesHelpers'


const Application = () => {
  
  console.log("process", process.env)
  useEffect( () => {
    getAllXfilesCharacters()
  })

  return (
    <div>
      Hello!
    </div>
  );
};

export default Application