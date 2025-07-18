function handleDropdown(menuId, navId) {
  const nav = document.getElementById(navId);
  const menu = document.getElementById(menuId);
  let timer;

  nav.addEventListener('mouseenter', () => {
    clearTimeout(timer);
    menu.style.display = 'flex';
  });
  nav.addEventListener('mouseleave', () => {
    timer = setTimeout(() => {
      menu.style.display = 'none';
    }, 200);
  });
  menu.addEventListener('mouseenter', () => {
    clearTimeout(timer);
  });
  menu.addEventListener('mouseleave', () => {
    menu.style.display = 'none';
  });

  nav.addEventListener('click', (e) => {
    e.preventDefault();
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });
}


handleDropdown('workBagsMenu', 'workBagsNav');
handleDropdown('travelBagsMenu', 'travelBagsNav');
handleDropdown('AccessoriesMenu', 'AccessoriesNav');