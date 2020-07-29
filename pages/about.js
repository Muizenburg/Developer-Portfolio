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

    <h3>Introduction</h3>
    <p>
      Over 7 years of experience working in marketing and operations management.
      Currently, I work as Mobi Warehouses’ Marketing and Operations Manager,
      improving sales experiences and marketing to our valued customers by using
      digital and traditional marketing tools. My operational responsibilities
      include oversight of the procurement/sale of goods and delivery of
      aftersales customer services. It is essentially making sure the
      organisation is running as well as it possibly can, with a smooth
      efficient service that meets the expectations and needs of our valued
      customers.
    </p>

    <h3>Education</h3>
    <ul>
      <li>
        {" "}
        Wits Business School - Masters in Management in the field of Digital
        Business (2019 - 2021){" "}
      </li>
      <li> Hyperion Dev - Full Stack Web Development (2020-2020)</li>
      <li>
        Wits Business School - Post Graduate Diploma in Business Management
        (2014 - 2015){" "}
      </li>
      <li> Mancosa - BCom Marketing and Business Management (2011-2013) </li>
    </ul>
    <h3>Work history</h3>
    <ul>
      <li>
        {" "}
        Mobi Warehouse - Marketing and Operations Administrator (2015 - current)
      </li>
      <li> Mobi Warehouse - Marketing and Operations Manager (2011 - 2015)</li>
    </ul>
    <h3>Passions</h3>
    <ul>
      <li>All things tech</li>
      <li>Gaming</li>
      <li>Drums</li>
    </ul>
    <style jsx>{`

#nav {
background: lightgray; }


`}</style>
  </div>
);
