import { MotionProps } from 'framer-motion'

const defaultProps = {
  animate: 'enter',
  initial: 'initial'
}

const arrowAnimations = (directionForward?: boolean): MotionProps => ({
  ...defaultProps,
  variants: {
    initial: { x: directionForward ? 32 : -32 },
    enter: { x: 0, transition: { type: 'spring', bounce: 0.5 } },
    exit: { x: directionForward ? 32 : -32, transition: { type: 'tween' } }
  }
})

const stepAnimations = (step: number): MotionProps => ({
  ...defaultProps,
  variants: {
    initial: { x: 0 },
    enter: {
      x: `calc(-100% * (${step} - 1))`,
      transition: { type: 'tween', duration: 0.5 }
    }
  }
})

export { arrowAnimations, stepAnimations }
