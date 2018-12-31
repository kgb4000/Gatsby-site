import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'

export default () => (
  <div>
    <Header />
    <img src="https://source.unsplash.com/random" alt="" />
    <section>
      <Container>
        <h2>Your home away from home</h2>
        <p>
          Coming to the nation's capitol for vacation, to visit friends, or for
          a conference? Then stay at my home and have my entire home for you and
          your family to enjoy. My home is located near the heart of the DC
          action. It is just 1.2 miles away from the National Mall and all the
          museums, 3 miles to the Washington National's Baseball Stadium, and
          just 7 blocks to the Washington DC Convention Center.
        </p>
      </Container>
    </section>
    <section className="photos">
      <Container>
        <img src="https://source.unsplash.com/random" alt="" />
        <img src="https://source.unsplash.com/random" alt="" />
      </Container>
    </section>
    <section>
      <Container>
        <h2>Testimonials</h2>
        <p>
          Kester and his family were really friendly and welcoming. The house is
          brand-new, clean and complete. Location is very good too (4 metro
          stations to museums, memorials, etc) We would definitely come back
          with our 3 kids!
        </p>
      </Container>
    </section>
    <section>
      <Container>
        <img src="https://source.unsplash.com/random" alt="" />
      </Container>
    </section>
    <section>
      <Container>
        <h2>Location</h2>
        <p>
          Kester and his family were really friendly and welcoming. The house is
          brand-new, clean and complete. Location is very good too (4 metro
          stations to museums, memorials, etc) We would definitely come back
          with our 3 kids!
        </p>
      </Container>
    </section>
    <Footer />
  </div>
)
