import { ReactNode } from 'react';
import { Container, Container2 } from './styles'
import { useMediaQuery } from '@mui/material';

interface HomeContainerProps {
    children: ReactNode;
}

export function HomeContainer({children}: HomeContainerProps) {
  const ourMediaQuery = useMediaQuery('(min-width:1000px)');
  
  if (ourMediaQuery == true)
{
return <Container> {children} </Container>
} 
else
{
return <Container2> {children} </Container2>
}

}


