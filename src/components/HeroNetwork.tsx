import { useEffect, useRef } from "react";

interface LogoNode {
  id: string;
  label: string;
  x: number;
  y: number;
  r: number;
}

const centerNode: LogoNode = {
  id: "futuremedia",
  label: "FUTUREMEDIA",
  x: 50,
  y: 50,
  r: 12,
};

const brandNodes: LogoNode[] = [
  { id: "radiowave", label: "RADIO\nWAVE 96.7", x: 10, y: 22, r: 6 },
  { id: "99fm", label: "99\nFM", x: 28, y: 15, r: 5.5 },
  { id: "freshfm", label: "FRESH\nFM", x: 20, y: 48, r: 6 },
  { id: "nova", label: "NOVA\n103.5 FM", x: 8, y: 68, r: 6 },
  { id: "onefm", label: "ONE\nFM", x: 35, y: 72, r: 6 },
  { id: "so", label: "S•", x: 65, y: 18, r: 4.5 },
  { id: "omulunga", label: "Radio\nOmulunga", x: 88, y: 18, r: 6 },
  { id: "learnon", label: "LEARNON\nONE", x: 80, y: 48, r: 6 },
  { id: "shopbeat", label: "Shop\nBeat", x: 93, y: 42, r: 5 },
  { id: "adbot", label: "adbot", x: 72, y: 68, r: 5 },
  { id: "promobasket", label: "PROMO\nBASKET", x: 87, y: 75, r: 5.5 },
];

const pulseColors = ["#00e5ff", "#ff4081", "#76ff03", "#ffea00", "#e040fb", "#ff6e40"];

const HeroNetwork = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Create animated pulses
    const lines = svg.querySelectorAll(".network-line");
    const pulses: SVGCircleElement[] = [];

    lines.forEach((line, i) => {
      const pathEl = line as SVGLineElement;
      const x1 = parseFloat(pathEl.getAttribute("x1") || "0");
      const y1 = parseFloat(pathEl.getAttribute("y1") || "0");
      const x2 = parseFloat(pathEl.getAttribute("x2") || "0");
      const y2 = parseFloat(pathEl.getAttribute("y2") || "0");

      const pulse = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      pulse.setAttribute("r", "3");
      pulse.setAttribute("fill", pulseColors[i % pulseColors.length]);
      pulse.setAttribute("opacity", "0");
      pulse.style.filter = `drop-shadow(0 0 6px ${pulseColors[i % pulseColors.length]})`;
      svg.appendChild(pulse);
      pulses.push(pulse);

      const duration = 2500 + Math.random() * 2000;
      const delay = Math.random() * 3000;
      let start: number | null = null;

      const animate = (timestamp: number) => {
        if (!start) start = timestamp;
        const elapsed = ((timestamp - start - delay) % duration + duration) % duration;
        const progress = elapsed / duration;

        const cx = x1 + (x2 - x1) * progress;
        const cy = y1 + (y2 - y1) * progress;
        pulse.setAttribute("cx", cx.toString());
        pulse.setAttribute("cy", cy.toString());

        const fadeIn = Math.min(progress / 0.1, 1);
        const fadeOut = Math.min((1 - progress) / 0.1, 1);
        pulse.setAttribute("opacity", (Math.min(fadeIn, fadeOut) * 0.9).toString());

        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    });

    return () => {
      pulses.forEach((p) => p.remove());
    };
  }, []);

  return (
    <section className="w-full relative overflow-hidden" style={{ aspectRatio: "1920/550" }}>
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, hsl(245 35% 22%) 0%, hsl(260 30% 14%) 50%, hsl(240 25% 12%) 100%)",
        }}
      />

      {/* Subtle grid/glow */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(120, 100, 200, 0.3) 0%, transparent 60%)",
        }}
      />

      <svg
        ref={svgRef}
        viewBox="0 0 100 100"
        className="relative w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Lines from center to each brand */}
        {brandNodes.map((node, i) => (
          <line
            key={`line-${node.id}`}
            className="network-line"
            x1={centerNode.x}
            y1={centerNode.y}
            x2={node.x}
            y2={node.y}
            stroke={pulseColors[i % pulseColors.length]}
            strokeWidth="0.15"
            opacity="0.4"
          />
        ))}

        {/* Some cross-connections */}
        {[
          [0, 1], [1, 2], [2, 3], [3, 4], [5, 6], [6, 7], [7, 8], [9, 10], [4, 9],
        ].map(([a, b], i) => (
          <line
            key={`cross-${i}`}
            className="network-line"
            x1={brandNodes[a].x}
            y1={brandNodes[a].y}
            x2={brandNodes[b].x}
            y2={brandNodes[b].y}
            stroke={pulseColors[(i + 3) % pulseColors.length]}
            strokeWidth="0.12"
            opacity="0.25"
          />
        ))}

        {/* Center circle */}
        <circle cx={centerNode.x} cy={centerNode.y} r={centerNode.r} fill="white" />
        <text
          x={centerNode.x}
          y={centerNode.y + 0.5}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="2.8"
          fontFamily="Montserrat, sans-serif"
          fontWeight="400"
          letterSpacing="0.3"
          fill="hsl(210, 25%, 20%)"
        >
          FUTUREMEDIA
        </text>

        {/* Brand nodes */}
        {brandNodes.map((node) => (
          <g key={node.id} className="animate-float" style={{ animationDelay: `${Math.random() * 3}s` }}>
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="hsl(210, 20%, 30%)"
              opacity="0.85"
            />
            {node.label.split("\n").map((line, li, arr) => (
              <text
                key={`${node.id}-${li}`}
                x={node.x}
                y={node.y + (li - (arr.length - 1) / 2) * 2.2}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={node.r > 5.5 ? "1.6" : "1.4"}
                fontFamily="Montserrat, sans-serif"
                fontWeight="700"
                fill="white"
              >
                {line}
              </text>
            ))}
          </g>
        ))}
      </svg>
    </section>
  );
};

export default HeroNetwork;
