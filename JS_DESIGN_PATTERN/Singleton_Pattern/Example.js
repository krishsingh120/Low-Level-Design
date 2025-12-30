
// async function connectToDB() {
//     try {
//         if (NODE_ENV === "development") {
//             await mongoose.connect(ATLAS_DB_URL);
//         }
//     } catch (error) {
//         console.log("Unable to connect to the DB server");
//         console.log(error);
//     }
// }

// Add singleton design pattern
let instance; // stores DB instance

class DBConnection {
  #isConnected;  // private variable
  constructor(db_uri) {
    if (instance) {
      throw new Error("Only one connection can exist");
    }

    this.uri = db_uri;
    instance = this;
    this.#isConnected = false;
  }

  async connect() {
    if (this.#isConnected) {
      throw new Error("Db already connected");
    }

    if (NODE_ENV === "development") {
      await mongoose.connect(ATLAS_DB_URL);
      this.#isConnected = true;
    }
  }

  async disconnect() {
    this.#isConnected = false;
  }
}

// only one instance create
const db = Object.freeze(new DBConnection());
// const db2 = Object.freeze(new DBConnection());

module.exports = db;
