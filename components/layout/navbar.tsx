import { FC } from 'react'
import Link from 'next/link'

export const Navbar: FC = props => {
  return (
    <nav className="navbar" {...props}>
      <ul className="container">
        <li>
          <Link href="/">
            <a>🏠 home</a>
          </Link>
        </li>
        <li style={{ marginLeft: 'auto' }}>
          <a>✍️ blog</a>
        </li>
        <li>
          <a>🕹 playground</a>
        </li>
      </ul>
      <style jsx>
        {`
          .navbar {
            height: 56px;
            display: flex;
            width: 100%;
            background-color: #fff;
          }

          ul {
            max-width: 1080px;
            margin: 0 auto;
            width: 100%;
            display: flex;
          }

          li {
            list-style: none;
          }

          a {
            display: flex;
            height: 100%;
            padding 0 16px;
            align-items: center;
            text-decoration: none;
            color: var(--font-color);
            font-weight: 600;
          }

          a:hover {
            color: var(--primary-color);
          }
        `}
      </style>
    </nav>
  )
}
