import { SectionTitle, Reveal } from './ui.jsx'
import { services } from '../data.js'

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionTitle aside="What I do">Services</SectionTitle>
        <div className="services">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="service" >
              <a href="#contact" className="service__inner" data-cursor="Let's talk">
                <span className="service__num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service__arrow">↗</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
