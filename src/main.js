const removeAppend = async (filename, id) => {
    const response = await fetch(filename);
    const data = await response.text();
    const cdiv = document.getElementById(id);
    cdiv.insertAdjacentHTML('afterend', data);
    cdiv.remove();
};

const updateColor = () => {
    const currentPage = window.location.pathname.split('/').pop().slice(0, -5);
    console.log(currentPage);
    const currentItem = document.getElementById(`h-li-${currentPage}`);
    currentItem.style.color = "purple";
    console.log(currentItem);
    // if (currentItem) currentItem.remove(); // removeFromHeader
};

(async () => {
    await removeAppend('/header.html', 'header');
    updateColor();
})();

removeAppend('/footer.html', 'footer');

