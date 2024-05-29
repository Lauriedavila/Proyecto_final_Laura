

/*ALERTA MAYORÍA DE EDAD*/

const edadDelUsuario = parseInt(prompt("¿Cuál es tu edad?"));
if(edadDelUsuario >= 18){
    alert("Eres mayor de edad");
}else{
    alert("Eres menor de edad, por lo que entra bajo su responsabilidad");
}


/*ALERTA SALIR DEL SITIO */

window.addEventListener("beforeunload", (evento) => {
    if (true) {
        evento.preventDefault();
        evento.returnValue = "";
        return "";
    }
});




function añadirAlCarrito() {
    alert("El artículo se ha añadido al carrito");
}



document.addEventListener('DOMContentLoaded', () => {
    const cart = document.getElementById('cart');
    const cartItems = [];

    window.añadirAlCarrito = function(nombre, precio) {
        const producto = {
            nombre: nombre,
            precio: precio
        };

        cartItems.push(producto);
        actualizarCarrito();
    };

    function actualizarCarrito() {
        cart.innerHTML = '<h2>Carrito de Compras</h2>';

        if (cartItems.length === 0) {
            cart.innerHTML += '<p>Tu carrito está vacío.</p>';
        } else {
            const ul = document.createElement('ul');
            
            cartItems.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.nombre} - $${item.precio.toLocaleString('es-ES')}`;
                ul.appendChild(li);
            });

            cart.appendChild(ul);
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const cart = document.getElementById('cart');
    const cartItems = [];

    window.añadirAlCarrito = function(nombre, precio) {
        const producto = {
            nombre: nombre,
            precio: precio
        };

        cartItems.push(producto);
        actualizarCarrito();
    };

    function actualizarCarrito() {
        cart.innerHTML = '<h2>Carrito de Compras</h2>';

        if (cartItems.length === 0) {
            cart.innerHTML += '<p>Tu carrito está vacío.</p>';
        } else {
            const ul = document.createElement('ul');
            let total = 0;

            cartItems.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.nombre} - $${item.precio.toLocaleString('es-ES')}`;
                ul.appendChild(li);
                total += item.precio;
            });

            cart.appendChild(ul);

            const totalP = document.createElement('p');
            totalP.innerHTML = `<strong>Total: $${total.toLocaleString('es-ES')}</strong>`;
            cart.appendChild(totalP);
        }
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const cart = document.getElementById('cart');
    const cartItems = [];

    window.añadirAlCarrito = function(nombre, precio) {
        const producto = {
            nombre: nombre,
            precio: precio
        };

        cartItems.push(producto);
        actualizarCarrito();
    };

    window.comprar = function() {
        if (cartItems.length === 0) {
            alert("Tu carrito está vacío.");
        } else {
            alert("Gracias por tu compra!");
            // Aquí puedes agregar lógica para procesar el pedido
            cartItems.length = 0; // Vaciar el carrito
            actualizarCarrito();
        }
    };

    function actualizarCarrito() {
        cart.innerHTML = '<h2>Carrito de Compras</h2>';

        if (cartItems.length === 0) {
            cart.innerHTML += '<p>Tu carrito está vacío.</p>';
        } else {
            const ul = document.createElement('ul');
            let total = 0;

            cartItems.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.nombre} - $${item.precio.toLocaleString('es-ES')}`;
                ul.appendChild(li);
                total += item.precio;
            });

            cart.appendChild(ul);

            const totalP = document.createElement('p');
            totalP.innerHTML = `<strong>Total: $${total.toLocaleString('es-ES')}</strong>`;
            cart.appendChild(totalP);

            const comprarBtn = document.createElement('button');
            comprarBtn.id = 'comprar-btn';
            comprarBtn.textContent = 'Comprar';
            comprarBtn.onclick = comprar;
            cart.appendChild(comprarBtn);
        }
    }
});

