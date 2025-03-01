import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-content text-center">
          <Link href="/" className="logo">
            <img src="/assets/logo/logo.png" alt="Logo" />
          </Link>
          <ul className="footer-menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/bio">Bio</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/posts">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/certificates">Certificates</Link>
            </li>
            <li>
              <Link href="/cv">CV</Link>
            </li>
            <li>
              <Link href="/offerings">Offerings</Link>
            </li>
            <li>
              <Link href="/credentials">Insights</Link>
            </li>
          </ul>
          <p className="copyright">
             <span>Abhishek Panthee</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
