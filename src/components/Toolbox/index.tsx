import { useMediaQuery } from "@mui/material";
import { Expand } from "../Expand";
import { Container, Logo, LogoBox, LogoBox2, LogoContainer } from "./styles";
import Image from "next/image";

export function Toolbox() {
  const ourMediaQuery = useMediaQuery('(min-width:1000px)');
    
    if (ourMediaQuery == true)
    {
      return (
        <Container>
          <h1>Main Tools</h1>
          <div>
            <LogoBox>
              <Expand>
                
                <Logo>
                  <a href="https://www.linux.org/" target="_blank" rel="noreferrer">
                    <Image
                      src="/logos/linux.png"
                      alt="Linux"
                      width="55"
                      height="55"
                    /> <br /> Linux
                  </a>
                </Logo>
              </Expand>
              <Expand>
                <Logo>
                  <a
                    href="https://www.gnu.org/software/bash/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/logos/bash.png"
                      alt="Bash"
                      width="55"
                      height="55"
                    />
                    <br /> Bash
                  </a>
                </Logo>
              </Expand>
              <Expand>
                <Logo>
                  <a href="https://www.python.org" target="_blank" rel="noreferrer">
                    <Image
                      src="/logos/python.png"
                      alt="Python"
                      width="55"
                      height="55"
                    /> <br /> Python
                  </a>
                </Logo>
              </Expand>
            </LogoBox>

            <LogoBox>
              <Expand>
                <Logo>
                  <a
                    href="https://www.docker.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/logos/docker.png"
                      alt="Docker"
                      width="55"
                      height="55"
                    /> <br /> Docker
                  </a>
                </Logo>
              </Expand>
              <Expand>
                <Logo>
                  <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                    <Image src="/logos/git.png" alt="Git" width="55" height="55" />
                  <br />Git
                  </a>
                </Logo>
                </Expand>
            
              <Expand>
                <Logo>
                  <a
                    href="https://www.djangoproject.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="https://cdn.iconscout.com/icon/free/png-256/django-1-282754.png"
                      alt="Django"
                      width="55"
                      height="55"
                    /> <br /> Django
                  </a>
                </Logo>
              </Expand>
            </LogoBox>

            <LogoBox>
              <Expand>
                <Logo>
                  <a
                    href="https://docs.github.com/en/actions"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="https://invisprints.github.io/blog/images/fastpages_posts/actions/actions_logo.png"
                      alt="Github Actions"
                      width="55"
                      height="55"
                    /> <br /> Github <br /> Actions
                  </a>
                </Logo>
              </Expand>
              <Expand>
                <Logo>
                  <a
                    href="https://aws.amazon.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src="/logos/aws.png" alt="AWS" width="55" height="55" /> <br /> AWS
                  </a>
                </Logo>
              </Expand>
              <Expand>
                <Logo>
                  <a
                    href="https://nginx.org/en/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src="https://www.smythsys.es/wordpress/wp-content/uploads/2017/06/nginx-logo.png" alt="NGINX" width="55" height="55" />
                    <br /> nginx
                  </a>
                </Logo>
              </Expand>
            </LogoBox>
            <LogoBox>
              <Expand>
                <Logo>
                  <a href="https://prometheus.io/" target="_blank" rel="noreferrer">
                    <Image
                      src="/logos/prometheus.png"
                      alt="Prometheus"
                      width="55"
                      height="55"
                    /> <br />Prometheus
                  </a>
                </Logo>
              </Expand>
              <Expand>
                <Logo>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/javascript" target="_blank" rel="noreferrer">
                    <Image
                      src="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-1.png"
                      alt="JavaScript"
                      width="55"
                      height="55"
                    /> <br /> JavaScript
                  </a>
                </Logo>
              </Expand>
              <Expand>
                <Logo>
                  <a
                    href="https://react.dev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="https://logospng.org/download/react/logo-react-1024.png"
                      alt="React"
                      width="55"
                      height="55"
                    /> <br />React
                  </a>
                </Logo>
              </Expand>
            </LogoBox>
          </div>
        </Container>
      );
    }
  else
  {
    return (
      <Container>
        <h1>Main Tools</h1>
        <div>
            <LogoBox2>
              <Expand>
                
                <Logo>
                  <a href="https://www.linux.org/" target="_blank" rel="noreferrer">
                    <Image
                      src="/logos/linux.png"
                      alt="Linux"
                      width="55"
                      height="55"
                    />
                  </a>
                </Logo>
              </Expand>
              <Expand>
                <Logo>
                  <a
                    href="https://www.gnu.org/software/bash/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/logos/bash.png"
                      alt="Bash"
                      width="55"
                      height="55"
                    />
                  </a>
                </Logo>
              </Expand>
              <Expand>
                <Logo>
                  <a href="https://www.python.org" target="_blank" rel="noreferrer">
                    <Image
                      src="/logos/python.png"
                      alt="Python"
                      width="55"
                      height="55"
                    />
                  </a>
                </Logo>
              </Expand>
            </LogoBox2>

            <LogoBox2>
              <Expand>
                <Logo>
                  <a
                    href="https://www.docker.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/logos/docker.png"
                      alt="Docker"
                      width="55"
                      height="55"
                    />
                  </a>
                </Logo>
              </Expand>
              <Expand>
                <Logo>
                  <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                    <Image src="/logos/git.png" alt="Git" width="55" height="55" />
                  
                  </a>
                </Logo>
                </Expand>
            
              <Expand>
                <Logo>
                  <a
                    href="https://www.djangoproject.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="https://cdn.iconscout.com/icon/free/png-256/django-1-282754.png"
                      alt="Django"
                      width="55"
                      height="55"
                    />
                  </a>
                </Logo>
              </Expand>
            </LogoBox2>

            <LogoBox2>
              <Expand>
                <Logo>
                  <a
                    href="https://docs.github.com/en/actions"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="https://invisprints.github.io/blog/images/fastpages_posts/actions/actions_logo.png"
                      alt="Github Actions"
                      width="55"
                      height="55"
                    />
                  </a>
                </Logo>
              </Expand>
              <Expand>
                <Logo>
                  <a
                    href="https://aws.amazon.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src="/logos/aws.png" alt="AWS" width="55" height="55" />
                  </a>
                </Logo>
              </Expand>
              <Expand>
                <Logo>
                  <a
                    href="https://aws.amazon.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src="https://www.smythsys.es/wordpress/wp-content/uploads/2017/06/nginx-logo.png" alt="NGINX" width="55" height="55" />
                  </a>
                </Logo>
              </Expand>
            </LogoBox2>
            <LogoBox2>
              <Expand>
                <Logo>
                  <a href="https://prometheus.io/" target="_blank" rel="noreferrer">
                    <Image
                      src="/logos/prometheus.png"
                      alt="Prometheus"
                      width="55"
                      height="55"
                    />
                  </a>
                </Logo>
              </Expand>
              <Expand>
                <Logo>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/javascript" target="_blank" rel="noreferrer">
                    <Image
                      src="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-1.png"
                      alt="JavaScript"
                      width="55"
                      height="55"
                    />
                  </a>
                </Logo>
              </Expand>
              <Expand>
                <Logo>
                  <a
                    href="https://react.dev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="https://logospng.org/download/react/logo-react-1024.png"
                      alt="React"
                      width="55"
                      height="55"
                    />
                  </a>
                </Logo>
              </Expand>
            </LogoBox2>
          </div>
      </Container>
    );
  }
}
