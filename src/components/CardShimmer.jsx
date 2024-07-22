import React from 'react'

const CardShimmer = () => {
  return (
    <div className="aspect-video flex drop-shadow-2xl bg-slate-700 my-4 md:mx-5 md:max-w-96">
        <div className="w-1/3 h-full bg-slate-500"></div>
        <div className="w-2/3 h-full px-2 py-1">
          <h1 className="bg-slate-500 text-slate-500 rounded">da</h1>
          <div className=" bg-slate-500 my-2 text-slate-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur velit error, nobis illum unde debitis eius voluptas
            beatae facere aperiam!
          </div>
        <h1 className="bg-slate-500 text-slate-500 rounded w-1/2">da</h1>
        </div>
      </div>
  )
}

export default CardShimmer;