declare module '*.svg' {
    export const ReactComponent: React.FC<React.SVGAttributes<SVGElement>>;
    const src: string;
    export default src;
}

declare module '*.png' {
    const src: string;
    export default src;
}

declare module '*.jpg' {
    const src: string;
    export default src;
}
