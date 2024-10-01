const removeAppend = async (filename, id) => {
    const response = await fetch(filename);
    const data = await response.text();
    const cdiv = document.getElementById(id);
    cdiv.insertAdjacentHTML('afterend', data);
    cdiv.remove();
};

const updateColor = () => {
    const currentPage = window.location.pathname.split('/').pop().slice(0, -5);
    const currentItem = document.getElementById(`h-li-${currentPage}`);
    currentItem.style.color = "purple";
};

(async () => {
    await removeAppend('/header.html', 'header');
    updateColor();
})();

removeAppend('/footer.html', 'footer');

const toggleDropdown = () => {
    const dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = "none";
        }
    }
}
