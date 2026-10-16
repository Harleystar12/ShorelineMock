document.addEventListener('partialsLoaded', () => {

    const menuButton =
        document.querySelector('.mobile-nav');

    if (!menuButton) return;

    menuButton.addEventListener('click', () => {

        const expanded =
            menuButton.getAttribute('aria-expanded')
            === 'true';

        menuButton.setAttribute(
            'aria-expanded',
            String(!expanded)
        );        

        menuButton.closest('.nav-wrap')
            .classList.toggle(
                'menu-open',
                !expanded
            );
    });

    const currentPage =
    window.location.pathname.split('/').pop() || 'index';

    document
    .querySelectorAll('.nav-list a')
    .forEach(link => {

        let href = link.getAttribute('href');

        href = href.replace(".html", "");

        if (href === currentPage) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }

    });
});

