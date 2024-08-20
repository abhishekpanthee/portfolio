import type { CSSProperties, ReactNode } from 'react';

// Define types directly in the file
type ReactChildren = string | ReactNode | ReactNode[];

export type Props = {
    actions?: ReactNode;
    additionalElements?: ReactNode;
    children: ReactChildren;
    className?: string;
    hasButton?: boolean;
    hasShell?: boolean;
    id: string;
    shellClass?: string;
    style?: CSSProperties;
    subtitle?: string;
    title?: string;
};
