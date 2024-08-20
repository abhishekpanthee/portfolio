import type { FC } from 'react';
import Button from '../button';
import '../skills.css';
import '../svg.css';
import '../lines.css';
import '../button.css';

type AllowedDataTypes = {
    index: number;
    title: string;
};

type Props = {
    active: number;
    data: Array<AllowedDataTypes>;
    name: 'title';
    onClick?: (index: number) => void;
    route?: string;
    small?: boolean;
};

export const SectionNav: FC<Readonly<Props>> = ({ active, data, name, onClick, route, small = false }: Props) => (
    <nav className={`c-section__nav ${small ? 'small' : ''}`}>
        <ul>
            {data.map((item: AllowedDataTypes, index: number) => (
                <li
                    className={active === index + (onClick ? 0 : 1) ? 'current' : ''}
                    key={item.index}
                >
                    {onClick ? (
                        <Button
                            aria-label={`Switch to ${item[name]}`}
                            className={small ? 'c-btn--small' : ''}
                            onClick={() => onClick(index)}
                            type="button"
                        >
                            {item[name]}
                        </Button>
                    ) : (
                        <Button
                            className={small ? 'c-btn--small' : ''}
                            href={`${route}?page=${index + 1}`}
                            type="link"
                        >
                            {item[name]}
                        </Button>
                    )}
                </li>
            ))}
        </ul>
    </nav>
);

export default SectionNav;
