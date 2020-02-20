let input = document.querySelector('.input');
let keyDiv = document.querySelectorAll('.key');

let upCase = false;

function hasShift() {
    upCase = true;
    return upCase;
}

keyDiv.forEach((key, i) => {
    key.addEventListener('click', function() {
        if(this.innerHTML.toLowerCase() == 'shift') {
            if(hasShift()) {
                // console.log(this.innerHTML)
                this.classList.toggle('type');

                let shiftVal = input.value += input.value.toUpperCase();

                console.log(shiftVal);

                upCase = false;
            }
            console.log(upCase)
        }else if(this.innerHTML.toLowerCase() == 'backspace') {
            input.value = input.value.substr(0,input.value.length-1);
            this.classList.add('type')
            setTimeout(() => {
                this.classList.remove('type')
            },300)
        }else{
            input.value += this.innerHTML.toLowerCase();
            this.classList.add('type')
            setTimeout(() => {
                this.classList.remove('type')
            },300)
        }
    })
})

function keyPress(e) {
    let values = e.value;
    let val = values.slice(values.length-1);

    keyDiv.forEach((key, i) => {
        if(val.toLowerCase() == key.innerHTML.toLowerCase()) {
            key.classList.add('type')
            setTimeout(() => {
                key.classList.remove('type')
            }, 200)
        }
    })
}