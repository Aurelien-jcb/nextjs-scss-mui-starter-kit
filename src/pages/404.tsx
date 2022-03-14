import Link from 'next/link';
import Head from "next/head";
import style from '../../styles/pages/404.module.scss';
const NotFound = () => {

    return (
        <div className={style.container}>
            <Head>
                <title>404</title>
                <meta name="keywords" content="404" />
            </Head>
            <div className={style.main}>
                <h1>Oouuups</h1>
                <p>La page demandée n&apos;est pas accessible...</p>
                <Link href='/' passHref>
                    <p className={style.backBtn}>
                    Revenir à la page d&apos;accueil
                    </p>
                </Link>
            </div>
        </div>
    );
}

export default NotFound;