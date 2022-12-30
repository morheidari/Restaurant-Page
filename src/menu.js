function addMenu(main){
    const menu = document.createElement('div');
    menu.classList.add('menu');
    const item1 = document.createElement('div');
    const item2 = document.createElement('div');
    item1.classList.add("item");
    item2.classList.add("item");
    item1.textContent = "Bread";
    item2.textContent = "Vine";
    menu.appendChild(item1);
    menu.appendChild(item2);
    main.appendChild(menu);
}

module.exports = {addMenu};