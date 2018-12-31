import React from 'react'
import { Link } from 'gatsby'
import Container from '../components/container'

export default () => (
  <header style={{ height: `70px`, backgroundColor: `red` }}>
    <Container>
      <h1>VRDC</h1>
      <nav>
        <ul classname="nav">
          <Link to="/about/">About</Link>
          <Link to="/testimonials/">Testimonials</Link>
          <Link to="/faq/">FAQ</Link>
          <Link to="/ttd/">TTD</Link>
          <Link to="/blog/">Blog</Link>
          <Link to="/contact/">Contact</Link>
        </ul>
      </nav>
    </Container>
  </header>
)
