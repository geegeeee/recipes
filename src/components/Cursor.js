import { useEffect, useState } from "react";

export default function FancyCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const clickDown = () => setClicked(true);
    const clickUp = () => setClicked(false);
    const mouseOver = () => setHovered(true);
    const mouseOut = () => setHovered(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", clickDown);
    window.addEventListener("mouseup", clickUp);

    const hoverables = document.querySelectorAll("a, button, .hover-target");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", mouseOver);
      el.addEventListener("mouseleave", mouseOut);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", clickDown);
      window.removeEventListener("mouseup", clickUp);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", mouseOver);
        el.removeEventListener("mouseleave", mouseOut);
      });
    };
  }, []);

  const size = clicked ? 8 : hovered ? 36 : 16;
  const color = hovered ? "bg-pink-500" : "bg-blue-500";

  return (
    <div
      className={`pointer-events-none fixed top-0 left-0 rounded-full mix-blend-difference transition-all duration-100 ease-out ${color} z-50`}
      style={{
        width: size,
        height: size,
        transform: `translate(${pos.x - size / 2}px, ${pos.y - size / 2}px)`
      }}
    />
  );
}
