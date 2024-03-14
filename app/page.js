
import MeetupList from "@/components/meetups/MeetupList";
import Layout from "@/components/layout/Layout";

const DUMMY_MEETSUP =[
  {
    id:'m1',
    title:"Frist Meet Up",
    image:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
    address:"Address 542",
    description:"This is first meetup"
  },
  {
    id:'m2',
    title:"Second Meet Up",
    image:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
    address:"Address 555",
    description:"This is Second meetup"
  },
]

export default function Home() {
  return (
   
      <MeetupList meetups={DUMMY_MEETSUP}/>
   
    
  );
}
