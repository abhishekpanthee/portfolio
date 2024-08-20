import { FC, useState, ReactNode } from 'react';
import Button from '../button';
import Icon from '../icon';
import '../skills.css';
import '../svg.css';
import '../lines.css';
import '../button.css';
import'../section.css';

type Props = {
  actions?: ReactNode;
  additionalElements?: ReactNode;
  children: ReactNode;
  hasButton?: boolean;
  hasShell?: boolean;
  subtitle?: string;
  title?: string;
};

const HeaderWrapper: FC<{ hasShell: boolean; children: ReactNode }> = ({ children, hasShell }) => {
  return hasShell ? <>{children}</> : <div style={{ padding: '0 20px' }}>{children}</div>;
};

export const SectionElements: FC<Props> = ({
  actions,
  additionalElements,
  children,
  hasButton = true,
  hasShell = true,
  subtitle,
  title
}) => {
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);

  // Inline styles for centering
  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
  };

  const actionsStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  const brStyle: React.CSSProperties = {
    display: 'block',
    margin: '0 auto',
  };

  return (
    <>
      {(title || subtitle) && (
        <header style={headerStyle}>
          <HeaderWrapper hasShell={hasShell}>
            {additionalElements}
            {title && <h2>{title}</h2>}
            {subtitle && <h3>{subtitle}</h3>}
          </HeaderWrapper>
        </header>
      )}

      {children}
    </>
  );
};
