import Link from "next/link";

export default () => (
  <div>
   <div id="nav">
         <Link href="/index">
      <a>Home</a>
    </Link><br />
    <Link href="/about">
      <a>About</a>
    </Link><br />
    <Link href="/projects">
      <a>Projects</a>
    </Link><br />
    <Link href="/contact">
      <a>Contact</a>
    </Link><br />
    </div>
    
    <h3>Contact details</h3>

    <h4>Email</h4>
    <ul>
        <li>mattmuiz@gmail.com</li>
    </ul>

    <h4>Cell</h4>
    <ul>
        <li>0829614831</li>
    </ul>
    <style jsx>{`

#nav {
background: lightgray; }


`}</style>
  </div>
);
