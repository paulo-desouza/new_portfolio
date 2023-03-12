import { ReactNode } from "react";
import { Container, Container2 } from "./styles";
import { useMediaQuery } from "@mui/material";

interface Column1Props {
    children: ReactNode;
}

export function Column1({children}: Column1Props) {
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