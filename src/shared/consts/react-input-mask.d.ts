declare module 'react-input-mask' {
    import * as React from 'react';

    interface InputMaskProps extends React.InputHTMLAttributes<HTMLInputElement> {
        mask?: string | Array<string | RegExp>;
        value?: string;
        onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
        maskChar?: string | null;
        alwaysShowMask?: boolean;
        beforeMaskedValueChange?: (newState: { value: string; selection: { start: number; end: number } }, oldState: { value: string; selection: { start: number; end: number } }) => { value: string; selection: { start: number; end: number } };
    }

    class InputMask extends React.Component<InputMaskProps> { }
    export default InputMask;
}