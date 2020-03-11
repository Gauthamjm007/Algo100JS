function reverse(str) {
  if ((str == "")) {
    return "";
  }
  str = str.split(" ");
  str = str.map((ele, i) => {
    return i % 2 == 1
      ? ele
          .split("")
          .reverse()
          .join("")
      : ele;
  });
  return str.join(" ");
}

console.log(reverse("Reverse this string, please!"));
