import Hero from "./components/home/Hero";
import LatestBlogsandPosts from "./components/home/LatestBlogsandPosts";
import LatestListedProperties from "./components/home/LatestListedProperties";
import Testimonials from "./components/home/Testimonials";
import WhoWereAre from "./components/home/WhoWereAre";

export default function Home() {
  return (
    <>
    <Hero/>
    <WhoWereAre/>
    <LatestListedProperties/>
    <LatestBlogsandPosts/>
    <Testimonials/>
    </>
  );
}
