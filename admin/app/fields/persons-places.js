import {t} from "../i18n/translater.js";

export const places = {
    name: 'persons_places',
    label: t.lawyerify.fields.persons_places,
    widget: 'relation',
    collection: 'places',
    search_fields: ['title'],
    value_field: '{{filename}}',
    display_fields: ['title'],
    multiple: true,
    required: false,
    i18n: 'duplicate'
}