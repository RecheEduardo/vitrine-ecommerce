import type { Variants, MotionProps } from 'framer-motion';

// container: configura o efeito de cascata entre filhos
export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

// item: efeito pop-in com spring
export const popInVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
};

// props reutilizáveis para o container
export const containerMotionProps: MotionProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true },
  variants: containerVariants,
};

// props reutilizáveis para cada item
export const itemMotionProps: MotionProps = {
  variants: popInVariants,
};