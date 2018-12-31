import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'
import Testimonials from './testimonials-css-modules'

export default () => (
  <div>
    <Header />
    <section>
      <img src="https://source.unsplash.com/random" alt="" />
    </section>
    <section>
      <Container>
        <h2>My first time staying at someone else's home</h2>
        <p>
          I remember my first time staying in someone else's home. I didn't know
          how it would be, how it would feel, or what to expect. Then I arrived.
          I was in Seattle for a programming conference. My host greeted me at
          the door, showed me around his home, and made me feel welcomed. That
          is exactly how I want my guest to feel, weclomed.
        </p>
      </Container>
    </section>
    <Testimonials />
    <Footer />
  </div>
)
