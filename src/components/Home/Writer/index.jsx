import React from 'react';
import { Link } from 'react-router-dom';


const Writer = () => {

  return (
    <div>
        
        <div class="">
    <div class="max-w-screen-md mx-auto px-10 pt-20">
      <div class="bg-white md:h-48 rounded-lg shadow-md flex flex-wrap flex-col-reverse md:flex-col justify-center items-center">
        <div class="w-full md:w-1/2 p-4 flex justify-center items-center flex-col">
          <h3 class="text-3xl font-bold">John Doe</h3>
          {/* <p>{authorDescription}</p> */}
          <Link to={`/writer`}>
          More From Him     ➝
          </Link>
        </div>
        <div class="w-1/2 md:w-1/2 p-4 md:p-0">
          <img src="/assets/images/designer-1.jpg" alt="" class="w-64 mx-auto" />
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Writer;