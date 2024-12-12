const input = document.getElementById('input');

function clearAll() {
    input.value = '';
}

function clearOne() {
    input.value = input.value.slice(0, -1);
}

function appendtoDisplay(value) {
    input.value += value;
}

function Result() {
    input;
    try {
        input.value = eval(input.value);
    }catch (error){
        input.value = 'Error'
    }
}