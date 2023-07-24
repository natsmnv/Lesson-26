let RegExp = /\b\d{1,2}\.\d{1,2}\.\d{4}\b/;
let date = document.getElementById('birth');
let form = document.querySelector('form');
let error = document.getElementById('error');
let table = document.getElementById('table');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let arr = [];

    let fullName = document.getElementById('name').value;
    arr.push(fullName);

    let birth = document.getElementById('birth').value;

    if (RegExp.test(birth)) {
        arr.push(birth);
    } else {
        alert(`Incorrect date of the birth`);
        error.style.display = 'inline';
        return false;
    }

    let sex = document.getElementsByName('sex');
    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            arr.push(sex[i].value);
        }
    }

    let city = document.getElementById('city').value;
    arr.push(city);

    let address = document.getElementById('address').value;
    arr.push(address);

    let languages = document.querySelectorAll('input[name="languages"]:checked');
    let languagesChecked = [];
    languages.forEach(function(element) {
        languagesChecked.push(element.value);
    });
    arr.push(languagesChecked.join(', '));

    for (let i = 0; i < arr.length; i++) {
        let row = document.createElement('tr');

        for (let j = 0; j < 1; j++) {
            let cell = document.createElement('td');
            cell.textContent = arr[i];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    table.style.border = '1px solid black';
})