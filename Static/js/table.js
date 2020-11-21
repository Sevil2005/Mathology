var table = document.querySelector(".table");
var listValue = [];
var i = 4;

function removeItem(item){
    var element = item.parentElement.parentElement;
    element.remove();
}

function updateItem(item){
    var element = item.parentElement.parentElement;
    var list = element.querySelectorAll("td");
    var icons = element.querySelectorAll("button");
    icons[0].remove();
    icons[1].remove();
    var icon1 = `<button onclick="confirmItem(this)"><i class="fa fa-check-circle"></i></button>`;
    var icon2 = `<button onclick="unconfirmItem(this)"><i class="fa fa-times-circle"></i></button>`;
    list[4].innerHTML = icon1 + icon2;
    var value1 = list[1].innerHTML;
    var value2 = list[2].innerHTML;
    var value3 = list[3].innerHTML;
    var input1 = document.createElement('input');
    var input2 = document.createElement('input');
    var input3 = document.createElement('input');
    input1.setAttribute("value", value1);
    input2.setAttribute("value", value2);
    input3.setAttribute("value", value3);
    list[1].innerHTML = "";
    list[2].innerHTML = "";
    list[3].innerHTML = "";
    list[1].appendChild(input1);
    list[2].appendChild(input2);
    list[3].appendChild(input3);
    listValue = [value1, value2, value3];
    return listValue;
}

function confirmItem(item){
    var element = item.parentElement.parentElement;
    var list1 = element.querySelectorAll("td");
    var list2 = element.querySelectorAll("input");
    inputValue1 = list2[0].value;
    inputValue2 = list2[1].value;
    inputValue3 = list2[2].value;
    list1[1].innerHTML = `${inputValue1}`;
    list1[2].innerHTML = `${inputValue2}`;
    list1[3].innerHTML = `${inputValue3}`;
    var icons = element.querySelectorAll("button");
    icons[0].remove();
    icons[1].remove();
    var icon1 = `<button onclick="updateItem(this)"><i class="fa fa-edit"></i></button>`;
    var icon2 = `<button onclick="removeItem(this)"><i class="fa fa-trash"></i></button>`;
    list1[4].innerHTML = icon1 + icon2;
}

function unconfirmItem(item){
    var element = item.parentElement.parentElement;
    var list1 = element.querySelectorAll("td");
    list1[1].innerHTML = `${listValue[0]}`;
    list1[2].innerHTML = `${listValue[1]}`;
    list1[3].innerHTML = `${listValue[2]}`;
    var icons = element.querySelectorAll("button");
    icons[0].remove();
    icons[1].remove();
    var icon1 = `<button onclick="updateItem(this)"><i class="fa fa-edit"></i></button>`;
    var icon2 = `<button onclick="removeItem(this)"><i class="fa fa-trash"></i></button>`;
    list1[4].innerHTML = icon1 + icon2;
}

function newRow(){
    newTr = document.createElement('tr');
    newInput = `
        <td>${i}</td>
        <td></td>
        <td></td>
        <td></td>
        <td>
            <button onclick="updateItem(this)"><i class="fa fa-edit"></i></button>
            <button onclick="removeItem(this)"><i class="fa fa-trash"></i></button>
        </td>`
    newTr.innerHTML = newInput;
    table.appendChild(newTr);
    i += 1;
}