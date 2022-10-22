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
  const res = await fetch('http://localhost:5000/news')
  return res.json();
};