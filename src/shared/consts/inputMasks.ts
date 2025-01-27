export const inputMasks = {
    letters: (value: string) => value.replace(/[^a-zA-Z-]/g, ''),
    date: (value: string) => {
        value = value.replace(/[^\d]/g, '');
        if (value.length <= 4) return value;
        if (value.length <= 6) return `${value.slice(0, 4)}-${value.slice(4)}`;
        return `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}`;
    },
    passportSeries: (value: string) => value.replace(/[^0-9]/g, '').slice(0, 4),
    passportNumber: (value: string) => value.replace(/[^0-9]/g, '').slice(0, 6),
    email: (value: string) => value.replace(/[^a-zA-Z0-9@._+-]/g, ''),
    digits: (value: string) => value.replace(/[^0-9]/g, ''),
    divisionCode: (value: string) => {
        value = value.replace(/[^0-9]/g, '');
        if (value.length <= 3) return value;
        if (value.length <= 6) return `${value.slice(0, 3)}-${value.slice(3)}`;
        return `${value.slice(0, 3)}-${value.slice(3, 6)}`;
    },
    dependents: (value: string) => value.replace(/[^0-9]/g, '').slice(0, 2),
    employerINN: (value: string) => value.replace(/[^0-9]/g, '').slice(0, 12),
};

export type MaskType = keyof typeof inputMasks;