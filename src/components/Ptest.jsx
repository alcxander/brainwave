import { MouseParallax } from "react-just-parallax";
import { useRef, useEffect, useState } from "react";

const PTest = () => {
  const ref = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure this only runs on the client (after DOM is mounted)
    console.log("we're here its now true");
    setIsClient(true);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        height: "100vh",
        background: "#111",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isClient && (
        <MouseParallax strength={0.7} parallaxContainerRef={ref}>
          <div
            style={{
              width: 100,
              height: 100,
              background: "cyan",
              borderRadius: "50%",
            }}
          />
        </MouseParallax>
      )}
    </div>
  );
};

export default PTest;
