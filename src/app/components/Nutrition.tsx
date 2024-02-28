import React from 'react'

const Nutrition = () => {
  return (
    <div className="space-y-6 text-wengeBrown">
      <h2 className="text-brandyRed text-[28px]">Nutrition</h2>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div className="flex flex-col space-y-3">
        <div className="grid grid-cols-2">
          <p className="ml-8">Calories</p>
          <p className="text-brandyRed font-bold ml-4">277kcal</p>
        </div>
        <hr />
        <div className="grid grid-cols-2">
          <p className="ml-8">Carbs</p>
          <p className="text-brandyRed font-bold ml-4">0g</p>
        </div>
        <hr />
        <div className="grid grid-cols-2">
          <p className="ml-8">Protein</p>
          <p className="text-brandyRed font-bold ml-4">20g</p>
        </div>
        <hr />
        <div className="grid grid-cols-2">
          <p className="ml-8">Fat</p>
          <p className="text-brandyRed font-bold ml-4">22g</p>
        </div>
      </div>
    </div>
  )
}

export default Nutrition
