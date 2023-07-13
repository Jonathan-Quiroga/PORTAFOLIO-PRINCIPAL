// Obtén todos los elementos de menú
const menuItems = document.querySelectorAll('.menu-item');

// Función para cambiar de color el elemento de menú activo
function setActiveMenuItem() {
  // Obtén la posición de desplazamiento vertical de la página
  const scrollPosition = window.scrollY;

  // Itera sobre todos los elementos de menú
  menuItems.forEach((menuItem) => {
    // Obtén el destino del enlace
    const target = menuItem.getAttribute('href');

    // Obtén el elemento de destino en la página
    const targetElement = document.querySelector(target);

    // Verifica si el elemento de destino está en la ventana visible
    if (
      targetElement.offsetTop <= scrollPosition &&
      targetElement.offsetTop + targetElement.offsetHeight > scrollPosition
    ) {
      // Agrega una clase CSS al elemento de menú activo
      menuItem.classList.add('active');
    } else {
      // Elimina la clase CSS del elemento de menú no activo
      menuItem.classList.remove('active');
    }
  });
}

// Escucha el evento de desplazamiento de la página
window.addEventListener('scroll', setActiveMenuItem);


