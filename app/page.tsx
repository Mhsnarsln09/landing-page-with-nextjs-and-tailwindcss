'use client';

import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import Hero from './components/home/Hero';
import LatestBlogsandPosts from './components/home/LatestBlogsandPosts';
import LatestListedProperties from './components/home/LatestListedProperties';
import Testimonials from './components/home/Testimonials';
import WhoWereAre from './components/home/WhoWereAre';

export default function Home() {
  // Ref'ler tanımlanıyor (null olabileceği belirtiliyor)
  const heroRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const listingsRef = useRef<HTMLDivElement | null>(null);
  const blogsRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  // Redux'tan hedef alınır
  const targetId = useSelector((state: RootState) => state.scroll.targetId);

  // Scroll işlemi
  if (targetId) {
    const refs: { [key: string]: React.RefObject<HTMLDivElement | null> } = {
      '/': heroRef,
      '/about': aboutRef,
      '/listings': listingsRef,
      '/blogs': blogsRef,
      '/services': servicesRef,
    };

    const targetRef = refs[targetId];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `${targetId}`);
    }
  }

  return (
    <>
      <div ref={heroRef} id="hero">
        <Hero />
      </div>
      <div ref={aboutRef} id="who-we-are">
        <WhoWereAre />
      </div>
      <div ref={listingsRef} id="latest-properties">
        <LatestListedProperties />
      </div>
      <div ref={blogsRef} id="latest-blogs">
        <LatestBlogsandPosts />
      </div>
      <div ref={servicesRef} id="testimonials">
        <Testimonials />
      </div>
    </>
  );
}
