import type { ReactNode } from 'react';
import  Button from '../button';
import '../skills.css';
import '../svg.css';
import '../lines.css';
import '../button.css';

type DataItem = {
    index: number;
    url: string;
    image: string;
    text: string;
};

type SectionGridProps = {
    data: DataItem[];
    linkType?: 'external' | 'internal';
};

const getCommonProps = (img: string) => ({
    className: 'c-article-link fullsize-background',
    style: { backgroundImage: `url(${img})` }
});

export const SectionGrid = ({
    data,
    linkType = 'internal',
}: SectionGridProps): ReactNode => {
    return (
        <div className="c-section__grid o-grid">
            {data.map((item: DataItem) => (
                <div className="o-grid__item xs-12 sm-6 md-4 lg-4 xl-4" key={item.index}>
                    <Button
                        href={item.url}
                        {...getCommonProps(item.image)}
                        type={linkType === 'external' ? 'link' : 'button'} // Adjust based on linkType
                    >
                        <strong>{item.text}</strong>
                    </Button>
                </div>
            ))}
        </div>
    );
};

export default SectionGrid;
