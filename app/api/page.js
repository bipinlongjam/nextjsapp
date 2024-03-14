import { MongoClient } from "mongodb";


 async function handler(req, res){
    if(req.method === 'POST'){
        const data = req.body;

        const {title, image, address, description} = data

        const client = await new MongoClient.connect('mongodb+srv://bipinlongjam:bipin@cluster0.xpexigs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        const db = client.db();

        const meetupsCollection = db.collection('meetups')
        const result = await meetupsCollection.insertOne(data);

        client.close();
        res.status(201).json({message:"meet up inserted"});
    }   
}
export default handler