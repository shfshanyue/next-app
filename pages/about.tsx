import React from 'react'
import { Helmet } from 'react-helmet'
import Link from 'next/link'

export default function About() {
  return (
    <div className="p-4">
      <Helmet
        title="About | Hello next.js!"
        meta={[{ property: 'og:title', content: 'About' }]}
      />
      <h1>
        About the World
      </h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  )
}
