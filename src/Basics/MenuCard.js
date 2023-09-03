import React from 'react'
import './style.css'




const MenuCard = ({MenuData}) => {

   
  return (
    <>
    <section className='main-card--container'></section>
    {MenuData.map((curElem)=>{
      const {id, name ,category,image,description}=curElem
        return (<>
        <div className='card-container' key={id}>
        <div className='card '>
        <div className='card-body'>
            <div className='card-number' >{id}</div><br />
            <span className='card-author subtle'>{category}</span>
            <h2 className='card-title'>{name}</h2>
            <span className='card-description'>{description}</span>
            <div className='card-read'>READ</div>
         <img className='card-image' src={image} alt="" /><br />
         <span className='card-order'>Order Now</span>
        </div>
    </div></div></>)
    })}
    </>
  )
}

export default MenuCard

