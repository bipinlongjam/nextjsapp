"use client"
import MeetupList from "@/components/meetups/MeetupList";
import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";

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
  {
    id: 'm3', // New meetup id
    title: "Third Meet Up", // Title of the new meetup
    image: "https://example.com/image3.png", // Image URL of the new meetup
    address: "Address 567", // Address of the new meetup
    description: "This is the third meetup" // Description of the new meetup
  }
]

export default function Home(props) {
    const[loadedMeetups, setLoadedMeetups] = useState([])

    useEffect(()=>{
        setLoadedMeetups(DUMMY_MEETSUP)
    },[])

  return (
       <MeetupList meetups={loadedMeetups}/>
  );
}

  export async function getStaticPaths(){
    return{
      fallback: false,
      paths:[{
        params:{
          meetupId:'m1'
        }
      },
    {
      params:{
        meetupId:'m2',
      }
    }
    ]
    }
  }

  // export async function getServerSideProps(context){
  //       const req = context.req;
  //       const res = context.res;

  //       return{
  //         props:{
  //           meetups: DUMMY_MEETSUP
  //         }
  //       }
  // }

// export async function getStaticProps(){
//     //fetch data from an API
//     return{
//       props:{
//         meetups: DUMMY_MEETSUP
//       }
//     }

// }