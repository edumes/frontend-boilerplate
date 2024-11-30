export interface TabConfig {
    key: string
    label: string
}

export interface FormConfig {
    prefix: string
    table: string
    singularName: string
    pluralName: string
    icon: string
    permissions: {
        delete: boolean
        add: boolean
        edit: boolean
        read: boolean
        browse: boolean
    }
    tabs: TabConfig[]
    version: string
}

export interface FormField {
    name: string
    order: number
    width: number
    browserOrder?: number
    browserWidth?: number
    type: string
    canBrowse: boolean
    canMobile?: boolean
    canRead: boolean
    canEdit: boolean
    canAdd: boolean
    label: string
    required?: boolean
    tabs: string[]
    showOnTop: boolean
    [key: string]: any // para propriedades adicionais específicas de cada tipo
}

export interface FormFieldConfig {
    config: FormConfig
    fields: FormField[]
}
