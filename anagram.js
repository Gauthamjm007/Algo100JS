function anagram(a, b) {
  return a.toLowerCase()
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("") ==
    b
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("")
    ? true
    : false;
}
console.log(anagram("boAt", "btoa"));
