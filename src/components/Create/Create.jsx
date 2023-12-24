import React, { useState } from 'react'
import { AddMemory } from '../TripEventsReducer'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [destination,setDestination] = useState('')
    const [date,setDate] = useState('')
    const [file,setFile] = useState('')
    const [experience,setExperience] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const events = useSelector((state) => state.events)

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(AddMemory({id :events[events.length -1].id + 1  , destination , date , file,experience}))
        navigate('/')
    }

  return (
    <div className='d-flex w-100 justify-content-center align-items-center'>
        <div className="w-50 border bg-tertiary text-black p-5">
            <h3>Ajouter un nouvel Evenement</h3>
            <form  onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="destination">Destination</label>
                    <input type="text" name='destination' className='form-control' placeholder='Entrez la destination'
                    onChange={e => setDestination(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" className="form-control"
                     onChange={e => setDate(e.target.value)}  />
                </div>  
                <div  className='text-black'>
                <label  htmlFor="file">Selectionner le fichier</label><br/>
                <input type="file" className="form-control-file" name='file'
                 onChange={e => setFile(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="experience">Experience</label>
                    <input type="text" name="experience" className="form-control"  placeholder='Entrez le moment waouh! '
                     onChange={e => setExperience(e.target.value)}/>
                </div>  <br/>
                <button className='btn btn-info'>Soumettre</button>            
            </form>
        </div>
    </div>
  )
}

export default Create