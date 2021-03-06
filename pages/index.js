import Link from "next/link";

function Welcome(props) {
return <div>
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
<h1>Hello, welcome to the home page! </h1>

<img src="/propic.png" alt="my image" id="propic"/>

<style jsx>{`
#propic {
    border-radius: 8px;
    padding: 5px;
    width: 150px;
} 

#nav {
background: lightgray; }

@media (max-width: 600px) { 
    
div {
background: gray; }

}
`}</style>

</div>
}
export default Welcome;
