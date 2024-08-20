import type { FC } from 'react';
import '../skills.css';
import '../svg.css';
import '../lines.css';
import '../button.css';

import { SectionElements } from './elements';
import type { Props } from './types';

const composeClassName = (main: string, modifiers: string[], optional: Array<string | undefined> = []): string =>
	[main, ...modifiers.filter(Boolean).map((modifier: string) => `${main}--${modifier}`), ...optional]
		.filter(Boolean)
		.join(' ');

export const Section: FC<Readonly<Props>> = (props: Props) => {
	const { className, hasShell = true, id, shellClass, style } = props;

	return (
		<section className={composeClassName('c-section', [id], [className])} id={id} style={style}>
			{hasShell ? (
				<div className={composeClassName('o-shell', [], [shellClass])}>
					<SectionElements {...props} />
				</div>
			) : (
				<SectionElements {...props} />
			)}
		</section>
	);
};

export default Section;
