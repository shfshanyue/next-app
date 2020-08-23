import { Helmet } from 'react-helmet'
import Link from 'next/link'

const Home = () => (
  <>
    <Helmet
      title="Home | Hello next.js!"
      meta={[{ property: 'og:title', content: 'Home' }]}
    />
    <h1 className="text-center">Shanyue</h1>
    <Link href="/about">
      <a>About</a>
    </Link>
  </>
)

export default Home
