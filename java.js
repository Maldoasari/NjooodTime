const Button = document.getElementById('Button');

const P = document.getElementById('Text1');
const body = document.getElementById('Body');


Button.addEventListener('click',() =>{
    let Input1 = document.getElementById('Input1').value;
    let Input2 = document.getElementById('Input2').value;
    let Input3 = document.getElementById('Input3').value;
    let Input4 = document.getElementById('Input4').value;
    let P = document.getElementById('Text1');
    const name = document.getElementById('Name');
    if(!Input1, !Input2, !Input3, !Input4){
        alert('There are some empty values')
    } else {
body.style.backgroundImage = "url('tenor.gif')";
 name.textContent = 'Smile'+ ' ' +Input1;
    }
        

    


})