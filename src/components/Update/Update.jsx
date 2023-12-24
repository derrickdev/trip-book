import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { UpdateMemory } from '../TripEventsReducer';


const Update = () => {
    const {id} = useParams();
    const events = useSelector((state) => state.events) 
    const existingEvent = events.filter(f => f.id ==id)
    const {destination,date,file,experience} = existingEvent[0]
    const [udestination,setDestination] = useState(destination)
    const [udate,setDate] = useState(date)
    const [ufile,setFile] = useState(file)
    const [uexperience,setExperience] = useState(experience)
    const navigate = useNavigate();
    

    const dispatch =useDispatch();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(UpdateMemory({
            id :id,
            destination :udestination,
            date :udate ,
            file :ufile,
            experience : uexperience

        }))
        navigate('/')
    }
  return (
    <div className='d-flex w-100 justify-content-center align-items-center'>
        <div className="w-50 border bg-tertiary text-black p-5">
            <h3>Modifier un Evenement</h3>
            <form  onSubmit={handleUpdate} >
                <div>
                    <label htmlFor="destination">Destination</label>
                    <input type="text" name='destination' className='form-control' placeholder='Entrez la destination'
                  value={udestination} onChange={e =>setDestination(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" className="form-control"
                    value={udate} onChange={e =>setDate(e.target.value)}  />
                </div>  
                <div  className='text-black'>
                <label  htmlFor="file">Selectionner le fichier</label><br/>
                <input type="file" className="form-control-file" name='file'
                value={ufile} onChange={e =>setFile(e.target.value)}  />
                </div>
                <div>
                    <label htmlFor="experience">Experience</label>
                    <input type="text" name="experience" className="form-control"  placeholder='Entrez le moment waouh! '
                  value={uexperience} onChange={e =>setExperience(e.target.value)} />
                </div>  <br/>
                <button className='btn btn-info'>Modifier</button>            
            </form>
        </div>
    </div>
  )
}

export default Update