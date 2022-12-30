function addInfo(main){
    const info = document.createElement('div');
    info.classList.add('info');
    info.textContent = "Jerusalem, AD 33";
    main.appendChild(info);
}

module.exports = {addInfo};