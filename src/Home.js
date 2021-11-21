import './App.css';
import { useEffect, useState } from 'react';
function Home() {

  return (
    <div className="pic">
  
     <p class=" text-center">What is Astronomy?</p>
     <h1 className="astro-lede ">Astronomy is the study of everything in the universe beyond Earth’s atmosphere. That includes objects we can see with our naked eyes, like the Sun , the Moon , the planets, and the stars . It also includes objects we can only see with telescopes or other instruments, like faraway galaxies and tiny particles. And it even includes questions about things we can't see at all,
      like dark matter and dark energy .</h1>
      <p class=" text-center1">1. When we look up at the night sky, we see patterns and want to explain them</p>
      <img className="img-hom" src="https://www.amnh.org/var/ezflow_site/storage/images/media/amnh/images/explore/ology-images/astronomy/what-is-astronomy/constellations-labeled/4800250-3-eng-US/constellations-labeled_full_990.jpg"></img>
      <h4 className="astro-lede ">Early observers looking at the night sky noticed patterns in the stars . These patterns, which we call constellations, might appear to change place, but they don’t change shape. People around the world gave them names (like  Orion the hunter or Leo the lion) and told stories about them. You may know some of these stories as myths, or as astrology. Astrology can be fun to think about, but it’s different from astronomy. Astrology is not science! 

Early observers also noticed some bright objects in the sky that seem to wander around among the stars. The ancient Greek philosophers called these objects “planets,” which is Greek for “wanderers.” The planets are our near neighbors, and they do move. They orbit the Sun , just as Earth does.</h4>
<p class=" text-center1">2. The sky is vast and distances between objects can be very large</p>
<h4 className="astro-lede ">To the naked eye, the stars look like tiny points of light . But stars are not tiny—they're huge, burning balls of gas, like our Sun. They just appear small because they are so far away. The nearest star to our solar system is 4 light years away, which is 20 trillion miles.</h4>
<div className="star">
  <img className="star-img" src="https://www.amnh.org/var/ezflow_site/storage/images/media/amnh/images/explore/ology-images/astronomy/what-is-astronomy/big-dipper-from-earth/4800020-5-eng-US/big-dipper-from-earth.jpg"></img>
  <h4 className="astro-lede1">The stars may all look the same distance away, as if they were pasted on the wall of a giant dome. But that's an illusion too. Some stars are tens of thousands of light years farther away from Earth than others. You can see this illusion for yourself by building your own Big Dipper.</h4>
</div>
    </div>
   
  );
}

export default Home;