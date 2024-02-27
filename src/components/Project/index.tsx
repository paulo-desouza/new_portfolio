import { Container, Img, Img2, Img3, Img4 } from "./styles";
import Image from "next/image";

export function Project1() {
  return (
    <Container>
      <h2>Project 1</h2>

      
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        dignissimos veritatis ex sint ipsam rerum eveniet, possimus placeat
        saepe eum. Deserunt, omnis? Harum repellat, quod fuga ab minus
        necessitatibus iure.
      </div>
    </Container>
  );
}



export function AWS_Web_Server() {
  return (
    <Container>
      <h2><a href="https://github.com/paulo-desouza/ubuntu-prep" target="blank">AWS Web Server</a></h2>

      
      <div>
        AWS EC2 instance running my Django Applications with Gunicorn and NGINX, as well as a mySQL Database, Ghost Framework Blog, 
        and this very portfolio, which was developed with the Next.JS framework. <br /> <br />
        The server's configuration and deployment of applications is fully automated, making use of Docker, docker-compose and Bash Scripts. <br />
        <br />
        Leveraging tools such as Prometheus, Loki, Snort and Grafana, I can monitor the server for performance, 
         bugs, crashes, or potential breaches and security concerns by collecting and managing log data.

        <br /> <br />
        This server is a means for me to learn new tools and technologies as well as serving some of the other projects listed in this portfolio. 
      </div>

  
    </Container>
  );
}




export function Django_Reception() {
  return (
    <Container>
      <h2><a href="https://github.com/paulo-desouza/reception-app-django" target="blank">Django - Reception App</a></h2>

      
      <div>

        This product enables a condominium receptionist to log in and check guests in and out of the 
        condominium, displaying a dashboard with information about each registered guest, as well as how many 
        guests have visited in a certain month, how many guests are actively visiting the housing complex, and more. 
        <br />
        

      </div><br />

      <a href="/img/django1.png">
   <Img/>
                      </a>
<a href="/img/django2.png">
    <Img2/>
                      </a>
  
    </Container>
  );
}


export function Django_RE() {
  return (
    <Container>
      <h2><a href="https://github.com/paulo-desouza/newspace360_django" target="blank" >Django - Real Estate Photography</a></h2>

      
      <div>

        This website will enable serving content only to the accounts who own said content in the system. 
        <br /><br />
        While it is simpler than the previous project, it is a model that can be used by various business models to post and share paid content with the specified paying customer only. 
        <br /><br />
        Currently in production, used by a local real estate photography company to serve photographs, videos and 3D tours of houses to their paying customers. 

        <br />


      </div>

  
    </Container>
  );
}

export function Data() {
  return (
    <Container>
      <h2>Data Visualization</h2>

      
      <div>

        Worked with a fast-growing franchise to automate their Reporting efforts. By maintaining close contact with the customers, I was able to 
        understand their needs and provide efficient solutions from concept to deployment. 
        <br /><br />
        Pulling data from their multiple vendors and databases through API calls and scraping spreadsheets, I enabled 
        accurate and fast reporting for the company. This was essential in their decision-making process, seeing as their staff 
        was manually gathering and generating these reports before, allowing for human-errors to influence the final report. 

        <br /><br />
        One of these applications was for a new report, where I designed and built the data collection as well as the reporting software.

        <br /><br />
        I deployed these data applications to their Windows Servers, and ran Github Actions Runners on a Ubuntu Server in our office, in order to enable continuous integration
        for updates and bug-fixes.   
        <br /><br />


       
        

      </div>
      <a href="/img/data1.png">
          <Img3/>
        </a>
        <br />

        <a href="/img/data3.png">
         <Img4/>
        </a>

        
    </Container>
  );
}

export function Network() {
  return (
    <Container>
      <h2>Firewall Central Management</h2>

      
      <div>

        Lead the effort to cut over all the Watchguard firewalls and access points of a growing franchise from local management to central, cloud management, ensuring minimal downtime and hardening the security of the company. 
        <br /><br />
        From central management, I prepared templates to automate the configuration of these firewalls, greatly increasing the efficiency of our setup process for equipping new offices. 
        <br /><br />
        Troubleshooting network issues was also streamlined once the new system was in place. 
        
        

      </div>
    </Container>
  );
}


export function Discord() {
  return (
    <Container>
      <h2><a href="https://github.com/paulo-desouza/discord-music-bot" target="blank">Music Player Bot for Discord</a></h2>

      
      <div>

        Leveraging the Discord API, FFMPEG, and youtube_dl, this Bot will receive a command from any user in the Group Voice Call, requesting a music to be played from YouTube. <br /><br />
        The program will then search and scrape YouTube to find the requested tune, return a JSON file with all the page's contents, and play the song in the call for all participants to enjoy together.  
       
         Currently developing the functionality to upload, download and play music from the Bot server's storage. 
        <br /><br />
        Created for educational purposes only.

      </div>
  
    </Container>
  );
}