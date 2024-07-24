import {useState} from 'react'
import './style.css'
import Menu from '../../components/Menu/index'
import { NavLink } from 'react-router-dom'
import Portfolio from '../../data/data'


const index = () => {

  
const [filterDat,setFilterDat]=useState(Portfolio)

 const FilterWeb = ()=> {
    const FData3=Portfolio.filter(item=>item.category==='web')
    setFilterDat(FData3)
 }
 const FilterDesign = ()=> {
  const FData3=Portfolio.filter(item=>item.category==='design')
  setFilterDat(FData3)
}
const FilterApp = ()=> {
  const FData3=Portfolio.filter(item=>item.category==='application')
  setFilterDat(FData3)
}
const FilterAll = ()=> {
  setFilterDat(Portfolio)
}

  return (
    <div className='about-box'>
      <header className='header'>
        <h1>Portfolio</h1>
        <div className='header-menu'>
          <Menu/>
        </div>
      </header>
      <main className='about-content'>
        <div className='yellow-line'></div>
        <ul className='portfolio-menu'>
          <li onClick={FilterAll}>
            <NavLink>All</NavLink>
          </li>
          <li onClick={FilterWeb}>
            <NavLink>Web Development</NavLink>
          </li>
          <li onClick={FilterApp}>
            <NavLink>Application</NavLink>
          </li>
          <li onClick={FilterDesign}>
            <NavLink>Web Design</NavLink>
          </li>
        </ul>
        <section className='portfolio-content'>
            {filterDat.map(item => (
                <a href={item.link} className='portfolio-card' key={item.id}>
                  <img src={item.img} alt="" />
                  <h2>{item.name}</h2>
                  <p>{item.category}</p>
                </a>
            ))}
        </section>
      </main>      
    </div>
  )
}

export default index
