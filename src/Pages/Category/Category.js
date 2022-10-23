import React from 'react'
import { useLoaderData } from 'react-router-dom';
import SingleCategory from './SingleCategory';

const Category = () => {

  const datas = useLoaderData();
  return (
    <>
      {
        datas.map(data => <SingleCategory key={data._id} {...data}/>)
      }
    </>
  )
}


export default Category;

export const catLoader = async ({params}) => {
  const res = await fetch(`https://dragon-news-server-eight-delta.vercel.app/category/${params.id}`)
  return res.json()
};