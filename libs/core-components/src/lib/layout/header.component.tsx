import {
  toggleDisplayMobileNavbar,
  useAppDispatch,
  useAppSelector,
} from '@abhishek/store';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ThemeConfigurator } from '../theme-configurator.component';
import { menu } from './menu';

export const Header = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const pathname = router.asPath;

  const { displayMobileNavbar } = useAppSelector((state) => state.layout);

  const isOnPath = (path: string) => {
    return pathname === path ? 'active' : undefined;
  };

  const handleToggle = () => {
    dispatch(toggleDisplayMobileNavbar());
  };

  return (
    <header className="header-area">
      <div className="container">
        <div className="gx-row d-flex align-items-center justify-content-between">
          <Link href="/" className="logo">
            <img src="/assets/logo/logo.png" alt="Logo" />
          </Link>
          <nav
            className={classNames('navbar', { active: displayMobileNavbar })}
          >
            <ul className="menu">
              {menu.map((entry, i) => (
                entry.path.startsWith('http') ? (
                  <li key={i}>
                    <a
                      href={entry.path}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={classNames({ active: isOnPath(entry.path) })}
                      onClick={handleToggle}
                    >
                      {entry.label}
                    </a>
                  </li>
                ) : (
                  <li className={isOnPath(entry.path)} key={i}>
                    <Link href={entry.path} onClick={handleToggle}>
                      {entry.label}
                    </Link>
                  </li>
                )
              ))}
            </ul>
            <a
              className="theme-btn"
              href="https://calendly.com/abhishekpanthee5"
              target="_blank"
              rel="noreferrer noopener"
            >
              💬 Chat with Me
            </a>
          </nav>
          <ThemeConfigurator />
          <div
            className={classNames('show-menu', { active: displayMobileNavbar })}
            onClick={handleToggle}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </header>
  );
};
