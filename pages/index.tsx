import { Helmet } from 'react-helmet'
import Link from 'next/link'

const Home = () => (
  <div className="p-4">
    <Helmet
      title="Home | Hello next.js!"
      meta={[{ property: 'og:title', content: 'Home' }]}
    />
    <h1>Shanyue</h1>
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
)

export default Home
