interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

interface Meetable {
  attendMeeting(): void;
}

class Developer implements Workable, Eatable, Meetable {
  work(): void {
    console.log("Writing code");
  }

  eat(): void {
    console.log("Eating lunch");
  }

  attendMeeting(): void {
    console.log("Attending standup meeting");
  }
}

class Robot implements Workable {
  work(): void {
    console.log("Assembling parts");
  }
}
