const COLORS = ['red', 'green', 'blue', 'navy', 'hotpink', 'yellow', 'lawngreen', 'blueviolet'];

let previousIndex = -1;

const el = document.getElementById('click');

el.addEventListener('click', () => {
    let index;

    // ensure the new index is different from the previous index
    do {
        index = Math.floor(Math.random() * COLORS.length);
    } while (index === previousIndex);

    previousIndex = index;

    document.body.style.backgroundColor = COLORS[index];
});