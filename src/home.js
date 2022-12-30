function addMainHome(main){
    const about = document.createElement("div");
    about.classList.add('about');
    about.textContent = "This is the last supper and we have bread and vine, welcome!";
    main.appendChild(about);
}

module.exports = { addMainHome };