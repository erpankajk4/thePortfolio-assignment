export function numberToWords(number) {
  const singleDigits = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  if (number < 10) {
    return singleDigits[number];
  } else if (number < 20) {
    return teens[number - 10];
  } else if (number < 100) {
    const tenDigit = Math.floor(number / 10);
    const unitDigit = number % 10;
    return (
      tens[tenDigit] + (unitDigit !== 0 ? "-" + singleDigits[unitDigit] : "")
    );
  } else if (number < 1000) {
    const hundredDigit = Math.floor(number / 100);
    const remaining = number % 100;
    return (
      singleDigits[hundredDigit] +
      " hundred" +
      (remaining !== 0 ? " and " + numberToWords(remaining) : "")
    );
  } else {
    return "Number is too large for this simple converter";
  }
}
