function btn1() {
  let a = prompt("write the first number");
  let b = prompt("write the secend number");
  let number = a % b;

  if (number != 0) {
    alert("There is a remainder");
  } else alert("no reminder");
}
