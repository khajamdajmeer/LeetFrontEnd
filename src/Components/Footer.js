import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="container-fluid  justify-content-center d-flex border-top p-0 ">
        <div className="container py-2">
            <ul className='d-flex flex-wrap py-0 my-0'>
                <li className='list-group-item p-2 text-secondary btn '>copyright 2023 Leet</li>
                <li className='list-group-item p-2 text-secondary btn '>Help Center</li>
                <li className='list-group-item p-2 text-secondary btn '>Jobs</li>
                <li className='list-group-item p-2 text-secondary btn '>Bug Bounty</li>
                <li className='list-group-item p-2 text-secondary btn '>Assessment</li>
                <li className='list-group-item p-2 text-secondary btn '>Students</li>
                <li className='list-group-item p-2 text-secondary btn '>Terms</li>
                <li className='list-group-item p-2 text-secondary btn '>Privacy Policy</li>
            </ul>
        </div>
        
      </footer>

    </>
  );
}

export default Footer;
