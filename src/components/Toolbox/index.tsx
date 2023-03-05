import { Container, Logo, LogoBox } from "./styles";
import Image from "next/image";

export function Toolbox() {
  return (
    <Container>
      <h1>Toolbox</h1>
      <p>
      <LogoBox>
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
          <Logo>
            <a
              href="https://www.gnu.org/software/bash/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/logos/bash.png" alt="Bash" width="55" height="55" />
            </a>
          </Logo>
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
        </LogoBox>

        <LogoBox>
          <Logo>
            <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
              <Image
                src="/logos/docker.png"
                alt="Docker"
                width="55"
                height="55"
              />
            </a>
          </Logo>
          <Logo>
            <a href="https://kubernetes.io/" target="_blank" rel="noreferrer">
              <Image
                src="/logos/kubernetes.png"
                alt="Kubernetes"
                width="55"
                height="55"
              />
            </a>
          </Logo>
          <Logo>
            <a href="https://www.ansible.com/" target="_blank" rel="noreferrer">
              <Image
                src="/logos/ansible.png"
                alt="Ansible"
                width="55"
                height="55"
              />
            </a>
          </Logo>
        </LogoBox>
        
        <LogoBox>
          <Logo>
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              <Image src="/logos/git.png" alt="Git" width="55" height="55" />
            </a>
          </Logo>
          <Logo>
            <a href="https://www.jenkins.io/" target="_blank" rel="noreferrer">
              <Image
                src="/logos/jenkins.png"
                alt="Jenkins"
                width="55"
                height="55"
              />
            </a>
          </Logo>

          <Logo>
            <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer">
              <Image src="/logos/aws.png" alt="AWS" width="55" height="55" />
            </a>
          </Logo>
        </LogoBox>
        <LogoBox>
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
          <Logo>
            <a href="https://grafana.com/" target="_blank" rel="noreferrer">
              <Image
                src="/logos/grafana.png"
                alt="Grafana"
                width="55"
                height="55"
              />
            </a>
          </Logo>
          <Logo>
            <a href="https://www.elastic.co/" target="_blank" rel="noreferrer">
              <Image
                src="/logos/elk.png"
                alt="ELK Stack"
                width="55"
                height="55"
              />
            </a>
          </Logo>
        </LogoBox>
      </p>
    </Container>
  );
}
