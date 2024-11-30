import {
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE,
} from '@/constants/navigation.constant';

import type { NavigationTree } from '@/@types/navigation';

const navigationConfig: NavigationTree[] = [
    {
        key: 'home',
        path: '/home',
        title: 'Home',
        translateKey: 'home',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'customers',
        path: '',
        title: 'Customers',
        translateKey: 'customers',
        icon: 'customers',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'clients',
                path: '/customers/clients',
                title: 'Clients',
                translateKey: 'clients',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'client_users',
                path: '/customers/client-users',
                title: 'Client Users',
                translateKey: 'client_users',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
        ],
    },
    {
        key: 'projects',
        path: '',
        title: 'Projects',
        translateKey: 'projects',
        icon: 'projects',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'projects_main',
                path: '/projects',
                title: 'Projects',
                translateKey: 'projects',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'templates',
                path: '/projects/templates',
                title: 'Templates',
                translateKey: 'templates',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
        ],
    },
    {
        key: 'tasks',
        path: '/tasks',
        title: 'Tasks',
        translateKey: 'tasks',
        icon: 'tasks',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'sales',
        path: '',
        title: 'Sales',
        translateKey: 'sales',
        icon: 'sales',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'invoices',
                path: '/sales/invoices',
                title: 'Invoices',
                translateKey: 'invoices',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'payments',
                path: '/sales/payments',
                title: 'Payments',
                translateKey: 'payments',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'estimates',
                path: '/sales/estimates',
                title: 'Estimates',
                translateKey: 'estimates',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'subscriptions',
                path: '/sales/subscriptions',
                title: 'Subscriptions',
                translateKey: 'subscriptions',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'products',
                path: '/sales/products',
                title: 'Products',
                translateKey: 'products',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'expenses',
                path: '/sales/expenses',
                title: 'Expenses',
                translateKey: 'expenses',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
        ],
    },
    {
        key: 'support',
        path: '',
        title: 'Support',
        translateKey: 'support',
        icon: 'support',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'tickets',
                path: '/support/tickets',
                title: 'Tickets',
                translateKey: 'tickets',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'canned',
                path: '/support/canned',
                title: 'Canned',
                translateKey: 'canned',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'knowledgebase',
                path: '/support/knowledgebase',
                title: 'Knowledgebase',
                translateKey: 'knowledgebase',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'messages',
                path: '/support/messages',
                title: 'Messages',
                translateKey: 'messages',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
        ],
    },
    {
        key: 'team',
        path: '',
        title: 'Team',
        translateKey: 'team',
        icon: 'team',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'team_members',
                path: '/team/members',
                title: 'Team Members',
                translateKey: 'team_members',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'time_sheets',
                path: '/team/time-sheets',
                title: 'Time Sheets',
                translateKey: 'time_sheets',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
        ],
    },
    {
        key: 'reports',
        path: '/reports',
        title: 'Reports',
        translateKey: 'reports',
        icon: 'reports',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
];

export default navigationConfig;
