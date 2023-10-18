import React from 'react';


const CardsTwo = (props) => {
  return (
    <>
      <div class="card mb-3 mx-2 card-hover" style={{width:"310px",boxShadow:'0px 2px 6px rgba(0, 0, 0, 0.04),0px 4px 8px rgba(0, 0, 0, 0.02),0px 6px 12px rgba(0, 0, 0, 0.02);'}}>
  <div class="row g-0 p-0">
    <div class="col-md-4 p-2 ">
      <img src={props.image} class=" rounded-start border rounded " style={{width:'100%'}} alt="..."/>
    </div>
    <div class="col-md-8 ">
      <div class="card-body py-2">
        <h6 class="card-title">{props.heading}</h6>
        <p class="card-text"><small class="text-body-secondary " style={{fontSize:'12px'}} >{props.body}</small></p>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default CardsTwo;
