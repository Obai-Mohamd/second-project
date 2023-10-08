import React from 'react'
import Nav from './assets/nav'
import Card from './assets/crad'
import Hero from './assets/hero'
import data from './data'
export default function App() {

return (
    <div>
        <Nav />
        <Hero />
        <section className="cards-list">
        {data.map(item => {
      return (
        <Card
          key= {item.id}
          item = {item} />
      )
    })}
     </section>
    </div>
)
}


