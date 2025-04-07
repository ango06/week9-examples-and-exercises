// simple Promise example

let doHomework = (isHomeworkDone) => {
    return new Promise((resolve, reject) => {
      if (isHomeworkDone) {
        resolve("Great job! You can watch TV.");
      } else {
        reject("No TV until you finish your homework!");
      }
    });
  };
  
doHomework(true)
    .then((message) => {
      console.log("SUCCESS:", message);
    })
    .catch((error) => {
      console.error("ERROR:", error);
    });
  
    