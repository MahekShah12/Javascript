let name = prompt("Enter your full name:");
while (!name || name.trim().split(" ").length < 2) {
  name = prompt("Please enter your full name:");
}
alert("Welcome, " + name + "!");
console.log("Updated name: " + name);
document.getElementById("nameDisplay").innerHTML =
  "Hello, " + name + "! Welcome to the CSE Department.";
