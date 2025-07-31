import {TransProps} from 'next-translate';

declare global {
    interface LocalizedProps extends Omit<TransProps, 'i18nKey'> {
        t?: string;
        title?: string;
    }
    type OptionValue = string | number;
    type Option = {
        value: OptionValue;
        label: string;
        description?: string | LocalizedProps;
    };

    export type Image = {
        imageData: string;
        name: string;
    };

    export type ImageResolution = {
        minWidth: number;
        minHeight: number;
        aspect: number;
    };

    declare interface ITab {
        label: string;
        route: string;
    }

    type FieldType =
        | 'localized-input'
        | 'localized-textarea'
        | 'localized-select'
        | 'searchable-dropdown'
        | 'autocomplete-address'
        | 'file-uploader'
        | 'radio-buttons'
        | 'localized-calendar'
        | 'checkboxes'
        | 'phone-input'
        | 'image-upload-field'
        | 'time-input';

    type FormField = {
        fieldType: FieldType;
        error?: boolean;
        helpText?: string;
        errorText?: string;
        label?: string;
        isRequired?: boolean;
        className?: string;
        size?: 'smaller' | 'small' | 'medium' | 'medium-large' | 'large';
    };

    interface DetailsGridItem {
        label: string;
        content: string;
        size?: 'half' | 'full';
    }

    interface DetailsGrid {
        items: DetailsGridItem[];
        className?: string;
    }
    type Option = {
        value: OptionValue;
        label: string;
        description?: string;
    };
}
