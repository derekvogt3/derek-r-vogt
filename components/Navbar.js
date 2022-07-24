import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link href="/">Derek R. Vogt</Link>
      <div className="sub-nav">
        <Link href="/Projects">Projects</Link>
        <Link href="/Resume">Resume</Link>
        <Link href="/Blog">Blog</Link>
        <Link href="/About">About</Link>
      </div>
    </div>
  );
}
