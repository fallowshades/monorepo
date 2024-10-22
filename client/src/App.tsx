import { useEffect, useState } from 'react';
import axios from 'axios';
import { Car } from '@monoscript/shared';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const App = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get<{ cars: Car[] }>('/api/cars');
        setCars(response.data.cars);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch cars');
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='container mx-auto px-4 py-8 md:px-12'>
      <h1 className='text-3xl font-bold mb-6'>Available Cars</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
        {cars.map((car) => (
          <Card key={car.id} className='shadow-lg'>
            <CardHeader>
              <CardTitle className='text-xl'>
                {car.year} {car.make} {car.model}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>
                <p>
                  <span className='font-semibold'>Color:</span> {car.color}
                </p>
                <p>
                  <span className='font-semibold'>Price:</span> $
                  {car.price.toLocaleString()}
                </p>
                <p>
                  <span className='font-semibold'>Mileage:</span>{' '}
                  {car.mileage.toLocaleString()} miles
                </p>
                <p>
                  <span className='font-semibold'>Fuel Type:</span>{' '}
                  {car.fuelType}
                </p>
                <p>
                  <span className='font-semibold'>Transmission:</span>{' '}
                  {car.transmission}
                </p>
                <p>
                  <span className='font-semibold'>VIN:</span> {car.vin}
                </p>
                <p>
                  <span className='font-semibold'>Availability:</span>{' '}
                  {car.isAvailable ? 'Available' : 'Not Available'}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default App;
