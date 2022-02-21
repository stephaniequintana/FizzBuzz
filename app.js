/**
 * !ofkif
 * ? this is blue
 * todo this is orange
 * *this is important
  */

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
fizzBuzz(answer);

function fizzBuzz(answer){
  let input = document.getElementById('answer');
  input.innerText = answer;
  let list = document.getElementById('list');
  // list.innerHTML = '';
  let ul = document.createElement('ul');
  for(let i = 1; i <= answer; i++){
    let value = (i % 3 == 0 && i % 5 == 0)? "FizzBuzz" :
                (i % 5 == 0)? "Buzz" :
                (i % 3 == 0)? "Fizz" : i;
    let li = document.createElement('li');
    li.innerText = `${i}: ${value}, ` ;
    ul.append(li);
    
    // console.log(`i is ${i} and value is ${value}`);
    // console.log("🚀 ~ file: app.js ~ line 16 ~ fizzBuzz ~ value", value)
  }
  list.append(ul);
}

