import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function Header() {
  return (
    <header className="header">
      <img src={heroImg} className="hero-img" alt="Hero" />
      <h1 className="title">React Blog</h1>
      <p className="subtitle">Here to learn and grow! :D</p>
    </header>
  )
}

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
        Hi Im Hayden, this is my reach blog.
      </p>
    </section>
  )
}

function Article({ title, body }) {
  return (
    <article className="article">
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  )
}

function ArticleList() {
  const articles = [
    {
      title: "What I Learned Today",
      body: "Today I learned how components work and how JSX renders UI."
    },
    {
      title: "My First Dynamic Clock",
      body: "I built a live updating clock using react yesterday!"
    },
    {
      title: "What props do.",
      body: "Props let you pass data into components. It's super useful!"
    }
  ]

  return (
    <section className="articles">
      <h2>Latest Articles</h2>
      {articles.map((a, i) => (
        <Article key={i} title={a.title} body={a.body} />
      ))}
    </section>
  )
}

function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <ArticleList />
<br></br>
      <footer className="footer">
       this is a footer
        <p>Made with React and Vite</p>
      </footer>
    </div>
  )
}

export default App
