import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="container-fluid justify-content-center d-flex border-top p-0 ">
        <div className="container py-2">
            <ul className='d-flex flex-wrap py-0 my-0'>
                <li className='list-group-item p-2 text-secondary'>copyright 2023 Leet</li>
                <li className='list-group-item p-2 text-secondary'>Help Center</li>
                <li className='list-group-item p-2 text-secondary'>Jobs</li>
                <li className='list-group-item p-2 text-secondary'>Bug Bounty</li>
                <li className='list-group-item p-2 text-secondary'>Assessment</li>
                <li className='list-group-item p-2 text-secondary'>Students</li>
                <li className='list-group-item p-2 text-secondary'>Terms</li>
                <li className='list-group-item p-2 text-secondary'>Privacy Policy</li>
            </ul>
        </div>
        
      </footer>

    </>
  );
}

export default Footer;
