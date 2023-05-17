'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [currDate, setCurrDate] = useState(new Date());
  const year = currDate.getFullYear();
  const [stateYear, setStateYear] = useState(year);
  const [countDown, setCountDown] = useState(
    new Date(`${year}-05-20 00:00:00`)
  );

  const [showCountDown, setShowCountDown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const birthdayCountDown = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setShowCountDown({
        days,
        hours,
        minutes,
        seconds,
      });

      if (distance <= 0) {
        setIsTimeUp(true);
      }
    }, 1000);

    // const tempDate = new Date(`2023-05-17 23:45:00`);

    // tempDate.setDate(tempDate.getDate() + 1);
    // if (tempDate.getDate() <= new Date().getDate()) {
    //   setIsTimeUp(false);
    //   currDate.setFullYear(currDate.getFullYear() + 1);
    //   setStateYear(currDate.getFullYear());
    // }

    // tempDate.setMinutes(tempDate.getMinutes() + 1);
    // if (tempDate.getMinutes() <= new Date().getMinutes()) {
    //   setIsTimeUp(false);
    //   currDate.setFullYear(currDate.getFullYear() + 1);
    //   setStateYear(currDate.getFullYear());
    // }

    return () => {
      clearInterval(birthdayCountDown);
    };
  }, [currDate, countDown]);

  const { days, hours, minutes, seconds } = showCountDown;

  return (
    <main className='container mx-auto p-5 flex justify-center'>
      <div className='mt-20 text-center items-center'>
        <div>
          <h1>-1</h1>
        </div>

        {isTimeUp ? (
          <Image
            src={'https://i.redd.it/9qr6aiu0plq41.jpg'}
            width={450}
            height={1000}
            alt='happy birthday to me'
            className='mt-20 rounded-md'
            priority
          />
        ) : (
          <div className='border-2 border-black border-solid rounded-md mt-20 p-20'>
            <h1>{`${days}d ${hours}h ${minutes}m ${seconds}s`}</h1>
          </div>
        )}
      </div>
    </main>
  );
}
