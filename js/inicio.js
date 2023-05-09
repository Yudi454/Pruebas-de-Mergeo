(function () {
    const botones = document.querySelectorAll('.btn')/*Selecciona todas las clases con el nombre btn*/
    const storeItems = document.querySelectorAll('.productos-item')/*Selecciona todas las clases con el nombre productos-item seria el contenedor de las cards*/
    
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            e.preventDefault()
            const filter = e.target.dataset.filter

            storeItems.forEach((item) => {
                if (filter === 'all') {
                    item.style.display = 'block'
                }
                else {
                    if(item.classList.contains(filter)){item.style.display = 'block'}
                    else{item.style.display = 'none'}
                }
            })
        })
    })
})();
(function () {
    const searchBox = document.querySelector('#search-item')
    const storeItems = document.querySelectorAll('.productos-item')

    searchBox.addEventListener('keyup', (e) =>{
        
        const searchFilter = e.target.value.toLowerCase().trim()


        storeItems.forEach((item) =>{
            
            if (item.textContent.includes(searchFilter)){
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    })
})();