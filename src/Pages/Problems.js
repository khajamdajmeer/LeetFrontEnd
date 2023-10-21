import React, { useState } from 'react';
import TopCards from '../Components/ProblemCards/TopCards';
import cardone from '../Resources/Images/pcardone.jpeg';
import cardtwo from '../Resources/Images/pcardtwo.png';
import cardthree from '../Resources/Images/pcardthree.png';
import { Link } from 'react-router-dom';
import CardsTwo from '../Components/ProblemCards/CardsTwo';
import sone from '../Resources/Images/codeone.png';
import stwo from '../Resources/Images/stwo.jpg';
import sfour from '../Resources/Images/sfour.png';
import sfive from '../Resources/Images/sfive.png';
import List from '../Components/ProblemCards/List';
import CalenderRight from '../Components/ProblemCards/CalenderRight';
import TrendingCompany from '../Components/ProblemCards/TrendingCompany';
import Footer from '../Components/Footer';
const Problems = () => {

  const type = [
    {name:'Array',count:1480},
    {name:'String',count:643},
    {name:'Hash Table',count:561},
    {name:'Dynamic Programming',count:461},
    {name:'Math',count:458},
    {name:'Sorting',count:347},
    {name:'Greedy',count:330},
    {name:'Depth-First Search',count:282},
    {name:'Binary Search',count:238},
    {name:'Database',count:234},
    {name:'Breadth-First Search',count:223},
    {name:'Tree',count:219},
    {name:'Matrix',count:203},
    {name:'Two Pointers',count:117},
    {name:'Bit Manipulation',count:171},
    {name:'BinaryTree',count:170},
    {name:'Heap (Priority Queue)',count:149},
    {name:'Stack',count:149},
    {name:'Prefix Sum',count:149},
  ]

  const [showingtype,setShowingtype]=useState(type.slice(0,7));

  const handleexpand = ()=>{
    if(showingtype.length>7){
      setShowingtype(type.slice(0,7));
    }
    else{
      setShowingtype(type)
    }
  }

  return (
    <>
    <div className="container-fluid pt-4 d-flex justify-content-center flex-wrap row px-0">
        <div className='col col-sm-12 col-md-9'>
    <div className=" d-flex flex-wrap pt-5">
      <TopCards image={cardone} />
      <TopCards image={cardtwo}/>
      <TopCards image={cardthree}/>
    </div>
    <div className='d-flex align-items-center justify-content-between py-2'><h3>Study Plan</h3> <Link>See all</Link></div>
    <div className='d-flex justify-content-between flex-wrap py-1 px-0 border-bottom'>
        <CardsTwo image={sone} heading='Top Interview 150' body='Must-do List for Interview Prep'/>
        <CardsTwo image={stwo} heading='LeetCode 75' body='Ace Coding Interview with 75 Qs'/>
        <CardsTwo image={sone} heading='SQL 50' body='Crack SQL Interviewin 50 Qs'/>
        <CardsTwo image={sfive} heading='30 Days of JavaScript' body='Learn Basic Pandas in 15 Qs'/>
        <CardsTwo image={sfour} heading='Introduction to Pandas' body='Learn Basic Pandas in 15 Qs'/>
        <CardsTwo image={sfive} heading='Amazon Spring 23 High Frequency' body='Learn Basic Pandas in 15 Qs'/>
    </div>
    <div className='d-flex flex-wrap py-2'>
      {showingtype.map((ele,index)=>{
        return(
          <p className='my-2 mx-1'>{ele.name}<span className='text-body-secondary mx-1 bg-light px-2 border rounded-pill' >{ele.count}</span></p>
        )
      })}
      <button className="btn  py-0 d-flex align-items-center" onClick={handleexpand}>
      <span class="material-symbols-outlined" style={{transform:`${showingtype.length>7 ?'rotate(90deg)':'rotate(-90deg)'}`}}>
keyboard_double_arrow_left
</span>
{showingtype.length>7 ? 'colapse' :'expand'}
        </button>
    </div>
    <div className='' style={{overflow:"auto"}}>
      <List/>
    </div>
        </div>
    <div className="col col-sm-12 col-md-3 p-0" style={{maxWidth:'250px'}} >
        <CalenderRight/>
        <TrendingCompany/>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default Problems;
