import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const LeftSideBar = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://dragon-news-server-eight-delta.vercel.app/categories-news')
    .then(res => res.json())
    .then(data => {
      setCategories(data);
    })
  },[])
  return (
    <div>
      <h4>All categories</h4>
      {
        categories && categories.map(({id,name}) => <Link className='d-block' to={`category/${id}`} key={id}>{name}</Link>)
      }
    </div>
  )
}

export default LeftSideBar