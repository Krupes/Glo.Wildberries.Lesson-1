const search = function () {
    const input = document.querySelector('.search-block > input');
    const searchBtn = document.querySelector('.search-block > button');
    let inputValue;

    input.addEventListener('input', (event) => {
        inputValue = event.target.value;

    })

    searchBtn.addEventListener('click', () => {
        console.log(inputValue);
    })


}
search();