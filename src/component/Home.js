import './Home.css';


function Home() {
  return (
    <div className="home">

      

     {/*  <nav className="header">
        <h2 className="logo">Aswinth</h2>

        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/project">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
 */}
     
      <div className="home-details">
        
        <h1 className="home-title">Hi, I'm Aswinth 👋</h1>
        
        <h2 className="home-role">MERN Stack Developer</h2>
        
        <p className="home-description">
          I build modern and responsive web applications using React, Node.js, and MongoDB.
        </p>

        <div className="home-buttons">
          <button className="btn-primary">View Projects</button>
          <button className="btn-secondary">Contact Me</button>
        </div>

      </div>

    </div>
  );
}

export default Home;