"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.8, 0.95] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.6], [isMobile ? 12 : 20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 0.6], [0, isMobile ? -40 : -80]);

  return (
    <div
      className="h-auto min-h-[40rem] sm:min-h-[50rem] md:min-h-[60rem] flex items-start justify-center relative px-2 sm:p-4 md:p-20 pt-0"
      ref={containerRef}
    >
      <div
        className="w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center relative z-10"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl mt-6 sm:mt-8 md:mt-12 mx-auto h-[18rem] sm:h-[24rem] md:h-[36rem] w-full border-2 sm:border-4 border-[#6C6C6C] p-1.5 sm:p-2 md:p-6 bg-[#222222] rounded-[20px] sm:rounded-[30px] shadow-2xl will-change-transform"
    >
      <div className="h-full w-full overflow-hidden rounded-xl sm:rounded-2xl bg-white">
        {children}
      </div>
    </motion.div>
  );
};
