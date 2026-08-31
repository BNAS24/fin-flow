import { useBodyStyle } from "@/_context/BodyStyleProvider";
import { useSpring } from "@react-spring/web";
import { useState } from "react";

interface OpenMenuAnimationProps {
  width?: string;
  identifier: string;
}

export const useMenu = ({
  identifier,
  width = "100%",
}: OpenMenuAnimationProps) => {
  const { isChildActive, handleBodyStyle } = useBodyStyle();
  const [animationComplete, setAnimationComplete] = useState(true);

  const menuSpring = useSpring({
    width: isChildActive(identifier) ? width : "0%",
    onStart: () => {
      setAnimationComplete(false);
    },
    onRest: (result) => {
      if (result.finished) {
        setAnimationComplete(!isChildActive(identifier));
      }
    },
    config: { duration: 100 },
  });

  return {
    menuSpring: menuSpring as unknown as React.CSSProperties,
    handleBodyStyle,
    animationComplete,
  };
};
