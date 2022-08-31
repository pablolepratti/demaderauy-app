import Head from 'next/head';
import Link from 'next/link';


export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - DeMadera.Uy' : 'DeMadera.Uy - App'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex min-h-screen flex-col justify-between'>
        <header>
            <nav className="flex h-12 item-center px-4 justify-between shadow-md" >
                <Link href="/">
                    <a className="text-lg font-bold">DeMadera.Uy</a>
                </Link>
                <div>
                    <Link href="/cart"><a className='p-2'>Carrito</a></Link>
                    <Link href="/login"><a className='p-2'>Ingresar</a></Link>
                </div>

            </nav>
        </header>
        <main className='container m-auto mt-4 px-4' >{children}</main>
        <footer className='flex h-10 justify-center item-center shadow-inner ' >
          <p>Copyright © 2022 DeMadera.Uy</p>
        </footer>
      </div>
    </>
  );
}
