require('dotenv').config()
const mongodb = require('./mongodb'); 
const MAX_TIMES_TO_UPDATE = 1000; 
const BATCH_OF_UPDATES = 30;


(async ()=>{
    const client = await mongodb.connect()
    const collection = client.connection.db.collection('publications')
    let skip = 0
    for (const iterator of Array.from({ length: MAX_TIMES_TO_UPDATE })) {
        const data = await collection.find({ type: "TYPE_4" }, {_id: 1, }).skip(skip).limit(BATCH_OF_UPDATES).toArray(); 
        const ids = data.map(item=>item._id)
        
        await collection.updateMany({
            _id: {$in: ids}
        }, { $set: {type: "TYPE_2"} })
        
        skip+= BATCH_OF_UPDATES; 
        console.log('Batch ' + skip + 'done')
    }
})()