import React from 'react'
import { Link } from 'react-router-dom';

const SingleCategory = ({_id,image_url, title, total_view, rating, author,details}) => {

    const truncating = (str, num) => {
        if(str.length > num){
            return (`${str.slice(0, num)}...`);
        } else {
            return str;
        }
    };
  return (
    <div className='border border-success my-4 p-2 rounded-2'>
        <img src={image_url} alt="" className='img-fluid' />
        <h3>{title}</h3>
        <h4>Views: {total_view}</h4>
        {
            details.length > 250 ?
            <p>{truncating(details, 250)}<Link to={`/news/${_id}`}>Read More</Link></p> :
            <p>{details}</p>
        }
    </div>
  )
}

export default SingleCategory