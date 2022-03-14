import style from '../../styles/pages/home.module.scss';
import type { NextPage } from 'next';
import Head from 'next/head';
const Home: NextPage = () => {
  return (
    <div className={style.container}>
    <Head>
        <title>Home</title>
        <meta name="keywords" content="home" />
    </Head>
    <div className={style.main}>
      <h1>
      My <a href="https://nextjs.org">Next.js! </a> 
        starter kit with Material UI and Sass
      </h1>
    </div>
    </div>
  )
}

export default Home
