class UserMongoDbDataFetcher {
  getUser(id: string): User {
    console.log("Fetching user from MongoDB");
    return { id, name: "Mongo User" };
  }

  getAllUsers(): User[] {
    console.log("Fetching all users from MongoDB");
    return [];
  }
}

class UserCassandraDataFetcher {
  fetchUser(id: string): User {
    console.log("Fetching user from Cassandra");
    return { id, name: "Cassandra User" };
  }

  fetchAllUsers(): User[] {
    console.log("Fetching all users from Cassandra");
    return [];
  }
}

class UserService {
  private mongoFetcher = new UserMongoDbDataFetcher();
  private cassandraFetcher = new UserCassandraDataFetcher();

  execute(useMongo: boolean) {
    if (useMongo) {
      // ❌ different method names
      this.mongoFetcher.getAllUsers();
    } else {
      this.cassandraFetcher.fetchAllUsers();
    }
  }
}
