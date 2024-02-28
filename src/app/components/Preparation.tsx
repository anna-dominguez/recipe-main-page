import React from 'react'

const Preparation = () => {
  return (
    <div className="bg-snow space-y-4 p-6 rounded-xl">
      <h3 className="text-darkRaspberry text-[20px] font-semibold">
        Preparation time
      </h3>
      <ul className="marker:text-darkRaspberry ml-2 space-y-2 text-wengeBrown">
        <li className="grid grid-flow-col  justify-start items-center">
          <div className="bg-brandyRed w-1.5 h-1.5 ml-2 mr-8 rounded-full"></div>
          <p>
            <span className="font-semibold">Total:</span> Approximately 10
            minutes
          </p>
        </li>
        <li className="grid grid-flow-col  justify-start items-center">
          <div className="bg-brandyRed w-1.5 h-1.5 ml-2 mr-8 rounded-full"></div>
          <p>
            <span className="font-semibold">Preparation:</span> 5 minutes
          </p>
        </li>
        <li className="grid grid-flow-col  justify-start items-center">
          <div className="bg-brandyRed w-1.5 h-1.5 ml-2 mr-8 rounded-full"></div>
          <p>
            <span className="font-semibold">Cooking:</span> 5 minutes
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Preparation
