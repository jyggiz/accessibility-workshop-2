const ACTIVE_CLASS = 'active';

function load() {
    // Get all mega menus
    let currentActiveItemIndex = -1;
    const megaMenuList = document.querySelectorAll('.megamenu-section');
    // Open submenus on button click

    megaMenuList.forEach((megaMenu, index) => {
        const currentMenuButton = megaMenu.querySelector('.megamenu-navitem');

        currentMenuButton.addEventListener('click', () => {
            megaMenu.classList.toggle(ACTIVE_CLASS);

            if (currentActiveItemIndex !== -1 && currentActiveItemIndex !== index) {
                megaMenuList[currentActiveItemIndex].classList.remove(ACTIVE_CLASS);
            }

            currentActiveItemIndex = currentActiveItemIndex === index
                ? -1
                : index;
        });
    });

    window.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape' || currentActiveItemIndex === -1) {
            return;
        };

        const activeMenu = megaMenuList[currentActiveItemIndex];
        const activeMenuButton = activeMenu.querySelector('.megamenu-navitem');

        console.log('Escape clicked');
        megaMenuList[currentActiveItemIndex].classList.remove(ACTIVE_CLASS);
        activeMenuButton.focus();
        currentActiveItemIndex = -1;
    });

    document.addEventListener('click', () => {})

    // Close submenu on Escape button if one is open

    // Close submenu if one is open on outside click
}

document.addEventListener('DOMContentLoaded', load)
