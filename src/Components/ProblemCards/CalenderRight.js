import React, { useState } from 'react';

const CalenderRight = () => {


  const Calender = [
    {month:'Jan',Date:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,0,0,0,0]},{month:'Feb',Date:[0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,0,0,0,0]},{month:'Mar',Date:[0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,0]},{month:'Apr',Date:[0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,0,0,0,0,0,0]},{month:'May',Date:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,0,0,0]},{month:'Jun',Date:[0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,0]},{month:'Jul',Date:[0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},{month:'Aug',Date:[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,'00','00']},{month:'Sep',Date:[0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]},{month:'Oct',Date:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,'00','00','00','00']},{month:'Nov',Date:[0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]},{month:'Dec',Date:[0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},

]
const today = new Date() ;
const day = today.getDate();
const monthe = today.getMonth();
const year = today.getFullYear();
const [index,setIndex] = useState(monthe);

const handleprevmonth = ()=>{
  if(index>0){setIndex(index-1)}
}
const handleNxtMonth =()=>{
  if(index<=10){setIndex(index+1)}
}



  return (
    <>
      <div className="w-100 mt-5 border rounded">
        <div className='py-2 d-flex justify-content-between align-items-center'>
          <div className='ps-2 fw-bold'><span className='fw-bold '>Day</span> {day}</div>
          <div className='d-flex'>
            <button className="btn  mx-2 py-0 d-flex align-items-center justify-content-center p-0" onClick={handleprevmonth}><span class="material-symbols-outlined" style={{transform:'rotate(90deg)',color:'grey'}}>
expand_more
</span></button>{Calender[index].month} {year}
            <button className="btn d-flex align-items-center p-0" onClick={handleNxtMonth}><span class="material-symbols-outlined" style={{transform:'rotate(-90deg)',color:'grey'}}>
expand_more
</span></button>
          </div>
        
        </div>
        <div className='w-100 p-1'>
            <ul className='d-flex justify-content-between w-100 p-0 m-0 text-label' style={{listStyle:'none'}}>
                <li className='p-2'>S</li>
                <li className='p-2'>M</li>
                <li className='p-2'>T</li>
                <li className='p-2'>W</li>
                <li className='p-2'>T</li>
                <li className='p-2'>F</li>
                <li className='p-2'>S</li>
            </ul>
        </div>
        <div className="w-100 p-1 cal-hover">
          <ul className='d-flex justify-content-between w-100 p-0 m-0 text-label' style={{listStyle:'none'}}>
          {Calender[index].Date.slice(0,7).map((ele,iindex)=>{
            return(
              <li
  className={`position-relative p-2 ${day === ele && index === monthe ? 'todayactive ' : ''}`}
  style={{ visibility: ele < 1 ? 'hidden' : 'visible' }}
>
  {ele < 10 ? '0' : ''}{ele}
  <span style={{display:(index>monthe||(index===monthe&&ele>day))?'none':''}} className='position-absolute bottom-0 start-50 p-1 bg-danger translate-middle-x rounded-circle'></span>
</li>

                )
              })}
            </ul>
            <ul className='d-flex justify-content-between w-100 p-0 m-0 text-label' style={{listStyle:'none'}}>
          {Calender[index].Date.slice(7,14).map((ele,iindex)=>{
            return(
              <li
              className={`position-relative p-2 ${day === ele && index === monthe ? 'todayactive ' : ''}`}
              style={{ visibility: ele < 1 ? 'hidden' : 'visible' }}
            >
              {ele < 10 ? '0' : ''}{ele}
              <span style={{display:(index>monthe||(index===monthe&&ele>day))?'none':''}} className='position-absolute bottom-0 start-50 p-1 bg-danger translate-middle-x rounded-circle'></span>
            </li>
            
                )
              })}
            </ul>
            <ul className='d-flex justify-content-between w-100 p-0 m-0 text-label' style={{listStyle:'none'}}>
          {Calender[index].Date.slice(14,21).map((ele,iindex)=>{
            return(
              <li
              className={`position-relative p-2 ${day === ele && index === monthe ? 'todayactive ' : ''}`}
              style={{ visibility: ele < 1 ? 'hidden' : 'visible' }}
            >
              {ele < 10 ? '0' : ''}{ele}
              <span style={{display:(index>monthe||(index===monthe&&ele>day))?'none':''}} className='position-absolute bottom-0 start-50 p-1 bg-danger translate-middle-x rounded-circle'></span>
            </li>
            
                )
              })}
            </ul>
            <ul className='d-flex justify-content-between w-100 p-0 m-0 text-label' style={{listStyle:'none'}}>
          {Calender[index].Date.slice(21,28).map((ele,iindex)=>{
            return(    <li
              className={`position-relative p-2 ${day === ele && index === monthe ? 'todayactive ' : ''}`}
              style={{ visibility: ele < 1 ? 'hidden' : 'visible' }}
            >
              {ele < 10 ? '0' : ''}{ele}
              <span style={{display:(index>monthe||(index===monthe&&ele>day))?'none':''}} className='position-absolute bottom-0 start-50 p-1 bg-danger translate-middle-x rounded-circle'></span>
            </li>
            )})}
            </ul>
            <ul className='d-flex justify-content-between w-100 p-0 m-0 text-label' style={{listStyle:'none'}}>
          {Calender[index].Date.slice(28,35).map((ele,iindex)=>{
            return(    <li
              className={`position-relative p-2 ${day === ele && index === monthe ? 'todayactive ' : ''}`}
              style={{ visibility: ele < 1 ? 'hidden' : 'visible' }}
            >
              {ele < 10 ? '0' : ''}{ele}
              <span style={{display:(index>monthe||(index===monthe&&ele>day))?'none':''}} className='position-absolute bottom-0 start-50 p-1 bg-danger translate-middle-x rounded-circle'></span>
            </li>
            )})}
            </ul>
        
        </div>
        <div>

        </div>
      </div>

    </>
  );
}

export default CalenderRight;
