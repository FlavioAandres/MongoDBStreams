# MongoDB - Change Stream Feature testing

Basically with this feature your're able to listen any changes to your database/collection. You can listen operations such as remove/update/replace/insert 

## To run the testings for yourself

1. Im using a MongoAtlas instance (the free one) and a collection called `publications` that contains documents like: 
    ```json
        {
            "_id" : ObjectId("5fcd16e2e1ec77148027351c"),
            "name" : "aut inventore quo dolore facilis excepturi perspiciatis",
            "ownerName" : "Sr. Ollie Delapaz",
            "type" : "TYPE_4",
            "tags" : [ 
                {
                    "_id" : ObjectId("5fcd16e2e1ec77148027351d"),
                    "name" : "et",
                    "color" : "0xD"
                }
            ],
            "content" : "lorem ipsum text,
            "__v" : 0
    }
    ```
1. Add a .env file located in the root folder with these environment vars: 

    ```
        MONGO_HOST=mongodb://Cluster0-shard-0-02.test.com,Cluster0-shard-0-03.test.com
        MONGO_PORT=27017
        MONGO_SSL=true
        MONGO_DATABASE=projects
        MONGO_USER=user
        MONGO_SECRET=password
        MONGO_SET="Cluster0-shard-0"
        MONGO_SRV=false
    ```


1. Run: 
    ```bash
        $ npm install 
        $ npm start 
    ```
1. To Update documents use in a new console:
    ```
        $ npm run start:update
    ```

