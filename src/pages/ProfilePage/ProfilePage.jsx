import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './ProfilePage.css';



const ProfilePage = props => {
    const filterPost = props.shifts.filter(shift => shift.owner.includes(props.user._id)).map(shift => (
        <div className="tableContainer">
                 <table>
                 <thead>
                 <tr>
                         <th>Date:</th>
                         <th>Time:</th>
                         <th>Comment:</th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr>
                         <td>{shift.date}</td>
                         <td>{shift.time}</td>
                         <td>{shift.comment}</td>
                        
                     </tr>
                 </tbody>
                 </table>
                
             </div>
      ))
  
      return ( 
        <div>
            <div><Link to="/">Home</Link></div>
            <div>{filterPost}</div>
        </div>
      )}
  
   
   


    

      
  
      


    export default ProfilePage;
      
      