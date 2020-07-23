import { Helmet } from 'react-helmet'
import Link from 'next/link'

export default () => (
  <>
    <Helmet
      title="Home | Hello next.js!"
      meta={[{ property: 'og:title', content: 'Home' }]}
    />
    <h1>Hello World!</h1>
    <Link href="/about">
      <a>About</a>
    </Link>
  </>
)
