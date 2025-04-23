import Project from './Project';
import Result from './Result';
import Manage from './Manage';
import Create from './Create';
import HeroSection from './HeroSection';
import { useRef } from 'react';
import { useInView } from '../../hooks/useInView';

const Main = () => {
  const refs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const { isVisibleIndex } = useInView({ refs, options: { threshold: 0.6 } });

  const handleScrollToSection = (index: number) => {
    if (refs[index].current) {
      refs[index].current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <HeroSection handleScrollToSection={handleScrollToSection} />
      <Project ref={refs[0]} isVisible={isVisibleIndex === 0} />
      <Create ref={refs[1]} isVisible={isVisibleIndex === 1} />
      <Manage ref={refs[2]} isVisible={isVisibleIndex === 2} />
      <Result ref={refs[3]} isVisible={isVisibleIndex === 3} />
    </>
  );
};

export default Main;
