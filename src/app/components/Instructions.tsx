import React from 'react'

const Instructions = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-brandyRed text-[28px]">Instructions</h2>
      <ol className="text-wengeBrown space-y-2">
        <li className="grid grid-flow-col justify-start">
          <div className="text-brandyRed font-bold ml-2 mr-6">1.</div>
          <p>
            <span className="font-bold">Beat the eggs:</span> In a bowl, beat
            the eggs with a pinch of salt and pepper until they are well mixed.
            You can add a tablespoon of water or milk for a fluffier texture.
          </p>
        </li>
        <li className="grid grid-flow-col justify-start">
          <div className="text-brandyRed font-bold ml-2 mr-6">2.</div>
          <p>
            <span className="font-bold">Heat the pan:</span> Place a non-stick
            frying pan over medium heat and add butter or oil.
          </p>
        </li>
        <li className="grid grid-flow-col justify-start">
          <div className="text-brandyRed font-bold ml-2 mr-6">3.</div>
          <p>
            <span className="font-bold">Cook the omelette:</span> Once the
            butter is melted and bubbling, pour in the eggs. Tilt the pan to
            ensure the eggs evenly coat the surface.
          </p>
        </li>
        <li className="grid grid-flow-col justify-start">
          <div className="text-brandyRed font-bold ml-2 mr-6">4.</div>
          <p>
            <span className="font-bold">Add fillings (optional):</span> When the
            eggs begin to set at the edges but are still slightly runny in the
            middle, sprinkle your chosen fillings over one half of the omelette.
          </p>
        </li>
        <li className="grid grid-flow-col justify-start">
          <div className="text-brandyRed font-bold ml-2 mr-6">5.</div>
          <p>
            <span className="font-bold">Fold and serve:</span> As the omelette
            continues to cook, carefully lift one edge and fold it over the
            fillings. Let it cook for another minute, then slide it onto a
            plate.
          </p>
        </li>
        <li className="grid grid-flow-col justify-start">
          <div className="text-brandyRed font-bold ml-2 mr-6">6.</div>
          <p>
            <span className="font-bold">Enjoy:</span> Serve hot, with additional
            salt and pepper if needed.
          </p>
        </li>
      </ol>
    </div>
  )
}

export default Instructions
