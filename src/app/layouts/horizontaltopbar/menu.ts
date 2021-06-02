import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'PouchFile Scanning',
        icon: 'bx-home-circle',
        subItems: [
            {
                id: 3,
                label: 'Upload Documents',
                link: '/form/uploads',
                parentId: 1
            },
            {
                id: 2,
                label: 'Update Document Data',
                link: '/dataCapture',
                parentId: 1
            },
            
            // {
            //     id: 4,
            //     label: 'View Documents',
            //     link: '/dashboards/crypto',
            //     parentId: 1
            // },
        ]
    },
    {
        id: 5,
        label: 'Client Portal',
        icon: 'bx-home-circle',
        subItems: [ 
            {
                id: 7,
                label: 'HR',
                link: '/dashboards/hr',
                parentId: 1
            },
            {
                id: 8,
                label: 'Procurement',
                link: '/dashboards/procurement',
                parentId: 1
            },
            {
                id: 9,
                label: 'Finance',
                link: '/dashboards/finance',
                parentId: 1
            },
        ]
    },
    {
                    id: 69,
                    label: 'Departments',
                    subItems: [
                        {
                            id: 70,
                            label: 'Inspector',
                            link: '/tables/basic',
                            parentId: 69
                        },
                        {
                            id: 71,
                            label: 'Administration',
                            link: '/tables/advanced',
                            parentId: 69
                        },
                        {
                            id: 75,
                            label: 'Engineering',
                            link: '/tables/engineering',
                            parentId: 69
                        },
                    ]
                },
    // {
    //     id: 5,
    //     label: 'UI Elements',
    //     icon: 'bx-tone',
    //     isUiElement: true,
    //     subItems: [
    //         {
    //             id: 6,
    //             label: 'Alerts',
    //             link: '/ui/alerts',
    //             parentId: 5
    //         },
    //         {
    //             id: 7,
    //             label: 'Buttons',
    //             link: '/ui/buttons',
    //             parentId: 5
    //         },
    //         {
    //             id: 8,
    //             label: 'Cards',
    //             link: '/ui/cards',
    //             parentId: 5
    //         },
    //         {
    //             id: 9,
    //             label: 'Carousel',
    //             link: '/ui/carousel',
    //             parentId: 5
    //         },
    //         {
    //             id: 10,
    //             label: 'Dropdowns',
    //             link: '/ui/dropdowns',
    //             parentId: 5
    //         },
    //         {
    //             id: 11,
    //             label: 'Grid',
    //             link: '/ui/grid',
    //             parentId: 5
    //         },
    //         {
    //             id: 12,
    //             label: 'Images',
    //             link: '/ui/images',
    //             parentId: 5
    //         },
    //         {
    //             id: 13,
    //             label: 'Modals',
    //             link: '/ui/modals',
    //             parentId: 5
    //         },
    //         {
    //             id: 14,
    //             label: 'Range Slider',
    //             link: '/ui/rangeslider',
    //             parentId: 5
    //         },
    //         {
    //             id: 15,
    //             label: 'Progress Bars',
    //             link: '/ui/progressbar',
    //             parentId: 5
    //         },
    //         {
    //             id: 16,
    //             label: 'Sweet-Alert',
    //             link: '/ui/sweet-alert',
    //             parentId: 5
    //         },
    //         {
    //             id: 17,
    //             label: 'Tabs & Accordions',
    //             link: '/ui/tabs-accordions',
    //             parentId: 5
    //         },
    //         {
    //             id: 18,
    //             label: 'Typography',
    //             link: '/ui/typography',
    //             parentId: 5
    //         },
    //         {
    //             id: 19,
    //             label: 'Video',
    //             link: '/ui/video',
    //             parentId: 5
    //         },
    //         {
    //             id: 20,
    //             label: 'General',
    //             link: '/ui/general',
    //             parentId: 5
    //         },
    //         {
    //             id: 21,
    //             label: 'Colors',
    //             link: '/ui/colors',
    //             parentId: 5
    //         },
    //         {
    //             id: 22,
    //             label: 'Image Cropper',
    //             link: '/ui/image-crop',
    //             parentId: 5
    //         },
    //     ]
    // },
    // {
    //     id: 23,
    //     label: 'Apps',
    //     subItems: [
    //         {
    //             id: 24,
    //             label: 'Calendar',
    //             link: '/calendar',
    //         },
    //         {
    //             id: 25,
    //             label: 'Chat',
    //             link: '/chat',
    //         },
    //         {
    //             id: 26,
    //             label: 'Email',
    //             subItems: [
    //                 {
    //                     id: 27,
    //                     label: 'Inbox',
    //                     link: '/email/inbox',
    //                     parentId: 26
    //                 },
    //                 {
    //                     id: 28,
    //                     label: 'Read Email',
    //                     link: '/email/read',
    //                     parentId: 26
    //                 }
    //             ]
    //         },
    //         {
    //             id: 29,
    //             label: 'Ecommerce',
    //             subItems: [
    //                 {
    //                     id: 30,
    //                     label: 'Products',
    //                     link: '/ecommerce/products',
    //                     parentId: 29
    //                 },
    //                 {
    //                     id: 31,
    //                     label: 'Product Detail',
    //                     link: '/ecommerce/product-detail',
    //                     parentId: 29
    //                 },
    //                 {
    //                     id: 32,
    //                     label: 'Orders',
    //                     link: '/ecommerce/orders',
    //                     parentId: 29
    //                 },
    //                 {
    //                     id: 33,
    //                     label: 'Customers',
    //                     link: '/ecommerce/customers',
    //                     parentId: 29
    //                 },
    //                 {
    //                     id: 34,
    //                     label: 'Cart',
    //                     link: '/ecommerce/cart',
    //                     parentId: 29
    //                 },
    //                 {
    //                     id: 35,
    //                     label: 'Checkout',
    //                     link: '/ecommerce/checkout',
    //                     parentId: 29
    //                 },
    //                 {
    //                     id: 36,
    //                     label: 'Shops',
    //                     link: '/ecommerce/shops',
    //                     parentId: 29
    //                 },
    //                 {
    //                     id: 37,
    //                     label: 'Add Product',
    //                     link: '/ecommerce/add-product',
    //                     parentId: 29
    //                 },
    //             ]
    //         },
    //         {
    //             id: 38,
    //             label: 'Crypto',
    //             icon: 'bx-bitcoin',
    //             subItems: [
    //                 {
    //                     id: 39,
    //                     label: 'Wallet',
    //                     link: '/crypto/wallet',
    //                     parentId: 38
    //                 },
    //                 {
    //                     id: 40,
    //                     label: 'Buy/Sell',
    //                     link: '/crypto/buy-sell',
    //                     parentId: 38
    //                 },
    //                 {
    //                     id: 41,
    //                     label: 'Exchange',
    //                     link: '/crypto/exchange',
    //                     parentId: 38
    //                 },
    //                 {
    //                     id: 42,
    //                     label: 'Lending',
    //                     link: '/crypto/lending',
    //                     parentId: 38
    //                 },
    //                 {
    //                     id: 43,
    //                     label: 'Orders',
    //                     link: '/crypto/orders',
    //                     parentId: 38
    //                 },
    //                 {
    //                     id: 44,
    //                     label: 'KYC Application',
    //                     link: '/crypto/kyc-application',
    //                     parentId: 38
    //                 },
    //                 {
    //                     id: 45,
    //                     label: 'ICO Landing',
    //                     link: '/crypto-ico-landing',
    //                     parentId: 38
    //                 }
    //             ]
    //         },
    //         {
    //             id: 46,
    //             label: 'Projects',
    //             subItems: [
    //                 {
    //                     id: 47,
    //                     label: 'Projects Grid',
    //                     link: '/projects/grid',
    //                     parentId: 46
    //                 },
    //                 {
    //                     id: 48,
    //                     label: 'Projects List',
    //                     link: '/projects/list',
    //                     parentId: 46
    //                 },
    //                 {
    //                     id: 49,
    //                     label: 'Project Overview',
    //                     link: '/projects/overview',
    //                     parentId: 46
    //                 },
    //                 {
    //                     id: 50,
    //                     label: 'Create New',
    //                     link: '/projects/create',
    //                     parentId: 46
    //                 }
    //             ]
    //         },
    //         {
    //             id: 51,
    //             label: 'Tasks',
    //             subItems: [
    //                 {
    //                     id: 52,
    //                     label: 'Task List',
    //                     link: '/tasks/list',
    //                     parentId: 51
    //                 },
    //                 {
    //                     id: 53,
    //                     label: 'Kanban Board',
    //                     link: '/tasks/kanban',
    //                     parentId: 51
    //                 },
    //                 {
    //                     id: 54,
    //                     label: 'Create Task',
    //                     link: '/tasks/create',
    //                     parentId: 51
    //                 }
    //             ]
    //         },
    //         {
    //             id: 55,
    //             label: 'Contacts',
    //             icon: 'bxs-user-detail',
    //             subItems: [
    //                 {
    //                     id: 56,
    //                     label: 'User Grid',
    //                     link: '/contacts/grid',
    //                     parentId: 55
    //                 },
    //                 {
    //                     id: 57,
    //                     label: 'User List',
    //                     link: '/contacts/list',
    //                     parentId: 55
    //                 },
    //                 {
    //                     id: 58,
    //                     label: 'Profile',
    //                     link: '/contacts/profile',
    //                     parentId: 55
    //                 }
    //             ]
    //         },
    //     ]
    // },
    // {
    //     id: 59,
    //     icon: 'bx-collection',
    //     label: 'Components',
    //     subItems: [
    //         {
    //             id: 60,
    //             label: 'Forms',
    //             subItems: [
    //                 {
    //                     id: 61,
    //                     label: 'Form Elements',
    //                     link: '/form/elements',
    //                     parentId: 60
    //                 },
    //                 {
    //                     id: 62,
    //                     label: 'Form Validation',
    //                     link: '/form/validation',
    //                     parentId: 60
    //                 },
    //                 {
    //                     id: 63,
    //                     label: 'Form Advanced',
    //                     link: '/form/advanced',
    //                     parentId: 60
    //                 },
    //                 {
    //                     id: 64,
    //                     label: 'Form Editors',
    //                     link: '/form/editor',
    //                     parentId: 60
    //                 },
    //                 {
    //                     id: 65,
    //                     label: 'Form File Upload',
    //                     link: '/form/uploads',
    //                     parentId: 60
    //                 },
    //                 {
    //                     id: 66,
    //                     label: 'Form Repeater',
    //                     link: '/form/repeater',
    //                     parentId: 60
    //                 },
    //                 {
    //                     id: 67,
    //                     label: 'Form Wizard',
    //                     link: '/form/wizard',
    //                     parentId: 60
    //                 },
    //                 {
    //                     id: 68,
    //                     label: 'Form Mask',
    //                     link: '/form/mask',
    //                     parentId: 60
    //                 }
    //             ]
    //         },
    //         {
    //             id: 69,
    //             label: 'Tables',
    //             subItems: [
    //                 {
    //                     id: 70,
    //                     label: 'Basic Tables',
    //                     link: '/tables/basic',
    //                     parentId: 69
    //                 },
    //                 {
    //                     id: 71,
    //                     label: 'Administration',
    //                     link: '/tables/advanced',
    //                     parentId: 69
    //                 }
    //             ]
    //         },
    //         {
    //             id: 72,
    //             label: 'Charts',
    //             subItems: [
    //                 {
    //                     id: 73,
    //                     label: 'Apex charts',
    //                     link: '/charts/apex',
    //                     parentId: 72
    //                 },
    //                 {
    //                     id: 74,
    //                     label: 'Chartjs Chart',
    //                     link: '/charts/chartjs',
    //                     parentId: 72
    //                 },
    //                 {
    //                     id: 75,
    //                     label: 'Chartist Chart',
    //                     link: '/charts/chartist',
    //                     parentId: 72
    //                 },
    //                 {
    //                     id: 76,
    //                     label: 'E - Chart',
    //                     link: '/charts/echart',
    //                     parentId: 72
    //                 }
    //             ]
    //         },
    //         {
    //             id: 77,
    //             label: 'Icons',
    //             subItems: [
    //                 {
    //                     id: 78,
    //                     label: 'Boxicons',
    //                     link: '/icons/boxicons',
    //                     parentId: 77
    //                 },
    //                 {
    //                     id: 79,
    //                     label: 'Material Design',
    //                     link: '/icons/materialdesign',
    //                     parentId: 77
    //                 },
    //                 {
    //                     id: 80,
    //                     label: 'Dripicons',
    //                     link: '/icons/dripicons',
    //                     parentId: 77
    //                 },
    //                 {
    //                     id: 81,
    //                     label: 'Font awesome',
    //                     link: '/icons/fontawesome',
    //                     parentId: 77
    //                 },
    //             ]
    //         },
    //         {
    //             id: 82,
    //             label: 'Maps',
    //             subItems: [
    //                 {
    //                     id: 83,
    //                     label: 'Google Maps',
    //                     link: '/maps/google',
    //                     parentId: 82
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: 84,
    //     label: 'Extra Pages',
    //     icon: 'bx-file',
    //     subItems: [
    //         {
    //             id: 85,
    //             label: 'Invoices',
    //             subItems: [
    //                 {
    //                     id: 86,
    //                     label: 'Invoice List',
    //                     link: '/invoices/list',
    //                     parentId: 85
    //                 },
    //                 {
    //                     id: 87,
    //                     label: 'Invoice Detail',
    //                     link: '/invoices/detail',
    //                     parentId: 85
    //                 },
    //             ]
    //         },
    //         {
    //             id: 88,
    //             label: 'Authentication',
    //             subItems: [
    //                 {
    //                     id: 89,
    //                     label: 'Login',
    //                     link: '/pages/login-1',
    //                     parentId: 88
    //                 },
    //                 {
    //                     id: 90,
    //                     label: 'Register',
    //                     link: '/pages/register-1',
    //                     parentId: 88
    //                 },
    //                 {
    //                     id: 91,
    //                     label: 'Recover Password',
    //                     link: '/pages/recoverpwd-1',
    //                     parentId: 88
    //                 },
    //                 {
    //                     id: 92,
    //                     label: 'Lock Screen',
    //                     link: '/pages/lock-screen-1',
    //                     parentId: 88
    //                 }
    //             ]
    //         },
    //         {
    //             id: 93,
    //             label: 'Utility',
    //             icon: 'bx-file',
    //             subItems: [
    //                 {
    //                     id: 94,
    //                     label: 'Starter Page',
    //                     link: '/pages/starter',
    //                     parentId: 93
    //                 },
    //                 {
    //                     id: 95,
    //                     label: 'Maintenance',
    //                     link: '/pages/maintenance',
    //                     parentId: 93
    //                 },
    //                 {
    //                     id: 96,
    //                     label: 'Timeline',
    //                     link: '/pages/timeline',
    //                     parentId: 93
    //                 },
    //                 {
    //                     id: 97,
    //                     label: 'FAQs',
    //                     link: '/pages/faqs',
    //                     parentId: 93
    //                 },
    //                 {
    //                     id: 98,
    //                     label: 'Pricing',
    //                     link: '/pages/pricing',
    //                     parentId: 93
    //                 },
    //                 {
    //                     id: 99,
    //                     label: 'Error 404',
    //                     link: '/pages/404',
    //                     parentId: 93
    //                 },
    //                 {
    //                     id: 100,
    //                     label: 'Error 500',
    //                     link: '/pages/500',
    //                     parentId: 93
    //                 },
    //             ]
    //         },
    //     ]
    // }
];

