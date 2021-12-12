// ============================================
// De volgende stap:
// Een willekeurige SVG afbeelding,
// en dan ook met viewbox in stukjes hakken
// ============================================

const shapes = {
  rect: "0 0",
  circle: "100 0",
  triangle: "200 0",
  diamond: "0 90",
  angledtriangle: "100 90",
  roundedrect: "200 90"
};

export default function App() {
  return (
    <>
      <Shapes selected={shapes.rect} />
      <Shapes selected={shapes.circle} />
      <Shapes selected={shapes.triangle} />
      <Shapes selected={shapes.diamond} />
      <Shapes selected={shapes.angledtriangle} />
      <Shapes selected={shapes.roundedrect} />
      <Shapes />
    </>
  );
}

function Shapes({ selected }) {
  let viewportDimensions = { width: 90, height: 90 };
  if (!selected) {
    viewportDimensions = { width: 290, height: 180 };
  }

  const viewboxCoordinates = selected ?? "0 0";

  const appearance = {
    stroke: "blue",
    strokeWidth: "4",
    fill: "transparent"
  };

  return (
    <svg
      viewBox={`${viewboxCoordinates} ${viewportDimensions.width} ${viewportDimensions.height}`}
      width={viewportDimensions.width}
      height={viewportDimensions.height}
      style={{ border: "3px solid red" }}
    >
      <rect x="10" y="10" width="70" height="70" {...appearance} />

      <circle cx="145" cy="45" r="35" {...appearance} />

      <polygon points="245,10 280,80 210,80 245,10" {...appearance} />

      <polygon points="10,135 45,100 80,135 45,170" {...appearance} />

      <polygon points="110,170 110,100 180,170" {...appearance} />

      <rect
        x="210"
        y="100"
        width="70"
        height="70"
        rx="20"
        ry="20"
        {...appearance}
      />
    </svg>
  );
}
