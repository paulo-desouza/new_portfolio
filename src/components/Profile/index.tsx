import { Container, Img, Left, Center} from "./styles";

export function Profile() { 
    return <Container> 

      <Img />
      <Left>
        <h1>Paulo de Souza</h1>
        
          
        <a href="https://www.github.com/paulo-desouza/" target="_blank" rel="noreferrer">
           Github
        </a>
         &nbsp;&nbsp; | &nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/paulo-desouza/" target="_blank" rel="noreferrer">
          Linkedin 
        </a>
        &nbsp;&nbsp; | &nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/paulo-desouza/" target="_blank" rel="noreferrer">
          Resume 
        </a>
        <br />
        paulo@desouza-tech.com 
        
        </Left>
      
      

      <Left>
        <h2>Main Skills</h2>
        
          <ul>

            <li>Backend Developer</li>
            <li>Network Engineer</li>
            <li>Linux Administration</li>
          
          </ul>
        
      </Left>

      <Left>
        <h2>Certifications</h2>
        
          <ul>
            
            <li><a href="#">Python PCPP1</a></li>
            <li><a href="#">WatchGuard Network Security</a></li>
            <li><a href="#">CompTIA A+</a></li>

          </ul>
        
      </Left>

      <Left>
        <h2>Experience</h2> 
          <h4>Viener4Gates</h4>
          <div>Network Engineer <br />Dec 2022 - Dec 2023 </div>
          <br />

          <h4>Matri Truck</h4>
          <div>Logistics Operations Manager <br />Jan 2021 - Dec 2022 </div>
          <br />
      </Left>

    </Container>;

}
