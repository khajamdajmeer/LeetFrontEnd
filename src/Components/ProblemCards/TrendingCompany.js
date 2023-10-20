import React from 'react';

const TrendingCompany = () => {

    const companylist = [
        {company_name:'google',Question_Count:1205},
        {company_name:'facebook',Question_Count:636},
        {company_name:'Bloomberg',Question_Count:565},
        {company_name:'Microsoft',Question_Count:689},
        {company_name:'Amazon',Question_Count:1293},
        {company_name:'TikTok',Question_Count:259},
        {company_name:'Uber',Question_Count:429},
        {company_name:'Apple',Question_Count:619},
        {company_name:'Salesforce',Question_Count:119},
        {company_name:'LinkedIn',Question_Count:153},
        {company_name:'Walmart labs',Question_Count:232},
        {company_name:'Oracle',Question_Count:232},
        {company_name:'Goldman sachs',Question_Count:140},
        {company_name:'paypal',Question_Count:64},
        {company_name:'citadel',Question_Count:53},
        {company_name:'adobe',Question_Count:76},
        {company_name:'Cisco',Question_Count:50},
        {company_name:'Nvidia',Question_Count:50},
        {company_name:'IBM',Question_Count:39},
        {company_name:'JP Morgan',Question_Count:67},
    ]

  return (
    <>
      <div className='py-3 px-1 border mt-2 rounded'>
        <div className="d-flex justify-content-between">
        <h6>Trending companies</h6>
    <div className="d-flex">
    <button className="btn  mx-2 py-0 d-flex align-items-center justify-content-center p-0" ><span class="material-symbols-outlined" style={{transform:'rotate(90deg)',color:'grey'}}>
expand_more
</span></button>
            <button className="btn d-flex align-items-center p-0" ><span class="material-symbols-outlined" style={{transform:'rotate(-90deg)',color:'grey'}}>
expand_more
</span></button>
    </div>
        </div>
        <div>
            <input className='w-100 border rounded p-1' type="text" name="Serach" placeholder='Search for a company...' id="" />
        </div>
        <div className='d-flex py-2 flex-wrap'>
            {companylist.map((ele,index)=>{
                return(
                    <div className='py-1 px-2 m-1 rounded-pill bg-light fw-bold text-secondary btn' style={{fontSize:'14px'}}>{ele.company_name} <span className='rounded-pill px-1 fw-normal ' style={{backgroundColor:'orange', color:'white'}}>{ele.Question_Count}</span></div>
                )
            })}
       
          
        </div>
      </div>
    </>
  );
}

export default TrendingCompany;
