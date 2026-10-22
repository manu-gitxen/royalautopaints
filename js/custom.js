/**
 * Royal Auto Paints Qatar — Custom JavaScript Interactivity
 * Features: Product filtering, smooth navigation, mobile menu auto-close, search routing.
 */

document.addEventListener('DOMContentLoaded', function () {
    // 1. Auto-close mobile navigation drawer on anchor click
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navCollapse = document.getElementById('templatemo_main_nav') || document.querySelector('.navbar-collapse');

    if (navCollapse) {
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                if (window.innerWidth < 992 && navCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navCollapse) || new bootstrap.Collapse(navCollapse, { toggle: false });
                    if (bsCollapse) {
                        bsCollapse.hide();
                    }
                }
            });
        });
    }

    // 2. Product Catalog Filtering
    const filterButtons = document.querySelectorAll('.product-filter-btn');
    const productItems = document.querySelectorAll('.product-item-col, .product-item-card');

    filterButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            // Update active state on buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            productItems.forEach(function (item) {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // 3. Search Filter in Modal
    const searchInput = document.getElementById('inputModalSearch');
    const searchBtn = document.getElementById('btnModalSearch');

    if (searchInput) {
        searchInput.addEventListener('keyup', function (e) {
            const query = this.value.toLowerCase().trim();
            if (e.key === 'Enter' || query.length > 2) {
                filterProductsBySearch(query);
            }
        });
    }

    function filterProductsBySearch(query) {
        if (!query) {
            if (productItems.length > 0) {
                productItems.forEach(item => item.style.display = 'block');
            }
            return;
        }

        // If on homepage, redirect to dedicated products.html catalog
        if (!window.location.pathname.includes('products.html')) {
            window.location.href = 'products.html?search=' + encodeURIComponent(query);
            return;
        }

        // Switch filter buttons to none active or all
        filterButtons.forEach(b => b.classList.remove('active'));

        let matchCount = 0;
        productItems.forEach(function (item) {
            const title = item.querySelector('.product-title')?.innerText.toLowerCase() || '';
            const desc = item.querySelector('.product-desc')?.innerText.toLowerCase() || '';
            const category = item.getAttribute('data-category') || '';

            if (title.includes(query) || desc.includes(query) || category.includes(query)) {
                item.style.display = 'block';
                matchCount++;
            } else {
                item.style.display = 'none';
            }
        });

        // Close search modal and scroll to products
        const searchModalEl = document.getElementById('templatemo_search');
        if (searchModalEl) {
            const searchModal = bootstrap.Modal.getInstance(searchModalEl);
            if (searchModal) {
                searchModal.hide();
            }
        }

        const productsSec = document.getElementById('products');
        if (productsSec) {
            productsSec.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
