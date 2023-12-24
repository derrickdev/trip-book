import React from 'react'
import './home.css'
import {TripEventsData} from '../../data/TripEventsData'
import EventCard from '../EventCard/EventCard'
import nature from '../../assets/nature.jpg'
import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'


const Home = () => {
  const events = useSelector((state) => state.events)
  console.log(events);
  return (
    <div className='home '>
        <div className="Header">
          <h1>Souvenirs de  <span className='stroke-text'>Voyages</span></h1>
          <h3>Décrivez vos propres expériences de voyage</h3> 
        </div>
        <div className="eventCard">
         {events.map((event,key) => (
          <EventCard key={key}
            destination={event.destination}
            date={event.date}
            image={event.image}
            experience={event.experience}
            id={event.id}
          />
          
         ))}

        </div>
        <div className="create">
          <Link to='/create' className='btn btn-success my-3'>Create a memory +</Link>
        </div>
    </div>
  )
}

export default Home