// import { Link } from 'react-router-dom'
import Division from "../components/Division";
import Hero from "../components/Hero";
import { images } from "../data/images";

export default function Home() {
  return (
    <div>
      <Hero />
      <Division side="left" image={images.businessAdvice.src} alt={images.businessAdvice.alt} author={images.businessAdvice.author}/>
      <Division side="right" image={images.globalReach.src} alt={images.globalReach.alt} author={images.globalReach.author}/>
      <Division side="left" image={images.techSolutions.src} alt={images.techSolutions.alt} author={images.techSolutions.author}/>
    </div>
  )
}
