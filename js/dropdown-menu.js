document.addEventListener('DOMContentLoaded', function() {
    const dropdownTrigger = document.getElementById('dropdown-trigger');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const navItemLineContainer = document.querySelector('.nav-item-line-container');
    const navList = document.querySelector('.nav-list');

    // Check if elements exist
    if (!dropdownTrigger || !dropdownMenu || !navItemLineContainer || !navList) {
        console.error('Dropdown elements not found');
        return;
    }

    let isDropdownOpen = false;

    const toggleDropdown = () => {
        isDropdownOpen = !isDropdownOpen;
        
        if (isDropdownOpen) {
            dropdownMenu.classList.add('show');
            navItemLineContainer.classList.add('active');
            navList.classList.add('dropdown-open');
        } else {
            dropdownMenu.classList.remove('show');
            navItemLineContainer.classList.remove('active');
            navList.classList.remove('dropdown-open');
        }
    };

    // Toggle dropdown on click
    dropdownTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleDropdown();
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav') && !e.target.closest('.dropdown-menu')) {
            if (isDropdownOpen) {
                toggleDropdown();
            }
        }
    });

    // Close dropdown on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isDropdownOpen) {
            toggleDropdown();
        }
    });
});
