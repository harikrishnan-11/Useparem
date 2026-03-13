import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Useparemeg() {
    const [user, setUser] = useState([]);


    useEffect(() => {
        setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUser(data))
        }, 2000);
    }, []); 
  return (
    <div>
   <h1 className='customers-name-tit'>Customer's name</h1>
    <div className='useparem'>
        <div className="customer-list">
      <ol >
        {user.map((user) => (
          <li key={user.id}>
            <Link to={`/Customers/${user.id}`}>
             {user.name}
            </Link> 
          </li>
        ))}
      </ol></div>
    </div></div>
  )
}
