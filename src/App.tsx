import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const blocks = document.querySelectorAll(".block");

    blocks.forEach((block, index) => {
      gsap.to(block, {
        scrollTrigger: {
          trigger: block,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinSpacing: false,
          markers: true,
        },
        scale: 0.8,
        opacity: 0,
      });

      gsap.to(block, {
        scrollTrigger: {
          trigger: block,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: -200,
      });
    });

    gsap.utils.toArray(".text").forEach((text, i) => {
      gsap.fromTo(
        text,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section className="trigger">
      <div
        className="block-1 block"
        style={{ width: "100%", height: "100vh", backgroundColor: "red" }}
      >
        <div className="text">Section 1</div>
      </div>
      <div
        className="block-2 block"
        style={{ width: "100%", height: "100vh", backgroundColor: "blue" }}
      >
        <div className="text">Section 2</div>
      </div>
      <div
        className="block-3 block"
        style={{ width: "100%", height: "100vh", backgroundColor: "green" }}
      >
        <div className="text">Section 3</div>
      </div>
      <div
        className="block-4 block"
        style={{ width: "1200px", height: "100vh", backgroundColor: "yellow" }}
      >
        <div className="text">Section 4</div>
      </div>
    </section>
  );
}

export default App;
