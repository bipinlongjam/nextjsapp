"use client"

import NewMeetupForm from '@/components/meetups/NewMeetupForm';


export default function NewMeet() {
    function addMeetupHandler(enterMeetupData){
        console.log(enterMeetupData)
    }

  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  );
}
