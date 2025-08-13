import { ROUTES } from '../routes/routeConstants';

/**
 * Navigation utility functions
 */

/**
 * Get the page title based on the current route
 * @param {string} pathname - Current pathname
 * @returns {string} Page title
 */
export const getPageTitle = (pathname) => {
    const titleMap = {
        [ROUTES.HOME]: 'FIVE Palm Jumeirah - Luxury Beach Hotel Dubai',
        [ROUTES.ABOUT]: 'About FIVE - Elevating Luxury, Redefining Entertainment',
        [ROUTES.CONTACT]: 'Contact FIVE Palm Jumeirah - Get in Touch',
        [ROUTES.ROOMS]: 'Luxury Rooms & Suites - FIVE Palm Jumeirah',
        [ROUTES.EVENTS]: 'Events & Entertainment - FIVE Palm Jumeirah',
        [ROUTES.DINE]: 'Dining & Restaurants - FIVE Palm Jumeirah',
        [ROUTES.RELAX]: 'Spa & Wellness - FIVE Palm Jumeirah',
        [ROUTES.MUSIC]: 'Music & Entertainment - FIVE Palm Jumeirah',
        [ROUTES.SHOP]: 'Shopping - FIVE Palm Jumeirah',
        [ROUTES.BOOKING]: 'Book Your Stay - FIVE Palm Jumeirah'
    };

    return titleMap[pathname] || 'FIVE Palm Jumeirah - Luxury Beach Hotel Dubai';
};

/**
 * Check if a route is active
 * @param {string} pathname - Current pathname
 * @param {string} route - Route to check
 * @returns {boolean} Is route active
 */
export const isActiveRoute = (pathname, route) => {
    if (route === ROUTES.HOME) {
        return pathname === ROUTES.HOME;
    }
    return pathname.startsWith(route);
};

/**
 * Get navigation link props for React Router
 * @param {string} to - Destination route
 * @param {object} options - Additional options
 * @returns {object} Link props
 */
export const getLinkProps = (to, options = {}) => {
    return {
        to,
        replace: options.replace || false,
        state: options.state || null,
        ...options
    };
};

/**
 * Generate breadcrumb data from pathname
 * @param {string} pathname - Current pathname
 * @returns {Array} Breadcrumb items
 */
export const getBreadcrumbs = (pathname) => {
    const paths = pathname.split('/').filter(Boolean);
    const breadcrumbs = [{ label: 'Home', path: ROUTES.HOME }];

    let currentPath = '';
    paths.forEach((path) => {
        currentPath += `/${path}`;
        const label = path.charAt(0).toUpperCase() + path.slice(1);
        breadcrumbs.push({ label, path: currentPath });
    });

    return breadcrumbs;
};
