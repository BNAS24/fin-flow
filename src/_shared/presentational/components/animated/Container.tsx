import Container, { ContainerProps } from "@mui/material/Container";
import { animated } from "@react-spring/web";

const WrappedContainer = animated(Container);

export default function AnimatedContainer(props: ContainerProps) {
  return <WrappedContainer {...props} />;
}
