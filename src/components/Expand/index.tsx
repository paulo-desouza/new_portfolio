import { motion } from "framer-motion"
import { ReactNode } from "react";
import { Container } from "./styles";

interface ExpandProps {
    children: ReactNode;
}

export const Expand = ({children}: ExpandProps) => (

    
        <motion.div layout whileHover={{ scale: 1.1 }}>

            <Container>
                <motion.div> {children} </motion.div>
            </Container>

        </motion.div>
    


)



export const Expand2 = ({children}: ExpandProps) => ( 

        <motion.div
          layout
          whileHover={{ scale: 1.6 }}
          initial={{ borderRadius: 50 }}
          className="parent"
        >
          <motion.div layout> {children} </motion.div>s
        </motion.div>

)


