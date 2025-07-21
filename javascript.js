// Handle dropdown logic for nav and menu elements
function handleDropdown(menuId, navId) {
  const nav = document.getElementById(navId);   // Navigation item (e.g., Work Bags)
  const menu = document.getElementById(menuId); // Corresponding dropdown menu
  let timer;

  // Show dropdown on nav hover
  nav.addEventListener('mouseenter', () => {
    clearTimeout(timer);        // Cancel any hiding timer
    menu.style.display = 'flex'; // Show the dropdown
  });

  // hide dropdown when leaving nav
  nav.addEventListener('mouseleave', () => {
    timer = setTimeout(() => {
      menu.style.display = 'none'; 
    }, 200);
  });

  //  if mouse enters the dropdown
  menu.addEventListener('mouseenter', () => {
    clearTimeout(timer);
  });

  // Hide dropdown when leaving the menu
  menu.addEventListener('mouseleave', () => {
    menu.style.display = 'none';
  });

  // Toggle dropdown on nav click
  nav.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
  });
}

// Initialize dropdowns for menu sections
handleDropdown('workBagsMenu', 'workBagsNav');
handleDropdown('travelBagsMenu', 'travelBagsNav');
handleDropdown('AccessoriesMenu', 'AccessoriesNav');

document.addEventListener('DOMContentLoaded', function () {
  // Create and append a tooltip element to body
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);

  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    const mainImg = card.querySelector('img');     // Main product image
    const heading = card.querySelector('h3');      // Product heading/title
    const altSrc = mainImg.getAttribute('data-alt-src'); // Hover alternate image
    const variants = card.querySelectorAll('.variants img'); // Thumbnail variants

    // Set first variant as active
    if (variants.length > 0) {
      const firstVariant = variants[0];
      firstVariant.classList.add("active");
    }

    // Save original main image src
    if (!mainImg.dataset.originalSrc) {
      mainImg.dataset.originalSrc = mainImg.src;
    }

    // Hover on card: change to alt image and add hover class to heading
    card.addEventListener('mouseenter', () => {
      if (!mainImg.dataset.locked && altSrc) {
        mainImg.src = altSrc;
      }
      heading.classList.add('hovered');
    });

    // Remove alt image and hover class on leave (if not locked)
    card.addEventListener('mouseleave', () => {
      if (!mainImg.dataset.locked) {
        mainImg.src = mainImg.dataset.originalSrc;
        heading.classList.remove('hovered');
      }
    });

    // Handle each variant thumbnail
    variants.forEach(thumb => {
      const labelText = thumb.getAttribute('data-label'); // Tooltip label

      // On thumbnail click: activate it and change main image
      thumb.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent parent click
        variants.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');

        mainImg.src = thumb.src;
        mainImg.dataset.locked = 'true'; // Lock the image to prevent hover swap
        heading.classList.add('hovered');
      });

      // Show tooltip on thumbnail hover
      thumb.addEventListener('mouseenter', () => {
        tooltip.textContent = labelText || '';
        tooltip.style.opacity = '1';

        const rect = thumb.getBoundingClientRect(); // Get position
        tooltip.style.top = (rect.top - 30 + window.scrollY) + 'px';
        tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
      });

      // Hide tooltip on mouse leave
      thumb.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
      });
    });
  });

  // Global click reset: resets product image/heading when clicking outside
  document.addEventListener('click', (e) => {
    document.querySelectorAll('.product-card').forEach(card => {
      if (!card.contains(e.target)) {
        const mainImg = card.querySelector('img');
        const heading = card.querySelector('h3');
        if (!mainImg.dataset.locked) {
          mainImg.src = mainImg.dataset.originalSrc;
          heading.classList.remove('hovered');
        }
      }
    });
  });
});

window.addEventListener("DOMContentLoaded", () => {
  // === Search Overlay Toggle ===
  const searchIcon = document.querySelector(".modal__toggle-open"); // Search icon button
  const closeIcon = document.getElementById("closeSearch");         // Close (X) icon
  const searchOverlay = document.getElementById("searchOverlay");   // Search overlay container
  const backdropOverlay = document.getElementById("backdropOverlay"); // Background overlay

  // Hide search overlay by default
  if (searchOverlay) searchOverlay.style.display = "none";
  backdropOverlay?.classList.remove("active");

  // Show overlay when clicking search icon
  searchIcon?.addEventListener("click", () => {
    searchOverlay.style.display = "flex";
    backdropOverlay?.classList.add("active");
  });

  // Close overlay when clicking close icon
  closeIcon?.addEventListener("click", () => {
    searchOverlay.style.display = "none";
    backdropOverlay?.classList.remove("active");
  });

  // === Cart Drawer Toggle ===
  const cartIconSvg = document.querySelector(".icon-cart-empty"); // Cart icon SVG
  cartIconSvg?.setAttribute("id", "cartIcon");                    // Set an ID for easy reference

  const cartToggle = document.getElementById("cartIcon");         // Cart toggle icon
  const cartDrawer = document.getElementById("cartDrawer");       // Drawer container
  const closeCart = document.getElementById("closeCart");         // Drawer close button
  const cartBackdrop = document.getElementById("cartBackdropOverlay"); // Drawer background overlay

  // Ensure cart is hidden initially
  cartDrawer?.classList.remove("open");
  cartBackdrop?.classList.remove("active");

  // Open cart drawer on icon click
  cartToggle?.addEventListener("click", () => {
    cartDrawer?.classList.add("open");
    cartBackdrop?.classList.add("active");
  });

  // Close cart drawer on close icon click
  closeCart?.addEventListener("click", () => {
    cartDrawer?.classList.remove("open");
    cartBackdrop?.classList.remove("active");
  });

  // Close cart drawer on backdrop click
  cartBackdrop?.addEventListener("click", () => {
    cartDrawer?.classList.remove("open");
    cartBackdrop?.classList.remove("active");
  });
});
