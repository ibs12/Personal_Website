import { StaticImageData } from 'next/image';

declare module '*.jpeg' {
    const src: StaticImageData | string;
    export default src;
}