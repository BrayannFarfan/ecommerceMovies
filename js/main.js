const container_movies = document.getElementById('container_movies');
const modal = document.getElementById('modal');
const modal_cart = document.getElementById('modal_cart');
const cart_movie = document.getElementById('cart_movie');
const container_detail = document.getElementById('container_detail');
const container_cart =document.getElementById('container_cart');
const container_view = document.getElementById('container_view-cart')
const cart = []


function getMovie() {
    movies.forEach(item => {

        const { id, title , poster_path, overview, price} = item
        
        const content_movie = document.createElement('div')
        content_movie.classList.add('content_movie')
        content_movie.innerHTML = `
        <img class="image" src="${poster_path}" dataId="${id}">
        <p class="overview">${overview}</p>
        <div>
            <h1 class="title">${title}</h1>
            <div class="detail_content">
                <button class="btn_movies bx bx-cart" value="${id}">
                </button>
                <p>Price: ${price}</p>
            </div>
        </div>
        `
        container_movies.appendChild(content_movie)
    });

    const container_buttons = document.querySelectorAll('.btn_movies')
    container_buttons.forEach( item => {
        item.addEventListener('click', handleAddCart)
    })
    
    const itemMoive = document.querySelectorAll('.image')

    itemMoive.forEach(item =>{
        item.addEventListener('click', viewDateil)
    })
}

function handleAddCart(event){
    container_view.innerHTML = ''
    const movieId = event.target.value;
    const selectIdMovie = movies.find( item => item.id === parseInt(movieId))

    if(selectIdMovie){
        const movieInAlready = cart.find( item => item.id === selectIdMovie.id)

        if(movieInAlready){
            alert('error')
        }else{
            cart.push(selectIdMovie)
            cart_movie.innerText = cart.length
            renderCart(selectIdMovie)
            // TODO: agregar la funcion de confirmar el pedido por si o por no y evaluar condiciones
        }
    }else{
        console.log('error');
    }
}

getMovie()

function viewDateil(event){
    const movieIdDetail = event.target.getAttribute("dataId")
    const selectIdMovie = movies.find( item => item.id === parseInt(movieIdDetail))


    
    if(selectIdMovie){
        modal.style.display = 'block';
        container_detail.innerHTML = `
            <img src="${selectIdMovie.poster_path}">
            <div>
                <h1>${selectIdMovie.title}</h1>
                <p class="detail_overview">${selectIdMovie.overview}</p>
            </div>
        `
    }
}


container_cart.addEventListener('click', () =>{
    modal_cart.style.display = 'block'
});

function renderCart(movie){
    
    cart.forEach( item =>{
        const cart_movie = document.createElement('div')
        cart_movie.classList.add('card_cart')
        cart_movie.innerHTML = `
            <img src="${item.poster_path}">
            <div class="content_items">
                <h1>${item.title}</h1>
                <div>
                    <button class="btn_item-cart" value="${movie.id}">Borrar</button>
                </div>
            </div>
        `
        container_view.appendChild(cart_movie)
    })

  
}


