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





// function Cos(value) {

//     let x = Math.cos(value);
//     return x;
// }





// function Sqrt1(value) {
//     let a = Math.sqrt(value);
//     return a;
// }


// function Square(value) {
//     let pow = Math.pow(value, 2);
//     return pow;
// }













