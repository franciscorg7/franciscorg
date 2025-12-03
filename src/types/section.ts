import type { ReactNode } from "react";

export interface SectionProps{
    id: string;
    title?: string;
    fullHeight?: boolean;
    children: ReactNode;
}