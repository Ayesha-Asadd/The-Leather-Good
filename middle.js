document.addEventListener('DOMContentLoaded', function () {
  // ✅ Create global tooltip element
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);

  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    const mainImg = card.querySelector('img');
    const heading = card.querySelector('h3');
    const altSrc = mainImg.getAttribute('data-alt-src');
    const variants = card.querySelectorAll('.variants img');

    // ✅ Set first variant active
    if (variants.length > 0) {
      const firstVariant = variants[0];
      firstVariant.classList.add("active");
    }

    // ✅ Save original image
    if (!mainImg.dataset.originalSrc) {
      mainImg.dataset.originalSrc = mainImg.src;
    }

    // ✅ Hover on card
    card.addEventListener('mouseenter', () => {
      if (!mainImg.dataset.locked && altSrc) {
        mainImg.src = altSrc;
      }
      heading.classList.add('hovered');
    });

    card.addEventListener('mouseleave', () => {
      if (!mainImg.dataset.locked) {
        mainImg.src = mainImg.dataset.originalSrc;
        heading.classList.remove('hovered');
      }
    });

    // ✅ Handle variants
    variants.forEach(thumb => {
      const labelText = thumb.getAttribute('data-label');

      // ✅ Click to select variant
      thumb.addEventListener('click', (e) => {
        e.stopPropagation();
        variants.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');

        mainImg.src = thumb.src;
        mainImg.dataset.locked = 'true';
        heading.classList.add('hovered');
      });

      // ✅ Show tooltip on hover
      thumb.addEventListener('mouseenter', () => {
        tooltip.textContent = labelText || '';
        tooltip.style.opacity = '1';

        const rect = thumb.getBoundingClientRect();
        tooltip.style.top = (rect.top - 30 + window.scrollY) + 'px';
        tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
      });

      // ✅ Hide tooltip on leave
      thumb.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
      });
    });
  });

  // ✅ Global reset (optional)
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

document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.parentElement;
    parent.classList.toggle('open');
  });
  const cartIconSvg = document.querySelector('.icon-cart-empty');
  cartIconSvg?.setAttribute("id", "cartIcon");

  const cartToggle = document.getElementById("cartIcon");
  const cartDrawer = document.getElementById("cartDrawer");
  const closeCart = document.getElementById("closeCart");
  const cartBackdrop = document.getElementById("cartBackdropOverlay");

  cartDrawer?.classList.remove("open");
  cartBackdrop?.classList.remove("active");

  cartToggle?.addEventListener("click", () => {
    console.log("🛒 Cart icon clicked");
    cartDrawer?.classList.add("open");
    cartBackdrop?.classList.add("active");
  });

  closeCart?.addEventListener("click", () => {
    cartDrawer?.classList.remove("open");
    cartBackdrop?.classList.remove("active");
  });

  cartBackdrop?.addEventListener("click", () => {
    cartDrawer?.classList.remove("open");
    cartBackdrop?.classList.remove("active");
  });
  
});