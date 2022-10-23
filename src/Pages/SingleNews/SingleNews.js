import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';

const SingleNews = () => {

    const {image_url, title, total_view, details,category_id} = useLoaderData();
  return (
    <div>
        <img src={image_url} alt="" className='img-fluid' />
        <h3>{title}</h3>
        <h4>Views: {total_view}</h4>
        <p>{details}</p>
        <Link to={`/category/${category_id}`}>Related category news.</Link>
    </div>
  )
}

export default SingleNews;


export const newsLoader = async ({params}) => {
    const res = await fetch(`https://dragon-news-server-eight-delta.vercel.app/news/${params.id}`);
    return res.json();
};