import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleCategory from './Category/SingleCategory';

const Home = () => {
  const datas = useLoaderData();
  return (
    <>
      {
        datas.map(data => <SingleCategory key={data._id} {...data}/>)
      }
    </>
  )
}

export default Home;
export const homeLoader = async () => {
  const res = await fetch('https://dragon-news-server-eight-delta.vercel.app/news')
  return res.json();
};