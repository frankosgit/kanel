type AnimatedTextProps = {
  text: string | string[],
  el?: keyof JSX.IntrinsicElements,
  className?: string,
  once ?: boolean,
}

type HeroProps = {
  children: React.ReactNode,
}

type HeroElementProps = {
  children: React.ReactNode;
  className?: string,
}

