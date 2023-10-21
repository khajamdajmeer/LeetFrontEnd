import React from 'react';

const ExploreCard = (props) => {


  return (
    <>
  
    <div className='shadow mx-1 border rounded  ' style={{width:'300px',height:'320px'}}>
    <div className="h-75 text-primary border rounded" style={{width:'300px',background:`url(${props.image}) center/cover`}}>
        <h6 className='text-white pt-2 px-2'>LeetCode's Interview Crash Course</h6>
        <h3 className=' px-2 text-white w-100' >{props.heading}</h3>
    </div>
    <div className="h-25 bg-white d-flex px-2 border rounded justify-content-between position-relative">
    <div className="d-flex flex-column align-items-center ">
    <h3 className='py-0'>{props.chapter}</h3>
    <p className='label-text-secondary'>Chapter</p>
    </div>
    <div className="d-flex flex-column align-items-center">
    <h3 className='py-0'>{props.items}</h3>
    <p className='label-text-secondary'>Items</p>
    </div>
    <div className="d-flex flex-column align-items-center px-2">
    <h3 className='py-0 invisible'>0</h3>
    <p className='label-text-secondary'>0%</p>
    </div>
    <button className='bg-white border border-1  shadow d-flex rounded-circle p-2 position-absolute top-0 end-0 translate-middle'>
    <span class="material-symbols-outlined fs-1 text-secondary">
play_arrow
</span>
    </button>
    </div>

    </div>
      
    </>
  );
}

export default ExploreCard;
