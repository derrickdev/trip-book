import React from 'react'
import {eventsList} from '../../data/TripEventsData'
import './EventCard.css'
import edit from '../../assets/edit.png'
import Delete from  '../../assets/delete.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMemory } from '../TripEventsReducer'



const EventCard = ({id ,destination,date,image,experience}) => {
  const events = useSelector((state) => state.events)
  const dispatch = useDispatch();
  const handleDelete = (id) => {
      dispatch(deleteMemory({id :id}))
  }
  return (
    <div className='card'>
       <div>
       <h1>{destination}</h1>
        <h3>{date}</h3>
       </div>
  
        <img   src={`${image}`} alt="destination" />
        <p>{experience}</p>
        <div className="btn-box">
          <Link className='link'  to={`/edit/${id}`}> 
          <img className='edit-btn' src={edit} alt="" /> 
          </Link>
          <Link className='link'>
          <img onClick={()  =>handleDelete(id)} className='delete-btn' src={Delete} alt="" />
          </Link>
        
        
        </div>
       
    </div>
  )
}

export default EventCard