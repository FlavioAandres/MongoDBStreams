require('dotenv').config()
const mongodb = require('./mongodb'); 
const ENABLE_DOC_LOG = false; 
let counter_per_sec = 0; 
(async ()=>{
    const client = await mongodb.connect()
    const collection = client.connection.db.collection('publications')
    const changeStream = collection.watch({ fullDocument: 'updateLookup' });
    changeStream.on('change', next => {
        counter_per_sec++
        const document = next.fullDocument
        if(ENABLE_DOC_LOG) console.log(document)
    });
})(); 

//Metrics :) 
setInterval(()=>{
    console.log('Count per sec ' + counter_per_sec); 
    counter_per_sec=0; 
}, 1000)

