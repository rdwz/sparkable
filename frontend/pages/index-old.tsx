import Head from 'next/head';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdMenu } from 'react-icons/io';
import { RiExternalLinkLine } from 'react-icons/ri';
import styles from '../styles/HomeOld.module.scss';

export async function getStaticProps() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_API;
  const res = await fetch(`${baseUrl}/links/`);
  const links = await res.json();
  return {
    props: {
      links,
    },
  };
}

const newestFirst = async (sort: string) => {
  console.log('this is here');
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_API;
  const res = await fetch(`${baseUrl}/links/?sort=-date`);
  const links = await res.json();
  console.log(links);
  return links;
};

export default function Home({ links }: any) {
  return (
    <div className="container">
      <Head>
        <title>Sparkable</title>
        <meta name="description" content="Generated by butterfy" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <i id="burger">
          <IoMdMenu />
        </i>
        <h1>Sparkable</h1>
        <div className="button">
          <Link href="/signin">
            <button>Login</button>
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <div>
          Sparkable is a collection of insightful content, sourced and curated
          by the people.<br></br>
        </div>
        <div>
          <div>
            <select
              className={styles.sort}
              onChange={() => newestFirst('newest first')}
            >
              <option className="dropdown-content" value="random">
                Random
              </option>
              <option className="dropdown-content" value="newest first">
                Newest First
              </option>
            </select>
          </div>
        </div>
        <div className="break">
          <hr />
        </div>

        <div id="results">{links.total} results</div>

        <div className={styles.grid}>
          {links.links.map(
            ({ title, link, username, image }: any, i: number) => {
              const url = new URL(link);
              const domain = url.hostname.replace('www.', '');

              //PAR OR IMPAR
              if (i % 2 == 0) {
                return (
                  <div className={styles.card}>
                    <div className={styles.cardText}>
                      <h2>{title}</h2>
                      <p>Submitted by @{username}</p>
                      <p>
                        <a
                          target="_blank"
                          href={link}
                          rel="noopener noreferrer"
                        >
                          {domain}
                          <RiExternalLinkLine />
                        </a>
                      </p>
                    </div>
                    <div className={styles.cardImage}>
                      <img src="https://i.picsum.photos/id/599/200/200.jpg?hmac=2WLKs3sxIsaEQ-6WZaa6YMxgl6ZC4cNnid0aqupm2is"></img>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className={styles.card}>
                    <div className={styles.cardText}>
                      <h2>{title}</h2>
                      <p>Submitted by @{username}</p>
                      <p>
                        <a
                          target="_blank"
                          href={link}
                          rel="noopener noreferrer"
                        >
                          {domain}
                          <RiExternalLinkLine />
                        </a>
                      </p>
                    </div>
                  </div>
                );
              }
            },
          )}
        </div>
      </main>
    </div>
  );
}
