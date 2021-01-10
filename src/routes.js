export const ROUTES = {
    HOME: { name: 'home', path: '/'},
    COURSES: { name: 'courses', path: '/courses'},
    PRODUCTS: { name: 'products', path: '/products'},
    KITS: { name: 'kits', path: '/products/kits'},
    FRAMES: { name: 'frames', path: '/products/frames'},
    SHIPPING: { name: 'shipping', path: '/shipping'},
    LOCAL_SHIPPING: { name: 'cdmx', path: '/shipping/cdmx'},
    NATIONAL_SHIPPING: { name: 'national', path: '/shipping/national'},
    CLUB: { name: 'club', path: '/club'},
    EVENTS: { name: 'events', path: '/events'},
    CONTACT: { name: 'contact', path: '/contact'},
    IGTV: { name: 'igtv', path: '/igtv'}
}

export const NAV_ITEMS = [
    { id: ROUTES.HOME.name },
    { id: ROUTES.PRODUCTS.name },
    { id: ROUTES.COURSES.name },
    { id: ROUTES.SHIPPING.name },
    { id: ROUTES.CLUB.name },
    { id: ROUTES.EVENTS.name },
    { id: ROUTES.IGTV.name },
    { id: ROUTES.CONTACT.name },
];
