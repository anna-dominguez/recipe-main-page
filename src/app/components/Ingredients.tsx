import React from 'react'

const Ingredients = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-brandyRed text-[28px]">Ingredients</h2>
      <ul className="list-outside space-y-2 text-wengeBrown">
        <li className="grid grid-flow-col justify-start items-center">
          <div className="bg-brandyRed w-1.5 h-1.5 ml-2 mr-8 rounded-full"></div>
          <div>2-3 large eggs</div>
        </li>
        <li className="grid grid-flow-col justify-start items-center">
          <div className="bg-brandyRed w-1.5 h-1.5 ml-2 mr-8 rounded-full"></div>
          <div>Salt, to taste</div>
        </li>
        <li className="grid grid-flow-col justify-start items-center">
          <div className="bg-brandyRed w-1.5 h-1.5 ml-2 mr-8 rounded-full"></div>
          <div>Pepper, to taste</div>
        </li>
        <li className="grid grid-flow-col justify-start items-center">
          <div className="bg-brandyRed w-1.5 h-1.5 ml-2 mr-8 rounded-full"></div>
          <div>1 tablespoon of butter or oil</div>
        </li>
        <li className="grid grid-flow-col justify-start items-center">
          <div className="bg-brandyRed w-1.5 h-1.5 ml-2 mr-8 rounded-full"></div>
          <div>
            Optional fillings: cheese, diced vegetables, cooked meat, herbs
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Ingredients
