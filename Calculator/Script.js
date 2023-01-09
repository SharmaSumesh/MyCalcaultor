var a = "";
var buttons  = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener("click",(e)=>{
        console.log(e.target.innerHTML);
        if(e.target.innerHTML=="=")
        {
            a = eval(a);
            document.querySelector('.input1').value = a;
        }
        else if(e.target.innerHTML=="CE")
        {
            a = "";
            document.querySelector('.input1').value = a;

        }
        else
        {
            a = a+e.target.innerHTML;
            document.querySelector('.input1').value = a;
        }
    })
})
