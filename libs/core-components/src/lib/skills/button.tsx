import { useMemo, FC, HTMLProps } from 'react';
import Link, { LinkProps as ILinkProps } from 'next/link';
import './button.css';

// Define types for the button props
interface CustomProps {
    className?: string;
    unstyled?: boolean;
}

interface LinkProps extends CustomProps, ILinkProps {
    type: 'link';
    children: React.ReactNode;
}

interface AnchorProps extends CustomProps, HTMLProps<HTMLAnchorElement> {
    type: 'anchor';
    children: React.ReactNode;
}

interface ButtonProps extends CustomProps, HTMLProps<HTMLButtonElement> {
    type: 'button' | 'reset' | 'submit';
    children: React.ReactNode;
}

type Props = LinkProps | AnchorProps | ButtonProps;

const getClassName = (props: CustomProps): string | undefined => {
    const { className, unstyled } = props;
    if (unstyled) {
        return className;
    }

    // Directly handle the class name logic without composeClassName
    const baseClass = 'c-btn';
    return className ? `${baseClass} ${className}` : baseClass;
};

const AnchorButton: FC<AnchorProps> = (props) => {
    const { children, type, unstyled, ...rest } = props;
    return <a {...rest}>{children}</a>;
};

const LinkButton: FC<LinkProps> = (props) => {
    const { children, type, unstyled, ...rest } = props;
    return <Link {...rest}>{children}</Link>;
};

const DefaultButton: FC<ButtonProps> = (props) => {
    const { children, unstyled, ...rest } = props;
    return <button {...rest}>{children}</button>;
};

const Button: FC<Props> = (props) => {
    const className = useMemo(() => getClassName(props) as string, [props]);

    if (props.type === 'anchor') {
        return <AnchorButton {...props} className={className} />;
    }

    if (props.type === 'link') {
        return <LinkButton {...props} className={className} />;
    }

    return <DefaultButton {...props} className={className} />;
};

export default Button;
