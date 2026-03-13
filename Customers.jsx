import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Useparemeg from './Useparemeg';

export default function Customers() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) {
      setDetail(null);
      setError('');
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Request failed');
        return res.json();
      })
      .then((data) => {
        setDetail(data);
        setError('');
      })
      .catch(() => setError('Could not load customer details.'))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <h1 className='Customers-title'>Our Customers</h1>

      <div className="customer-page">
        <div className="customer-list-block">
          <Useparemeg />
        </div>

        <div className='customer-details'>
          {!id && <p>Select a customer to view details.</p>}
          {id && loading && <p>Loading details...</p>}
          {id && !loading && error && <p>{error}</p>}
          {id && !loading && detail && (
            <div className='customer-info'>
              <h2 className="details-title">Customer Details</h2>
              <div className='main-details'>
                <p><strong>Name:</strong> {detail.name}</p>
                <p><strong>Username:</strong> {detail.username}</p>
                <p><strong>Email:</strong> {detail.email}</p>
                <p><strong>Phone:</strong> {detail.phone}</p>
                <p><strong>Website:</strong> {detail.website}</p>
                <p><strong>Company Name:</strong> {detail.company?.name}</p>
                <p><strong>Address (Street):</strong> {detail.address?.street}</p>
                <p><strong>City:</strong> {detail.address?.city}</p>
                <p><strong>Zip Code:</strong> {detail.address?.zipcode}</p>
                <p><strong>Latitude / Longitude:</strong> {detail.address?.geo?.lat}, {detail.address?.geo?.lng}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
