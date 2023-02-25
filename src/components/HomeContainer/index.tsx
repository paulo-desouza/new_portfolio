import { ReactNode } from 'react';
import { Container } from './styles'

interface HomeContainerProps {
    children: ReactNode;
}

export function HomeContainer({ children }: HomeContainerProps) {
  return <Container>{children}</Container>;
}


