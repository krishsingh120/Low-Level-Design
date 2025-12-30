interface UserDataFetcher {
  getUser(id: string): User;
  getAllUsers(): User[];
}

class UserMongoDbDataFetcher implements UserDataFetcher {
  getUser(id: string): User {
    console.log("Fetching user from MongoDB");
    return { id, name: "Mongo User" };
  }

  getAllUsers(): User[] {
    console.log("Fetching all users from MongoDB");
    return [];
  }
}

class UserCassandraDataFetcher implements UserDataFetcher {
  getUser(id: string): User {
    console.log("Fetching user from Cassandra");
    return { id, name: "Cassandra User" };
  }

  getAllUsers(): User[] {
    console.log("Fetching all users from Cassandra");
    return [];
  }
}

class UserService {
  constructor(private userDataFetcher: UserDataFetcher) {}

  execute() {
    this.userDataFetcher.getAllUsers();
  }
}

new UserService(new UserMongoDbDataFetcher()).execute();
new UserService(new UserCassandraDataFetcher()).execute();
