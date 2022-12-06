import React from 'react';
import Writer from '..';
// import EmptyList from '../../../common/EmptyList';
import Records from './data.json'

import { Link } from 'react-router-dom';

const WriterBlogs = () => {
  return (
    <div>
       <Link className='blog-goBack' to='/'>
        <div className='mx-2'>
        <span> &#8592;</span> <span>Go Back</span>
        </div>
      </Link>
       <h2 className='text-5xl font-extrabold flex justify-center items-center pb-2 text-orange-600 mb-3'>HUSTLE VALLEY</h2>
        
        <div class="pt-6 pb-12 bg-stone-800 border-8 border-white rounded-xl">  
  <div id="card" class="">
 
    {/* <!-- container for all cards --> */}
    <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">
   
    
      {/* <!-- card --> */}

      {
        Records.map( record => {
          return(
            <div className='box' key={record.id}>
              
              {/* <!-- container for all cards --> */}
              <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">
                {/* <!-- card --> */}
                <div v-for="card in cards" class="flex flex-col md:flex-row overflow-hidden
                                                  bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
                  {/* <!-- media --> */}
                  <div class="h-64 w-auto md:w-1/2">
                    <img class="inset-0 h-full w-full object-cover object-center" src={record.img}  alt =""/>
                  </div>
                  {/* <!-- content --> */}
                  <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                    <h3 class="font-semibold text-lg leading-tight truncate">{ record.title }</h3>
                    <p class="mt-2">
                      { record.excerpt }
                    </p>
                    <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                      { record.author } &bull; { record.date }
                    </p>
                  </div>
                </div>
              </div>

            </div>
          )
        })
      }
    </div>
    <Writer />
  </div>
</div>
    </div>
  )
}

export default WriterBlogs;


