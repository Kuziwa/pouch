import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'Menu',
        isTitle: true
    },
    {
        id: 2,
        label: 'Dashboards',
        icon: 'bx-home-circle',
        badge: {
            variant: 'info',
            text: '03',
        },
        subItems: [
            {
                id: 3,
                label: 'Default',
                link: '/dashboard',
                parentId: 2
            },
            {
                id: 4,
                label: 'Saas',
                link: '/dashboards/saas',
                parentId: 2
            },
            {
                id: 5,
                label: 'Crypto',
                link: '/dashboards/crypto',
                parentId: 2
            },
        ]
    },
    {
        id: 6,
        isLayout: true
    },
    {
        id: 7,
        label: 'Apps',
        isTitle: true
    },
    {
        id: 8,
        label: 'Calendar',
        icon: 'bx-calendar',
        link: '/calendar',
    },
    {
        id: 9,
        label: 'Chat',
        icon: 'bx-chat',
        link: '/chat',
        badge: {
            variant: 'success',
            text: 'New',
        },
    },
    {
        id: 10,
        label: 'Ecommerce',
        icon: 'bx-store',
        subItems: [
            {
                id: 11,
                label: 'Products',
                link: '/ecommerce/products',
                parentId: 10
            },
            {
                id: 12,
                label: 'Product Detail',
                link: '/ecommerce/product-detail',
                parentId: 10
            },
            {
                id: 13,
                label: 'Orders',
                link: '/ecommerce/orders',
                parentId: 10
            },
            {
                id: 14,
                label: 'Customers',
                link: '/ecommerce/customers',
                parentId: 10
            },
            {
                id: 15,
                label: 'Cart',
                link: '/ecommerce/cart',
                parentId: 10
            },
            {
                id: 16,
                label: 'Checkout',
                link: '/ecommerce/checkout',
                parentId: 10
            },
            {
                id: 17,
                label: 'Shops',
                link: '/ecommerce/shops',
                parentId: 10
            },
            {
                id: 18,
                label: 'Add Product',
                link: '/ecommerce/add-product',
                parentId: 10
            },
        ]
    },
    {
        id: 19,
        label: 'Crypto',
        icon: 'bx-bitcoin',
        subItems: [
            {
                id: 20,
                label: 'Wallet',
                link: '/crypto/wallet',
                parentId: 19
            },
            {
                id: 21,
                label: 'Buy/Sell',
                link: '/crypto/buy-sell',
                parentId: 19
            },
            {
                id: 22,
                label: 'Exchange',
                link: '/crypto/exchange',
                parentId: 19
            },
            {
                id: 23,
                label: 'Lending',
                link: '/crypto/lending',
                parentId: 19
            },
            {
                id: 24,
                label: 'Orders',
                link: '/crypto/orders',
                parentId: 19
            },
            {
                id: 25,
                label: 'KYC Application',
                link: '/crypto/kyc-application',
                parentId: 19
            },
            {
                id: 26,
                label: 'ICO Landing',
                link: '/crypto-ico-landing',
                parentId: 19
            }
        ]
    },
    {
        id: 27,
        label: 'Email',
        icon: 'bx-envelope',
        subItems: [
            {
                id: 28,
                label: 'Inbox',
                link: '/email/inbox',
                parentId: 27
            },
            {
                id: 29,
                label: 'Read Email',
                link: '/email/read',
                parentId: 27
            }
        ]
    },
    {
        id: 30,
        label: 'Invoices',
        icon: 'bx-receipt',
        subItems: [
            {
                id: 31,
                label: 'Invoice List',
                link: '/invoices/list',
                parentId: 30
            },
            {
                id: 32,
                label: 'Invoice Detail',
                link: '/invoices/detail',
                parentId: 30
            },
        ]
    },
    {
        id: 33,
        label: 'Projects',
        icon: 'bx-briefcase-alt-2',
        subItems: [
            {
                id: 34,
                label: 'Projects Grid',
                link: '/projects/grid',
                parentId: 33
            },
            {
                id: 35,
                label: 'Projects List',
                link: '/projects/list',
                parentId: 33
            },
            {
                id: 36,
                label: 'Project Overview',
                link: '/projects/overview',
                parentId: 33
            },
            {
                id: 37,
                label: 'Create New',
                link: '/projects/create',
                parentId: 33
            }
        ]
    },
    {
        id: 38,
        label: 'Tasks',
        icon: 'bx-task',
        subItems: [
            {
                id: 39,
                label: 'Task List',
                link: '/tasks/list',
                parentId: 38
            },
            {
                id: 40,
                label: 'Kanban Board',
                link: '/tasks/kanban',
                parentId: 38
            },
            {
                id: 41,
                label: 'Create Task',
                link: '/tasks/create',
                parentId: 38
            }
        ]
    },
    {
        id: 42,
        label: 'Contacts',
        icon: 'bxs-user-detail',
        subItems: [
            {
                id: 43,
                label: 'User Grid',
                link: '/contacts/grid',
                parentId: 42
            },
            {
                id: 44,
                label: 'User List',
                link: '/contacts/list',
                parentId: 42
            },
            {
                id: 45,
                label: 'Profile',
                link: '/contacts/profile',
                parentId: 42
            }
        ]
    },
    {
        id: 46,
        label: 'Pages',
        isTitle: true
    },
    {
        id: 47,
        label: 'Authentication',
        icon: 'bx-user-circle',
        subItems: [
            {
                id: 48,
                label: 'Login',
                link: '/pages/login-1',
                parentId: 47
            },
            {
                id: 49,
                label: 'Register',
                link: '/pages/register-1',
                parentId: 47
            },
            {
                id: 50,
                label: 'Recover Password',
                link: '/pages/recoverpwd-1',
                parentId: 47
            },
            {
                id: 51,
                label: 'Lock Screen',
                link: '/pages/lock-screen-1',
                parentId: 47
            }
        ]
    },
    {
        id: 52,
        label: 'Utility',
        icon: 'bx-file',
        subItems: [
            {
                id: 53,
                label: 'Starter Page',
                link: '/pages/starter',
                parentId: 52
            },
            {
                id: 54,
                label: 'Maintenance',
                link: '/pages/maintenance',
                parentId: 52
            },
            {
                id: 55,
                label: 'Timeline',
                link: '/pages/timeline',
                parentId: 52
            },
            {
                id: 56,
                label: 'FAQs',
                link: '/pages/faqs',
                parentId: 52
            },
            {
                id: 57,
                label: 'Pricing',
                link: '/pages/pricing',
                parentId: 52
            },
            {
                id: 58,
                label: 'Error 404',
                link: '/pages/404',
                parentId: 52
            },
            {
                id: 59,
                label: 'Error 500',
                link: '/pages/500',
                parentId: 52
            },
        ]
    },
    {
        id: 60,
        label: 'Components',
        isTitle: true
    },
    {
        id: 61,
        label: 'UI Elements',
        icon: 'bx-tone',
        subItems: [
            {
                id: 62,
                label: 'Alerts',
                link: '/ui/alerts',
                parentId: 61
            },
            {
                id: 63,
                label: 'Buttons',
                link: '/ui/buttons',
                parentId: 61
            },
            {
                id: 64,
                label: 'Cards',
                link: '/ui/cards',
                parentId: 61
            },
            {
                id: 65,
                label: 'Carousel',
                link: '/ui/carousel',
                parentId: 61
            },
            {
                id: 66,
                label: 'Dropdowns',
                link: '/ui/dropdowns',
                parentId: 61
            },
            {
                id: 67,
                label: 'Grid',
                link: '/ui/grid',
                parentId: 61
            },
            {
                id: 68,
                label: 'Images',
                link: '/ui/images',
                parentId: 61
            },
            {
                id: 69,
                label: 'Modals',
                link: '/ui/modals',
                parentId: 61
            },
            {
                id: 70,
                label: 'Range Slider',
                link: '/ui/rangeslider',
                parentId: 61
            },
            {
                id: 71,
                label: 'Progress Bars',
                link: '/ui/progressbar',
                parentId: 61
            },
            {
                id: 72,
                label: 'Sweet-Alert',
                link: '/ui/sweet-alert',
                parentId: 61
            },
            {
                id: 73,
                label: 'Tabs & Accordions',
                link: '/ui/tabs-accordions',
                parentId: 61
            },
            {
                id: 74,
                label: 'Typography',
                link: '/ui/typography',
                parentId: 61
            },
            {
                id: 75,
                label: 'Video',
                link: '/ui/video',
                parentId: 61
            },
            {
                id: 76,
                label: 'General',
                link: '/ui/general',
                parentId: 61
            },
            {
                id: 77,
                label: 'Colors',
                link: '/ui/colors',
                parentId: 61
            },
            {
                id: 78,
                label: 'Image Cropper',
                link: '/ui/image-crop',
                parentId: 61
            },
        ]
    },
    {
        id: 79,
        label: 'Forms',
        icon: 'bxs-eraser',
        subItems: [
            {
                id: 80,
                label: 'Form Elements',
                link: '/form/elements',
                parentId: 79
            },
            {
                id: 81,
                label: 'Form Validation',
                link: '/form/validation',
                parentId: 79
            },
            {
                id: 82,
                label: 'Form Advanced',
                link: '/form/advanced',
                parentId: 79
            },
            {
                id: 83,
                label: 'Form Editors',
                link: '/form/editor',
                parentId: 79
            },
            {
                id: 84,
                label: 'Form File Upload',
                link: '/form/uploads',
                parentId: 79
            },
            {
                id: 85,
                label: 'Form Repeater',
                link: '/form/repeater',
                parentId: 79
            },
            {
                id: 86,
                label: 'Form Wizard',
                link: '/form/wizard',
                parentId: 79
            },
            {
                id: 87,
                label: 'Form Mask',
                link: '/form/mask',
                parentId: 79
            }
        ]
    },
    {
        id: 88,
        icon: 'bx-list-ul',
        label: 'Tables',
        subItems: [
            {
                id: 89,
                label: 'Basic Tables',
                link: '/tables/basic',
                parentId: 88
            },
            {
                id: 90,
                label: 'Administration',
                link: '/tables/advanced',
                parentId: 88
            }
        ]
    },
    {
        id: 91,
        icon: 'bxs-bar-chart-alt-2',
        label: 'Charts',
        subItems: [
            {
                id: 92,
                label: 'Apex charts',
                link: '/charts/apex',
                parentId: 91
            },
            {
                id: 93,
                label: 'Chartjs Chart',
                link: '/charts/chartjs',
                parentId: 91
            },
            {
                id: 94,
                label: 'Chartist Chart',
                link: '/charts/chartist',
                parentId: 91
            },
            {
                id: 95,
                label: 'E - Chart',
                link: '/charts/echart',
                parentId: 91
            }
        ]
    },
    {
        id: 96,
        label: 'Icons',
        icon: 'bx-aperture',
        subItems: [
            {
                id: 97,
                label: 'Boxicons',
                link: '/icons/boxicons',
                parentId: 96
            },
            {
                id: 98,
                label: 'Material Design',
                link: '/icons/materialdesign',
                parentId: 96
            },
            {
                id: 99,
                label: 'Dripicons',
                link: '/icons/dripicons',
                parentId: 96
            },
            {
                id: 100,
                label: 'Font awesome',
                link: '/icons/fontawesome',
                parentId: 96
            },
        ]
    },
    {
        id: 101,
        label: 'Maps',
        icon: 'bx-map',
        subItems: [
            {
                id: 102,
                label: 'Google Maps',
                link: '/maps/google',
                parentId: 101
            }
        ]
    },
    {
        id: 103,
        label: 'Multi Level',
        icon: 'bx-share-alt',
        subItems: [
            {
                id: 104,
                label: 'Level 1.1',
                link: 'javascript: void(0);',
                parentId: 103
            },
            {
                id: 105,
                label: 'Level 1.2',
                parentId: 103,
                subItems: [
                    {
                        id: 106,
                        label: 'Level 2.1',
                        link: 'javascript: void(0);',
                        parentId: 105,
                    },
                    {
                        id: 107,
                        label: 'Level 2.2',
                        link: 'javascript: void(0);',
                        parentId: 105,
                    }
                ]
            },
        ]
    }
];

