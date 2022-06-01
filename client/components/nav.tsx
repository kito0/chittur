import Link from 'next/link';

export const Nav = () => {
  return (
    <header className='nav'>
      <div className='container'>
        <Link href='/'>
          <a id='a-title'>
            <h1>Krishna&#39;s Blog</h1>
          </a>
        </Link>
        <h2>The perpetual work-in-progress.</h2>
      </div>
    </header>
  );
};
