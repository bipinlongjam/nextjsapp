import { MongoClient } from "mongodb"
import Head from "next/head";
import { Fragment } from "react";

function MeetupDetails(props){
    return(
        <Fragment>
            <Head>
        <MeetupDetails image="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
            title="First Meet Up"
            address="Some address"
            description="The meet up description"
        />
        </Head>
        </Fragment>
        // <MeetupDetails image={props.meetupData.image}
        //     title={props.meetupData.title}
        //     address={props.meetupData.address}
        //     description={props.meetupData.description}
        // />
    )
}

export async function getStaticPaths(){
    const client = await MongoClient.connect(
        'mongodb+srv://bipinlongjam:bipin@cluster0.xpexigs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups')
    
    const meetups = await meetupsCollection.find({},{_id:1}).toArray();
    client.close();

    return{
        fallback:false,
        paths: meetups.map(meetup => ({params:{meetup:meetup._id.toString()}} ))
    }
}
export async function getStaticProps(context){

    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect(
        'mongodb+srv://bipinlongjam:bipin@cluster0.xpexigs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups')
    
   const selectedMeetup = meetupsCollection.findOne({_id: meetupId})
    client.close();
    return{
        props:{
            meetupData : selectedMeetup
        }
    }
}
export default MeetupDetails