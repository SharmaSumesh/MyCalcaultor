var a = "";
var buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target.innerHTML);
        if (e.target.innerHTML == "=") {
            a = eval(a);
            document.querySelector('.input1').value = a;
        }
        else if (e.target.innerHTML == "CE") {
            a = "";
            document.querySelector('.input1').value = a;
        }
        else if (e.target.innerHTML == "Sin") {
            a = Math.sin(a);
            document.querySelector('.input1').value = a;
        }
        else if (e.target.innerHTML == "cos") {
            a = Math.cos(a);
            document.querySelector('.input1').value = a;

        }
        else if (e.target.innerHTML == "(√)") {
            a = Math.sqrt(a);
            document.querySelector('.input1').value = a;
        } else if (e.target.innerHTML == "π") {
            let pi = Math.PI;
            a = pi.toFixed(2);
            document.querySelector('.input1').value = a;

        } else if (e.target.innerHTML == "tan") {
            a = Math.tan(a * Math.PI / 180);
            document.querySelector('.input1').value = a;

        } else if (e.target.innerHTML == "Exp") {
            a = Math.exp(a);
            document.querySelector('.input1').value = a;

        } else if (e.target.innerHTML == "X!") {
            a = factorial(a);
            document.querySelector('.input1').value = a;

        } else if (e.target.innerHTML == "log") {
            let log = Math.log(a) / Math.log(a);
            a = log;
            document.querySelector('.input1').value = a;
        } else if (e.target.innerHTML == "e") {
            let e = 2.71;
            a = a * e;
            document.querySelector('.input1').value = a;

        } else if (e.target.innerHTML == "RAD") {
            a = degrees_to_radians(a);
            document.querySelector('.input1').value = a;

        }
        else if(e.target.innerHTML == "Deg"){

            a = radians_to_degrees(a)
            document.querySelector('.input1').value = a;


        }
        else if (e.target.innerHTML == "Xpowy") {

            let b = Math.pow(a, 2)

            a = b
            document.querySelector('.input1').value = a;

        }
        else {
            a = a + e.target.innerHTML;
            document.querySelector('.input1').value = a;
        }
    })
})

function factorial(n) {
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    }
    else if (n > 1) {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
    else {
        return "number has to be positive."
    }
}

// for radians

function degrees_to_radians(degrees) {
    var pi = Math.PI;
    return degrees * (pi / 180);
}



// for degree

function radians_to_degrees(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
}






// function Sqrt1(value) {
//     let a = Math.sqrt(value);
//     return a;
// }


// function Square(value) {
//     let pow = Math.pow(value, 2);
//     return pow;
// }
