class Item {
    constructor(name, id) {
        this.name = name;
        this.checked = false;
        this.id = id;
    }

    display() {
        if (this.checked)
            return "<div class='item'>Done&nbsp;&nbsp;<label class='checked'>" + this.name + "</label>&nbsp;&nbsp;<input type='submit' value='Delete' onclick='deleteItem(" + this.id + ")'></div>";
        return "<div class='item'><input type='checkbox' onclick='checkOffItem(" + this.id + ")'>&nbsp;&nbsp;" + this.name + "&nbsp;&nbsp;<input type='submit' value='Delete' onclick='deleteItem(" + this.id + ")'></div>";
    }

    checkItem() {
        this.checked = true;
    }

    getId() {
        return this.id;
    }
}

list = [];
idGen = 0;

function addItem(form) {
    var item = new Item(form.item.value, idGen++);
    list.push(item);
	form.item.value = "";
    displayItems();

    return false;
}

function deleteItem(id) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].getId() == id) {
            list.splice(i, 1);
            break;
        }
    }
    displayItems();
}

function checkOffItem(id) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].getId() == id) {
            list[i].checkItem();
        }
    }
    displayItems();
}

function displayItems(form) {
    var elm = document.getElementById("items");
    elm.innerHTML = "";

    for (var i = 0; i < list.length; i++) {
        elm.innerHTML += list[i].display();
    }

}