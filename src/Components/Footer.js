import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="container-fluid justify-content-center d-flex border-top p-0 ">
        <div className="container py-2">
            <ul className='d-flex py-0 my-0'>
                <li className='list-group-item px-3 text-secondary'>copyright 2023 Leet</li>
                <li className='list-group-item px-3 text-secondary'>Help Center</li>
                <li className='list-group-item px-3 text-secondary'>Jobs</li>
                <li className='list-group-item px-3 text-secondary'>Bug Bounty</li>
                <li className='list-group-item px-3 text-secondary'>Assessment</li>
                <li className='list-group-item px-3 text-secondary'>Students</li>
                <li className='list-group-item px-3 text-secondary'>Terms</li>
                <li className='list-group-item px-3 text-secondary'>Privacy Policy</li>
            </ul>
        </div>
        
      </footer>

    </>
  );
}

export default Footer;
