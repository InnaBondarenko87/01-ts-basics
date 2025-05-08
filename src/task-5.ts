type Status = "loading" | "success" | "error";

// let status: Status = "loading";

function logStatus(status: Status) {
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Success!");
  } else if (status === "error") {
    console.log("Something went wrong");
  }
}

logStatus("loading");
