import { PropsWithChildren } from "react";

const StickyContainer = ({ children }: PropsWithChildren) => {
  return <div className="w-full h-full absolute top-0 left-0 ">{children}</div>;
};

export default StickyContainer;
