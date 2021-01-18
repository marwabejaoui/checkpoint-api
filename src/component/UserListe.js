import React,{useEffect} from 'react';
import { useSelector , useDispatch} from "react-redux";
import User from "./User";
import { Alert } from 'reactstrap'
import { apiCall } from '../redux/action'
import SelektonComponent from './Selekton'



const UserListe = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(state)

    useEffect(() => {
        dispatch(apiCall())
        
    }, [dispatch])

    return (
        <div className='container'>
            {
                state.isLoading ? (
                  
                    <SelektonComponent /> 
                )
                :state.error ? (
                    <Alert color='danger'>{state.error}</Alert>
                )
                :(
                    state.users.map(user=>{
                       return(
                           <User key={user.id} user={user}/>
                       ) 
                    })
                )
            }
        </div>
    )
}

export default UserListe
