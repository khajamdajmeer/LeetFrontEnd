import React from 'react';

const List = () => {
  return (
    <>
      <div className="" style={{Width:'700px',overflowX:'auto',maxHeight:'900px',overflowY:'auto'}}>
        <div className="d-flex  justify-content-between py-2">
            <select className='px-4 border rounded bg-light text-secondary mx-2' name="aka" id="">
                <option value="">List</option>
            </select>
            <select className='px-4 border rounded bg-light text-secondary mx-2' name="aka" id="">
                <option value="">Difficulty</option>
            </select>
            <select className='px-4 border rounded bg-light text-secondary mx-2' name="aka" id="">
                <option value="">Status</option>
            </select>
            <select className='px-4 border rounded bg-light text-secondary mx-2' name="aka" id="">
                <option value="">Tags</option>
            </select>
            <input type="text" className='border rounded px-2 mx-2' placeholder='Search' aria-label='search'/>
            <button className="btn btn-primary mx-2">search</button>
            <button className="btn btn-secondary mx-2 d-flex flex-nowrap">
            <span class="material-symbols-outlined ">
shuffle
</span> <span>PickOne</span>
            </button>
        </div>
        <div className="d-flex py-2 text-secondary border-bottom">
            <div className="w-50 d-flex">
                <div className="w-25">Status</div>
                <div className="w-50">Title</div>
                <div className="w-25">Solution</div>
            </div>
            <div className="w-50 d-flex  justify-content-between">
                <div className="w-25">Acceptance</div>
                <div className="w-25">Difficulty</div>
                <div className="w-25">Frequency</div>
            </div>
        </div>
        <div className="d-flex py-2 ">
            <div className="w-50 d-flex">
                <div className="w-25"><span class="material-symbols-outlined" style={{color:'orange'}}>
lock
</span></div>
                <div className="w-50">Parallel Courses</div>
                <div className="w-25">Done</div>
            </div>
            <div className="w-50 d-flex justify-content-between align-items-center">
                <div className="w-25">66.9%</div>
                <div className="w-25" style={{color:'red'}}>Hard</div>
                <div className="w-25 "><span class="material-symbols-outlined" style={{color:'grey'}}>
lock
</span></div>
            </div>
        </div>
      </div>
    </>
  );
}

export default List;
