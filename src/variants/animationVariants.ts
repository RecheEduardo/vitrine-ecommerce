import type { Variants, MotionProps } from 'framer-motion';

// container: configura o efeito de cascata entre filhos
export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// efeito pop-in com spring
export const popInVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

// efeito de fade in para cima com spring
export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 30,
    },
  },
};

// efeito de fade in para baixo
export const fadeInDownVariants: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 20,
    }
  }
};

// efeito de fade para o overlay
export const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
};

// props reutilizáveis para o container
export const containerMotionProps: MotionProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.4 },
  variants: containerVariants,
};

// props reutilizáveis para cada item
export const popInItemMotionProps: MotionProps = {
  variants: popInVariants,
};

export const fadeInUpItemMotionProps: MotionProps = {
  variants: fadeInUpVariants,
};