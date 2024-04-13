const categoriesItem = document.querySelectorAll(".item");
console.log('Number of categories:', categoriesItem.length);

categoriesItem.forEach(item => {
    const itemName = item.querySelector('h2').textContent;
    const countElements = item.querySelectorAll('ul > li')

    console.log('Category:', itemName);
    console.log('Elements:', countElements.length);
});
