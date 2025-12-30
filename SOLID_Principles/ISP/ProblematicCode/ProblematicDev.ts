interface Worker {
  work(): void;
  eat(): void;
  attendMeeting(): void;
}

class Developer implements Worker {
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

class Robot implements Worker {
  work(): void {
    console.log("Assembling parts");
  }

  eat(): void {
    // ❌ Robot doesn't eat
    throw new Error("Robot does not eat");
  }

  attendMeeting(): void {
    // ❌ Robot doesn't attend meetings
    throw new Error("Robot does not attend meetings");
  }
}
