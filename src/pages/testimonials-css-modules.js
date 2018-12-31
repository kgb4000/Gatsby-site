import React from 'react'
import Header from '../components/header'
import Container from '../components/container'
import styles from './testimonials-css-modules.module.css'

const Testimonial = props => (
  <div className={styles.testimonial}>
    <div className={styles.description}>
      <p className={styles.ratings}>{props.ratings}</p>
      <p className={styles.excerpt}>{props.excerpt}</p>
      <img src={props.avatar} className={styles.avatar} alt="" />
      <p className={styles.username}>{props.username}</p>
    </div>
  </div>
)

export default () => (
  <div>
    <Container>
      <Testimonial
        ratings="&#9733; &#9733; &#9733; &#9733; &#9733;"
        username="August"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="Kester was a fabulous host, and was very flexible - we had a very
            early flight, and he let us drop off luggage and check in early, which was very appreciated. He also checked in with me regularly to make sure everything was okay,and responded quickly to my many questions, both before and during the stay :) The place itself was wonderful for our gang of 3, very comfortable. There is some construction going on (as of June 2017), but I get up early, and it never bothered me. Would definitely stay here again."
      />
    </Container>
    <Container>
      <Testimonial
        ratings="&#9733; &#9733; &#9733; &#9733; &#9733;"
        username="August"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="Kester is a really nice person who will help you everything and give you any tips. We love the rooms. The house is new, clean and quiet. Hope we will live here next time."
      />
    </Container>
    <Container>
      <Testimonial
        ratings="&#9733; &#9733; &#9733; &#9733; &#9733;"
        username="August"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="Kesters home is exactly as the pictures showed he was easy to get in contact with and was a great host I enjoyed the stay. I would book again"
      />
    </Container>
  </div>
)
