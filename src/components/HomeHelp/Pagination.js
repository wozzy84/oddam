import React, { useEffect } from 'react';
import {useState, setState} from 'react'
 

const Pagination = ( { pageMark, postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  const [activeLink, setActiveLink] = useState("0");
  console.log(pageMark)
  const style = {
    border: "0.75px solid #3C3C3C"
 }

  useEffect(()=>{
    setActiveLink("0")
  },[pageMark])

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
const handleClick =(e) => {
  setActiveLink(e.currentTarget.id)
}
 if (pageNumbers.length > 1) {
     return (
    <nav>
      
      <ul className='pagination'>
        {pageNumbers.map((number, index) => (
          
          <li key={number} id={index} onClick={handleClick}className='page-item'
          style={activeLink==index? style: null}>
            <a onClick={(e) => paginate(number)}  className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
 }

 else{
    return (
    <nav>
      
      <ul className='pagination'>
        {pageNumbers.map((number, index) => (
          
          <li key={number} id={index} onClick={handleClick}className='page-item'
          style={{display: "hidden"}}>
        
          </li>
        ))}
      </ul>
    </nav>
  );
 }

};

export default Pagination;
