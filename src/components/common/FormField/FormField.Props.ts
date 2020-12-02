export interface FormFieldProps {
    // alignment?: AlignmentType;
    // autoFocus?: boolean;
    // checkbox?: boolean;
    // checked?: boolean;
    //hasTooltip?: boolean;
    //tooltipType?: TooltipType;
    //height?: SizeType;
    deafultValue?: any;
    label?: string;
    placeholder?: string;
    description?: string;
    disabled?: boolean;
    onValueChange?: any;
    options?: any[];
    radioButton?: boolean;
    textarea?: boolean;
    regex?: string | undefined;
    required?: boolean;
    title?: string;
    currentForm: any;
    name: string;
    onClick?: Function;
    defaultOptionText?: string;
    isSubmitted?: boolean;
    displayError?: boolean;
}