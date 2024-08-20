import { FC, useEffect, useState } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Button from './button';

import Icon from './icon';
import Lines from './lines';
import { Section } from './section';
import { ForceNode, skills } from './skills-list';
import SVGSprite  from './SVGComponent'
import './skills.css';
import './svg.css';
import './lines.css';
import './button.css';
type Props = {};

export const Skills: FC<InferGetStaticPropsType<typeof getStaticProps>> = () => {
	const [showTable, setShowTable] = useState(false);

	useEffect(() => {
		import('./scripts/force')
			.then(({ renderForceDirectedGraph }) => renderForceDirectedGraph('skills-graph', skills, 'skills'))
			.catch(console.error);

		return () => {
			const graph = document.getElementById('skills-graph');

			if (graph) {
				graph.innerHTML = '';
			}
		};
	}, []);

	return (
		<>
			<SVGSprite /> {/* Use SVG as a React component */}

			<Section
				actions={
					<Button onClick={() => setShowTable(!showTable)} type="button">
						{showTable ? 'Interactive' : 'Static'} mode
					</Button>
				}
				className="bubbles"
				hasButton
				id="skills"
				subtitle={showTable ? undefined : ''}
				title="Interacted Technologies"
			>
				<div className={showTable ? 'c-section__wrapper' : 'c-section__container'}>
					<Lines />

					<div className={showTable ? 'is--hidden' : undefined} id="skills-graph"></div>

					<div className={`o-grid ${showTable ? '' : 'is--hidden'}`}>
						{skills.map((skill: ForceNode) => (
							<div className="o-grid__item xs-12 sm-6 md-4 lg-3" key={skill.text}>
								<div className="c-skill">
									<figure style={{ backgroundColor: skill.fill }}>
										<Icon
											className="c-skill__icon"
											fill={skill.iconFill}
											height={skill.height}
											name={`svg-${skill.icon}`}
											width={skill.width}
										/>
									</figure>

									<p>
										<strong>{skill.text}</strong>
										Since {skill.since}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</Section>
		</>
	);
};

export const getStaticProps: GetStaticProps<Props> = async () => ({
	props: {}
});

export default Skills;
