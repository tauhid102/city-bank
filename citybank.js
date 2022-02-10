const usersData = [
  {
    name: "Mr Rashed",
    birthYear: 1999,
    currentYear: 2022,
    district: "Dhaka",
    postNo: 1200,
    priority: 2,
  },
  {
    name: "Mr Raju",
    birthYear: 1995,
    currentYear: 2022,
    district: "Rajshahi",
    postNo: 1211,
    priority: 1,
  },
];

function generateCardNumbers(numbersWithoutPaddingZeroes, serialNumber) {
  let generatedCardnumber = 0;
  if (serialNumber < 10) {
    generatedCardnumber =
      numbersWithoutPaddingZeroes.padEnd(15, "0") + serialNumber;
  } else if (serialNumber < 100) {
    generatedCardnumber =
      numbersWithoutPaddingZeroes.padEnd(14, "0") + serialNumber;
  } else if (serialNumber < 1000) {
    generatedCardnumber =
      numbersWithoutPaddingZeroes.padEnd(13, "0") + serialNumber;
  }
  return generatedCardnumber;
}
function giftType(generatedCardnumber) {
  const lastDigit = generatedCardnumber.slice(-1);
  if (parseInt(lastDigit) % 2 === 0) {
    return "R";
  } else {
    return "W";
  }
}
function generateCardAndGift(userData, index) {
  const { district, currentYear, birthYear, postNo, priority } = userData;
  let FirstTwoOfDistrict = district.slice(0, 2).toUpperCase();
  let lastTwoOfCurYear = currentYear.toString().slice(-2);
  let FirstTwoOfPost = postNo.toString().slice(0, 2);

  let numbersWithoutPaddingZeroes =
    FirstTwoOfDistrict + lastTwoOfCurYear + FirstTwoOfPost + birthYear;
  let cardNumber = generateCardNumbers(numbersWithoutPaddingZeroes, index);
  let gift = giftType(cardNumber);
  return {
    cardNumber,
    gift,
    priority,
  };
}
function cardDistribution(usersData) {
    const generatedData = [];
    usersData.forEach((userData, index) => {
      generatedData.push(generateCardAndGift(userData, index + 1));
    });
  
    return generatedData.sort((a, b) => a.priority - b.priority);
  }
  
  console.log(cardDistribution(usersData));
