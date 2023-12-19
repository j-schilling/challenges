console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}
const userName = "Jane Doe";

function showWelcomeMessage(userName) {
  console.log("Welcome " + userName + "! You are logged in now.");
}

handleUserLogin(showWelcomeMessage);

handleUserLogin(() => {
  console.log("Welcome " + userName + "! You are logged in now.");
});
