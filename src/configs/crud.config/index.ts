import {
    FIELD_TYPE_CHECKTREE,
    FIELD_TYPE_RICHTEXT,
    FIELD_TYPE_SELECT,
    FIELD_TYPE_TEXT,
} from '@/constants/fields.constant';

import type { FormFieldConfig } from '@/@types/forms';

const formConfig: FormFieldConfig = {
    config: {
        prefix: 'project',
        table: 'projects',
        singularName: 'Projeto',
        pluralName: 'Projetos',
        icon: 'toolbox',
        permissions: {
            delete: true,
            add: true,
            edit: true,
            read: false,
            browse: false,
        },
        tabs: [
            { key: 'main', label: 'Principal' },
            { key: 'historic-situation', label: 'Histórico de Situações' },
            { key: 'appointment', label: 'Apontamentos' },
        ],
        version: '05-09-2024|10-55-45',
    },
    fields: [
        {
            name: 'project_code',
            order: 1,
            width: 3,
            browserOrder: 1,
            browserWidth: 1,
            type: FIELD_TYPE_TEXT,
            canBrowse: true,
            canRead: true,
            canEdit: true,
            canAdd: true,
            label: 'Código do Projeto',
            required: true,
            tabs: ['main'],
            showOnTop: false,
        },
        {
            name: 'project_obs',
            order: 65,
            width: 12,
            browserWidth: 6,
            type: FIELD_TYPE_RICHTEXT,
            canBrowse: false,
            canRead: true,
            canEdit: true,
            canAdd: true,
            label: 'Observações',
            tabs: ['main'],
            showOnTop: false,
        },
        {
            name: 'project_startedby_fk_user_id',
            order: 28,
            width: 4,
            browserOrder: 3,
            browserWidth: 3,
            type: FIELD_TYPE_SELECT,
            canBrowse: true,
            canRead: true,
            canEdit: true,
            canAdd: true,
            label: 'Iniciado Por',
            readOnly: true,
            tabs: ['main'],
            showOnTop: false,
            api: '/api/v1/users/select',
            displayLabel: 'user_name',
            browseLabel: 'userStart.user_name',
        },
        {
            name: 'project_users',
            order: 47,
            width: 10,
            browserWidth: 6,
            type: FIELD_TYPE_CHECKTREE,
            canBrowse: false,
            canRead: true,
            canEdit: true,
            canAdd: true,
            label: 'Usuarios Responsaveis',
            tabs: ['main'],
            showOnTop: false,
            api: '/api/v1/users/select',
            displayLabel:
                "users.user_name + '-' + users.user_cpf_cnpj + '-' + users.role.role_name",
            browseLabel:
                "users.user_name + '-' + users.user_cpf_cnpj + '-' + users.role.role_name",
        },
    ],
};

export default formConfig;
