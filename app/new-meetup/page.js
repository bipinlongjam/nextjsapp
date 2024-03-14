"use client"

import NewMeetupForm from '@/components/meetups/NewMeetupForm';
import { useRouter } from 'next/navigation';


export default function NewMeet() {
  const router = useRouter();

  async  function addMeetupHandler(enterMeetupData){
        const response = await fetch('/api/page',{
          method:'POST',
          body:JSON.stringify(enterMeetupData),
          headers:{
            'Content-Type':'application/json'
          }
        })
          const data = await response.json();
          router.push('/')
          console.log(data)
    }

  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  );
}
