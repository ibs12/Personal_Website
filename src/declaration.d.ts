import { StaticImageData } from 'next/image';

declare module '*.jpeg' {
    const src: StaticImageData | string;
    export default src;
}

declare module '*.mp4' {
    const value: string;
    export default value;
  }
  