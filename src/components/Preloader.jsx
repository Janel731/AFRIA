import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "../assets/AFRIALogo2.svg?react";
import "./Preloader.css";
const Preloader = ({ navLogoRef, onFinish }) => {
  const logoRef = useRef();
  const progressRef = useRef(null);
  const percentRef = useRef(null);
  const preload = useRef();

  useGSAP(() => {
    gsap.fromTo(
      logoRef.current,
      {
        opacity: 0,
        scale: 0.9,
        y: 20,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
    );

    const loader = {
      progress: 0,
    };

    const updateLoader = () => {
      progressRef.current.style.width = `${loader.progress}%`;
      percentRef.current.textContent = `${Math.round(loader.progress)}%`;
    };

    const tl = gsap.timeline();

    tl.to(loader, {
      progress: 18,
      duration: 0.3,
      onUpdate: updateLoader,
    });

    tl.to({}, { duration: 0.15 });

    tl.to(loader, {
      progress: 43,
      duration: 1,
      onUpdate: updateLoader,
    });

    tl.to({}, { duration: 0.2 });

    tl.to(loader, {
      progress: 67,
      duration: 0.8,
      onUpdate: updateLoader,
    });

    tl.to({}, { duration: 0.1 });

    tl.to(loader, {
      progress: 82,
      duration: 0.6,
      onUpdate: updateLoader,
    });

    tl.to({}, { duration: 0.25 });

    tl.to(loader, {
      progress: 100,
      duration: 1,
      ease: "power2.out",
      onUpdate: updateLoader,
    });

    // attendre avant de calculer la position
    tl.call(() => {
      if (!navLogoRef.current) return;

      const start = logoRef.current.getBoundingClientRect();
      const end = navLogoRef.current.getBoundingClientRect();

      const startCenterX = start.left + start.width / 2;
      const startCenterY = start.top + start.height / 2;

      const endCenterX = end.left + end.width / 2;
      const endCenterY = end.top + end.height / 2;

      const x = endCenterX - startCenterX;
      const y = endCenterY - startCenterY;

      const scaleX = end.width / start.width;
      const scaleY = end.height / start.height;

      gsap.to(logoRef.current, {
        x: x,
        y: y,
        scaleX: scaleX,
        scaleY: scaleY,
        duration: 1,
        ease: "power3.inOut",
      });
    });

    // tl.to(".logo, .progress, .percent", {
    //   opacity: 0,
    //   y: -10,
    //   duration: 0.3,
    //   stagger: 0.05,
    // });

    tl.to(preload.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    });

    tl.set(preload.current, {
      display: "none",
    });

    tl.call(() => {
      onFinish();
    });

    // tl.to(preload, {
    //   opacity: 0,
    //   duration: 1,
    //   ease: "power2.out",
    // });
  });

  return (
    <div ref={preload} className="preloader font-poppins-bold">
      <div ref={logoRef} className="logo">
        <Logo className="w-[300px] h-auto" />
      </div>

      <div className="progress">
        <div ref={progressRef} className="progress-fill"></div>
      </div>

      <p ref={percentRef} className="percent">
        0%
      </p>
    </div>
  );
};

export default Preloader;
