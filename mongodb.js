const mongoose = require("mongoose");
const {
  MONGO_HOST,
  MONGO_PORT,
  MONGO_SSL,
  MONGO_DATABASE,
  MONGO_USER,
  MONGO_SECRET,
  MONGO_SET,
  MONGO_SRV = false,
} = process.env;

let connection = null;

const connect = () => {
  if (!connection) {
    if (MONGO_SRV === true) {
      connection = mongoose.connect(MONGO_HOST, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } else {
      connection = mongoose.connect(MONGO_HOST, {
        port: MONGO_PORT,
        dbName: MONGO_DATABASE,
        ssl: !!MONGO_SSL,
        user: MONGO_USER,
        pass: MONGO_SECRET,
        replicaSet: MONGO_SET,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
    }

  }
  return connection
};

const destroy = () => {
  connection = null
  return mongoose.connection.close();
};

const isConnected = () => {
  return mongoose.isConnected();
};

module.exports = {
  connect,
  destroy,
  isConnected,
};
