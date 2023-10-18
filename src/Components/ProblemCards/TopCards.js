import React from 'react';
import { Link } from 'react-router-dom';

const TopCards = (props) => {
  return (
    <>
    <Link className='btn border cursor-pointer p-0 m-3' to='/' style={{width:'300px',height:'170px',overflow:'hidden'}}>
    <img src={props.image} alt="" style={{height:'inherit',width:'inherit'}}/>
    </Link>
      
    </>
  );
}

export default TopCards;
