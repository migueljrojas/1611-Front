import Head from 'next/head';
import HomeView from '../views/home';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home({ homeData }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,200;0,400;0,600;0,800;1,200;1,400;1,600;1,800&display=swap" rel="stylesheet" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Header />
      <HomeView data={homeData} />
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://dieciseisonce.herokuapp.com/home')
  const homeData = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      homeData,
    },
    revalidate: 1,
  }
}
