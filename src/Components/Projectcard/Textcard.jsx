import React from 'react'

const Textcard = ({text}) => {
  return (
    <div className="text-sm font-normal bg-secondary rounded-full p-2 items-center w-fit dark:bg-darkgrey dark:text-white">
      {text}
    </div>
  )
}

export default Textcard
