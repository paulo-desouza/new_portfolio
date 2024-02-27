import { Container, Img, Left, Center} from "./styles";

export function Profile() { 
    return <Container> 

      <Img />
      
      <Center>
        <h1>Paulo de Souza</h1>
        
          
        <a href="https://www.github.com/paulo-desouza/" target="_blank" rel="noreferrer">
           Github
        </a>
         &nbsp;&nbsp; | &nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/paulo-desouza/" target="_blank" rel="noreferrer">
          Linkedin 
        </a>
        &nbsp;&nbsp; | &nbsp;&nbsp;
        <a href="https://drive.google.com/file/d/1IN5XVr8fRWy6cfMt83c7R9Vtf1mGkl5Y/view?usp=sharing" target="_blank" rel="noreferrer">
          Resume 
        </a>
        <br />
        paulo@desouza-tech.com 
        
        
        
        </Center>
      
      

      <Left>
        <h2>Skills</h2>
        
          <ul>

            <li>Back-End Development</li>
            <li>Network Engineering</li>
            <li>DevOps Engineering</li>
            <li>Linux Administration</li>
            <li>Front-End Development</li>
          
          </ul>
        
      </Left>

      <Left>
        <h2>Certifications</h2>
        
          <ul>
            <li><a href="https://drive.google.com/file/d/1URRzfIAqatNB5U48kOjIQ9Y1PDdFxPbW/view?usp=sharing" target="_blank">WatchGuard Network Security</a></li>
            <li><a href="https://drive.google.com/file/d/1KMcmJIEaWBiOzBGu3r3zKIbyI3clNYX1/view?usp=sharing" target="_blank">CompTIA A+</a></li>

          </ul>
        
      </Left>

      <Left>
        <h2>Experience</h2> 
          <h4>Viener4Gates</h4>
          <div>Network Engineer <br /> Dec 2022 - Dec 2023 </div>
          <br />

          <h4>Matri Truck</h4>
          <div>Logistics Operations Manager <br /> Dec 2020 - Dec 2022 </div>
          <br />
      </Left>

    </Container>;

}
