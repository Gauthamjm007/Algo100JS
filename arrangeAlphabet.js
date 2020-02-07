function titleCase(title, minorWords) {
  title = title.split(" ");
  minorWords = minorWords.toLowerCase().split(" ");
  let result = "";
  title.forEach((ele) => {
    result += minorWords.includes(ele)
      ? " " + ele
      : " " + ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase();
  });
  result = result.slice(1);
  result.trim();

  return result;
}
console.log(titleCase("a clash of KINGS", "a an the of"));
console.log(titleCase("THE WIND IN THE WILLOWS", "The In"));
