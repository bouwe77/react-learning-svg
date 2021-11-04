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
      <Shape shape={shapes.roundedrect} />
      <Shape />
    </>
  );
}

function Shape({ shape }) {
  let viewportDimensions = { width: 70, height: 70 };
  if (!shape) {
    viewportDimensions = { width: 270, height: 180 };
  }

  const viewboxCoordinates = shape;

  return (
    <svg
      viewBox={`${viewboxCoordinates} ${viewportDimensions.width} ${viewportDimensions.height}`}
      width={viewportDimensions.width}
      height={viewportDimensions.height}
      style={{ border: "3px solid red" }}
    >
      <rect x="0" y="0" width="70" height="70" />

      <circle cx="135" cy="35" r="35" />

      <polygon points="235,0 270,70 200,70 235,0" />

      <polygon points="0,125 35,90 70,125 35,160" />

      <polygon points="100,160 100,90 170,160" />

      <rect x="200" y="90" width="70" height="70" rx="20" ry="20" />
    </svg>
  );
}
