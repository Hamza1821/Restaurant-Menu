import React from 'react'
import Menu from './menuApi.js'
import './style.css'
import MenuCard from './MenuCard.js'
import Navbar from './Navbar.js'


const uniqueList= [...new Set(Menu.map((curElem)=>{
  return curElem.category 
})),'All'];


const Restaurent = () => {
 const [MenuData,setMenuData] =React.useState(Menu)
 const [MenuList,setMenulist]=React.useState(uniqueList) 
 const filterItem=(catItem)=>{
     if(catItem=='All'){
      setMenuData(Menu)
     }
     else{
    const updatedList= Menu.filter((curElem)=>{
       return curElem.category===catItem;
    })
     setMenuData(updatedList);}
  }
  return (
    <>
    <Navbar filterItem={filterItem} MenuList={MenuList}/>
    
    <div className='btn-group'><MenuCard MenuData={MenuData}/></div>
    </>
  )
}

export default Restaurent
