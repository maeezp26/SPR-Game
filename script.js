let user = prompt("Enter S,P,R")
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S", "P", "R"][cpuI];

const match = (cpu, user) => {
  if (cpu === user) {
    return "Both are Same";
  }
  else if (cpu === "S" && user === "P") {
    return "cpu"
  }
  else if (cpu === "S" && user === "R") {
    return "user"
  }
  else if (cpu === "R" && user === "P") {
    return "user"
  }
  else if (cpu === "R" && user === "S") {
    return " cpu"
  }
  else if (cpu === "P" && user === "S") {
    return "user"
  }
  else if (cpu === "P" && user === "R") {
    return " cpu"
  }
  else if (cpu === "S" && user === "P") {
    return " cpu"
  }
  else if (cpu === "S" && user === "R") {
    return "user"
  }
}

let result = match(cpu, user)
document.write(`User:${user} <br> CPU:${cpu} <br> The Winner is ${result.toUpperCase()}`);
