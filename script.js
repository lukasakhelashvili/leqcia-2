//task 1
function sum(...numbers) {
    let newSum = 0;

    for (let item of numbers) {
        if (item > 0) {

            newSum += item;
        }
    }
    console.log(newSum);
}

sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);


//task 2

function numbersSum(...x) {
    let numbers = 0;
    for (let item of x) {
      numbers += item;
    }
    return numbers;
  }
  
  let result = numbersSum(10, 50, 6, 7, 8, 11, 6, 3, 9);

  console.log(result);

  //task 3

  let user = {
    firstname: "giorgi",
    lastname: "saakadze",
    age: 32,
    isloggedin: true,
  };
  
  let name_lastname = (obj) => {
    if (write.isloggedin) {
      return write.firstname + " " + write.lastname;
    } else {
      return false;
    }
  };
  
  let obj = name_lastname(user);
  console.log(obj);


  //task 4

  function getMaxValue(numbers) {
      let maxValue = 0;

      for (let i = 0; i < numbers.length; i++) {
          let y = numbers[i];

          if (y > maxValue) {
              maxValue = y
          } 
          
      }
      return maxValue;
  }
  
  console.log(getMaxValue([3, 102, 25, 110, 36]));