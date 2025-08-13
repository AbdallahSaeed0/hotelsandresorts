// Route Constants - Centralized route paths
export const ROUTES = {
    HOME: '/',
    ABOUT: '/about',
    CONTACT: '/contact',
    ROOMS: '/rooms',
    EVENTS: '/events',
    DINE: '/dine',
    RELAX: '/relax',
    MUSIC: '/music',
    SHOP: '/shop',
    // Hotel specific routes
    PACHA: '/pacha',
    CULINARY: '/culinary',
    FEATURES: '/features',
    SUSTAINABILITY: '/sustainability',
    PRESS: '/press',
    // Booking/Reservations
    BOOKING: '/booking',
    RESERVATIONS: '/reservations',
    // User Account
    LOGIN: '/login',
    REGISTER: '/register',
    PROFILE: '/profile',
    // Legal
    PRIVACY: '/privacy',
    TERMS: '/terms',
    COOKIES: '/cookies',
    // 404
    NOT_FOUND: '*'
};

// Route Labels for Navigation
export const ROUTE_LABELS = {
    [ROUTES.HOME]: 'Home',
    [ROUTES.ABOUT]: 'About FIVE',
    [ROUTES.CONTACT]: 'Contact',
    [ROUTES.ROOMS]: 'Rooms',
    [ROUTES.EVENTS]: 'Events',
    [ROUTES.DINE]: 'Dine',
    [ROUTES.RELAX]: 'Relax',
    [ROUTES.MUSIC]: 'Music',
    [ROUTES.SHOP]: 'Shop',
    [ROUTES.BOOKING]: 'Book Now',
    [ROUTES.RESERVATIONS]: 'Reservations'
};

// Navigation Menu Items (Main Menu)
export const MAIN_NAV_ITEMS = [
    { path: ROUTES.ROOMS, label: ROUTE_LABELS[ROUTES.ROOMS] },
    { path: ROUTES.DINE, label: ROUTE_LABELS[ROUTES.DINE] },
    { path: ROUTES.EVENTS, label: ROUTE_LABELS[ROUTES.EVENTS] },
    { path: ROUTES.RELAX, label: ROUTE_LABELS[ROUTES.RELAX] },
    { path: ROUTES.MUSIC, label: ROUTE_LABELS[ROUTES.MUSIC] },
    { path: ROUTES.SHOP, label: ROUTE_LABELS[ROUTES.SHOP] }
];

// Footer Navigation Items
export const FOOTER_NAV_ITEMS = {
    column1: [
        { path: ROUTES.ABOUT, label: 'About FIVE' },
        { path: ROUTES.PRESS, label: 'In the Press' },
        { path: '/trade-partners', label: 'Trade Partners' },
        { path: '/awards', label: 'Awards' }
    ],
    column2: [
        { path: '/careers', label: 'Careers' },
        { path: '/culture', label: 'Culture' },
        { path: '/faqs', label: 'FAQs' }
    ],
    column3: [
        { path: ROUTES.CONTACT, label: 'Contact' },
        { path: ROUTES.TERMS, label: 'Terms & Conditions' },
        { path: ROUTES.COOKIES, label: 'Cookies' },
        { path: ROUTES.PRIVACY, label: 'Privacy Policy' },
        { path: '/sitemap', label: 'Sitemap' }
    ]
};
