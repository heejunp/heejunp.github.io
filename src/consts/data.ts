import { TECH_TAGS } from './tags';
import buzzBookImage from '../assets/buzzbook.png';
import jipPickTImage from '../assets/jippickt.png';
import linkyImage from '../assets/linky.jpg';
import jangsaManLabImage from '../assets/jangsamanlab.png';

export const experiences = [
  {
    title: "FullStack Engineer",
    company: "(주)비즈웍스",
    period: "2025.08 - 2025.12",
    description: [
      "Developed 'JangsaManLab', a comprehensive business management platform including attendance, payroll, and insurance systems.",
      "Designed Web Design Workflow using MCP."
    ]
  },
  {
    title: "Software & AI Track Trainee",
    company: "Samsung SW AI Academy",
    period: "2025.01 - 2025.08",
    description: [
      "Developed 'Linky', an autonomous delivery robot using SLAM and AI for park environments.",
      "Developed 'JipPickT', an AI-powered real estate recommendation platform.",
      "Intensive training in AI, Java/Spring Backend, Vue.js and Software Engineering."
    ]
  },
  {
    title: "Backend Engineering Trainee",
    company: "NHN Academy",
    period: "2024.02 - 2024.08",
    description: [
      "Completed advanced Java/Spring Backend & CS training",
      "Led MSA project 'Buzz Book': Designed distributed system and cloud infrastructure."
    ]
  },
  {
    title: "Graduation",
    company: "Chosun University",
    period: "2024.02",
    description: [
      "Bachelor's Degree in Electronic Engineering."
    ]
  }
];

export const experiencesKo = [
  {
    title: "FullStack Engineer",
    company: "(주)비즈웍스",
    period: "2025.08 - 2025.12",
    description: [
      "'장사만랩' 개발: 근태 관리, 급여 정산, 4대 보험 등 통합 업무 관리 플랫폼 개발",
      "MCP를 활용한 웹 디자인 워크플로우 구성"
    ]
  },
  {
    title: "Software & AI Track Trainee",
    company: "Samsung SW AI Academy",
    period: "2025.01 - 2025.08",
    description: [
      "자율 주행 배달 로봇 'Linky' 개발 (SLAM 및 AI 활용)",
      "AI 기반 부동산 추천 플랫폼 'JipPickT' 개발",
      "AI, Java/Spring Backend, Vue.js 및 알고리즘 집중 교육 수료"
    ]
  },
  {
    title: "Backend Engineering Trainee",
    company: "NHN Academy",
    period: "2024.02 - 2024.08",
    description: [
      "MSA 프로젝트 'Buzz Book' 리드: MSA 설계 및 클라우드 인프라 구축 주도",
      "Java/Spring Backend 및 CS 심화 과정 수료",
    ]
  },
  {
    title: "대학교 졸업",
    company: "조선대학교",
    period: "2024.02",
    description: [
      "전자공학과 학사 졸업"
    ]
  }
];

export const ProjectCategory = {
  BACKEND: "BackEnd Development",
  FULLSTACK: "Full Stack Development",
  INFRASTRUCTURE: "Infrastucture Development",
  AI: "AI Application",
  PRODUCTIVITY: "Productivity Tool",
  CREATIVE: "Creative Dev"
} as const;

export const projects = [
  {
    title: "Buzz Book",
    category: ProjectCategory.BACKEND,
    period: "2024.05 - 2024.08",
    teamSize: "6 Members (Team Lead)",
    description: "Microservices Architecture (MSA) project functions as a scalable bookstore platform. Orchestrated distributed services using Spring Boot and RabbitMQ, integrating Elasticsearch for search and Redis for caching.",
    tags: [TECH_TAGS.MSA, TECH_TAGS.SPRING_BOOT, TECH_TAGS.MYSQL, TECH_TAGS.REDIS, TECH_TAGS.RABBITMQ, TECH_TAGS.ELASTICSEARCH, TECH_TAGS.GITHUB_ACTIONS, TECH_TAGS.NGINX],
    image: buzzBookImage,
    top: true,
    link: "https://github.com/nhnacademy-be6-AA",
    work: [
      "Coupon & Point System: Developed RESTful APIs for coupon and point management, utilizing RabbitMQ to ensure reliable coupon issuance under high traffic.",
      "MSA Infrastructure: Architected the microservices environment using Spring Cloud Eureka for service discovery and Spring Cloud Gateway for centralized routing.",
      "DevOps & Deployment: Deployed services on NHN Cloud infrastructure and established an automated CI/CD pipeline using GitHub Actions."
    ],
    review: "While the tech stack was suggested by the bootcamp, my team and I engaged in in-depth studies to rigorously debate 'why these technologies?' We independently verified that adopting RabbitMQ was the key to decoupling services and ensuring transactional consistency. This process went beyond mere implementation; it was a defining moment in developing my engineering capability to validate and justify architectural decisions."
  },
  {
    title: "JipPickT",
    category: ProjectCategory.FULLSTACK,
    period: "2025.04 ~ 2025.06",
    teamSize: "2 Members (Team Lead)",
    description: "An AI-powered real estate platform that recommends properties, summarizes key listing details, and evaluates market value to assist effective decision-making.",
    tags: [TECH_TAGS.OPENAI, TECH_TAGS.SPRING_BOOT, TECH_TAGS.VUEJS, TECH_TAGS.TAILWIND, TECH_TAGS.MYSQL, TECH_TAGS.REDIS, TECH_TAGS.JENKINS, TECH_TAGS.NGINX],
    image: jipPickTImage,
    link: "https://github.com/JipPickT",
    work: [
      "Full Stack Development: Developed the entire application using Vue.js 3 for the frontend and Spring Boot for the backend, ensuring seamless integration.",
      "Infrastructure & CI/CD: Configured a self-hosted deployment environment using a Mini PC and automated the build/deployment pipeline with Jenkins."
    ],
    review: "Building a full-stack application from scratch with a small team taught me the importance of rapid prototyping and efficient communication. Configuring a self-hosted CI/CD pipeline on a Mini PC was a unique hands-on experience in managing bare-metal infrastructure."
  },
  {
    title: "Linky",
    category: ProjectCategory.INFRASTRUCTURE,
    period: "2025.07 - 2025.08",
    teamSize: "6 Members (Team Member)",
    description: "Autonomous delivery robot designed for park environments, utilizing SLAM for self-driving navigation and providing AI-enhanced delivery services.",
    tags: [TECH_TAGS.KUBERNETES, TECH_TAGS.JENKINS, TECH_TAGS.ARGOCD, TECH_TAGS.SLAM, TECH_TAGS.OPENAI, TECH_TAGS.OCR, TECH_TAGS.FACENET,TECH_TAGS.WEBRTC, TECH_TAGS.REDIS, TECH_TAGS.VUEJS, TECH_TAGS.TAILWIND],
    image: linkyImage,
    work: [
      "User Authentication: Developed secure Member API and implemented OAuth 2.0 social login functionality.",
      "Real-time Communication: Built a real-time chat service for user-admin interaction using STOMP protocol.",
      "AI Chatbot: Integrated Large Language Models (LLM) to provide an intelligent interactive chatbot service.",
      "GitOps Infrastructure: Established a robust GitOps workflow for continuous deployment using Kubernetes, ArgoCD, and Jenkins."
    ],
    review: "Working on an autonomous robot project integrated with complex software systems was fascinating. Implementing GitOps with ArgoCD significantly streamlined our deployment process, allowing us to focus more on feature development and robot logic."
  },
  {
    title: "JangsaManLab",
    category: ProjectCategory.FULLSTACK,
    period: "2025.08 - 2025.12",
    teamSize: "1 Member (Full Stack)",
    description: "A comprehensive business management platform enabling owners to focus on operations by automating attendance tracking, payroll calculations, team communication, and insurance management.",
    tags: [TECH_TAGS.SVELTEKIT, TECH_TAGS.FIREBASE, TECH_TAGS.PWA, TECH_TAGS.TAILWIND, TECH_TAGS.MYSQL, TECH_TAGS.DOCKER, TECH_TAGS.NGINX],
    image: jangsaManLabImage,
    link: "https://xn--yj2bn4b37j8vh.com/employer/",
    work: [
      "Full Stack Development: Leveraged SvelteKit for both SSR/SEO optimized frontend and serverless backend functionality.",
      "AI-Assisted Design Workflow: Established a rapid Web Design-to-Code workflow using Figma and Cursor AI tools.",
      "PWA Implementation: Configured Progressive Web App features to provide a native app-like experience on mobile devices.",
      "Component Refactoring: Refactored initial monolithic code into reusable components to improve maintainability and scalability."
    ],
    review: "As a solo developer, I maximized productivity by adopting 'Vibe Coding' with AI tools. However, I learned that over-reliance and accepting AI suggestions without critical review could lead to unexpected bugs. This experience taught me that while AI is a powerful accelerator, the final verification of logic remains the engineer's responsibility. I also reaffirmed the importance of systematic component design and refactoring for long-term maintenance."
  }
];

export const projectsKo = [
  {
    title: "Buzz Book",
    category: ProjectCategory.BACKEND,
    period: "2024.05 - 2024.08",
    teamSize: "6명 (팀장)",
    description: "MSA 아키텍처 기반의 확장 가능한 온라인 서점 플랫폼입니다. Spring Boot와 RabbitMQ를 사용하여 분산 서비스를 조율하고, Elasticsearch와 Redis를 통합하여 검색 및 캐싱 성능을 최적화했습니다.",
    tags: [TECH_TAGS.MSA, TECH_TAGS.SPRING_BOOT, TECH_TAGS.MYSQL, TECH_TAGS.REDIS, TECH_TAGS.RABBITMQ, TECH_TAGS.ELASTICSEARCH, TECH_TAGS.GITHUB_ACTIONS, TECH_TAGS.NGINX],
    image: buzzBookImage,
    link: "https://github.com/nhnacademy-be6-AA",
    work: [
      "쿠폰 및 포인트 시스템: RabbitMQ를 활용하여 대규모 트래픽 상황에서도 안정적인 쿠폰 발급이 가능한 RESTful API 구축",
      "MSA 인프라 구축: Spring Cloud Eureka(서비스 디스커버리)와 Gateway(라우팅)를 활용하여 마이크로서비스 환경 설계 및 구축",
      "DevOps: NHN Cloud 인프라에 서비스 배포 및 GitHub Actions를 이용한 CI/CD 파이프라인 구축"
    ],
    review: "부트캠프에서 제안된 기술 스택이었지만, 팀원들과 스터디를 통해 '왜 이 기술이어야 하는가?'를 치열하게 고민했습니다. 특히 RabbitMQ 도입이 서비스 간 강한 결합을 끊고 트랜잭션 일관성을 보장하는 핵심 열쇠임을 스스로 증명하며 아키텍처에 적용했습니다. 이 과정은 단순히 기술을 사용하는 것을 넘어, 아키텍처 설계의 타당성을 검증하는 엔지니어링 역량을 기르는 계기가 되었습니다."
  },
  {
    title: "JipPickT",
    category: ProjectCategory.FULLSTACK,
    period: "2025.04 ~ 2025.06",
    teamSize: "2명 (팀장)",
    description: "AI 기반 부동산 추천 플랫폼으로, 매물 정보를 요약하고 적정 시세를 분석하여 사용자의 효율적인 의사결정을 돕습니다.",
    tags: [TECH_TAGS.OPENAI, TECH_TAGS.SPRING_BOOT, TECH_TAGS.VUEJS, TECH_TAGS.TAILWIND, TECH_TAGS.MYSQL, TECH_TAGS.REDIS, TECH_TAGS.JENKINS, TECH_TAGS.NGINX],
    image: jipPickTImage,
    link: "https://github.com/JipPickT",
    work: [
      "풀스택 개발: Frontend(Vue.js 3)와 Backend(Spring Boot)를 모두 담당하여 전체 서비스 기능 구현",
      "인프라 & CI/CD: Mini PC를 활용하여 자체 호스팅 환경을 구축하고 Jenkins로 자동화 된 배포 파이프라인 구성"
    ],
    review: "소규모 팀으로 빠른 프로토타이핑과 효율적인 소통의 중요성을 배웠습니다. 또한 베어메탈(Mini PC) 장비에 직접 인프라를 구축하고 CI/CD를 구성해보며 서버 운영에 대한 이해도를 높였습니다."
  },
  {
    title: "Linky",
    category: ProjectCategory.INFRASTRUCTURE,
    period: "2025.07 - 2025.08",
    teamSize: "6명 (팀원)",
    description: "공원 환경을 위한 자율 주행 배달 로봇으로, SLAM 기술을 활용한 자율 주행과 AI 기반 배달 편의 서비스를 제공합니다.",
    tags: [TECH_TAGS.KUBERNETES, TECH_TAGS.JENKINS, TECH_TAGS.ARGOCD, TECH_TAGS.SLAM, TECH_TAGS.OPENAI, TECH_TAGS.OCR, TECH_TAGS.FACENET,TECH_TAGS.WEBRTC, TECH_TAGS.REDIS, TECH_TAGS.VUEJS, TECH_TAGS.TAILWIND],
    image: linkyImage,
    work: [
      "사용자 인증: 보안성 높은 회원 API 개발 및 OAuth 2.0 소셜 로그인 기능 구현",
      "실시간 통신: STOMP 프로토콜을 활용하여 관리자와 로봇/사용자 간의 실시간 채팅 서비스 개발",
      "AI 챗봇: LLM을 연동하여 지능형 대화형 챗봇 서비스 구현",
      "GitOps 인프라: Kubernetes, ArgoCD, Jenkins를 연동하여 지속적 배포(CD)가 가능한 GitOps 워크플로우 구축"
    ],
    review: "하드웨어와 소프트웨어가 결합된 로봇 프로젝트는 매우 흥미로웠습니다. ArgoCD를 활용한 GitOps 방식은 배포 프로세스를 획기적으로 단순화시켜주었고, 팀이 기능 개발에 더 집중할 수 있게 해주었습니다."
  },
  {
    title: "JangsaManLab",
    category: ProjectCategory.FULLSTACK,
    period: "2025.08 - 2025.12",
    teamSize: "1명",
    description: "사장님들의 운영 업무를 돕는 통합 비즈니스 관리 플랫폼입니다. 근태 관리, 급여 정산, 팀 소통, 보험 관리 등을 자동화합니다.",
    tags: [TECH_TAGS.SVELTEKIT, TECH_TAGS.FIREBASE, TECH_TAGS.PWA, TECH_TAGS.TAILWIND, TECH_TAGS.MYSQL, TECH_TAGS.DOCKER, TECH_TAGS.NGINX],
    image: jangsaManLabImage,
    link: "https://xn--yj2bn4b37j8vh.com/employer/",
    work: [
      "풀스택 개발: SvelteKit을 사용하여 SSR/SEO 최적화 및 서버리스 백엔드 로직 구현",
      "AI 활용 워크플로우: Figma와 Cursor AI를 활용하여 디자인부터 코드 구현까지의 생산성을 극대화한 워크플로우 정립",
      "PWA 도입: 모바일 환경에서도 네이티브 앱처럼 사용할 수 있도록 PWA 기능 구현",
      "컴포넌트 리팩토링: 초기 모놀리식 구조를 재사용 가능한 컴포넌트 단위로 리팩토링하여 유지보수성 향상"
    ],
    review: "1인 개발로서 처음으로 '바이브 코딩'을 적용하여 생산성을 극대화했습니다. 하지만 AI 의존도가 높아지며 충분한 고민 없이 코드를 수용(Accept)해 예기치 못한 버그를 마주하기도 했습니다. 이를 통해 AI는 강력한 도구지만, 코드의 논리적 결함을 걸러내는 것은 결국 개발자의 몫임을 뼈저리게 느꼈습니다. 이와 더불어 체계적인 컴포넌트 설계와 리팩토링이 장기적인 유지보수에 얼마나 중요한지도 깊이 깨달았습니다."
  }
];

export const aboutMe = {
  name: "Park Hee Jun",
  role: "Backend & Infrastructure Engineer",
  
  description: `
  Embracing the philosophy "Everything fails, all the time," I engineer systems designed for resilience.
  
  In the 'Buzz Book' project, I architected a Microservices Architecture utilizing RabbitMQ to ensure reliable coupon issuance under high traffic, effectively eliminating Single Points of Failure (SPOF).
  Furthermore, through the 'Linky' autonomous robot project, I established a GitOps workflow with ArgoCD and Kubernetes, creating a self-healing infrastructure that automatically recovers from deployment failures.
  My goal is to build architectures that ensure business continuity by preemptively addressing potential failures.`,
  
  descriptionKo: `
  "모든 시스템은 결국 실패한다(Everything fails). 그렇기에 저는 실패해도 멈추지 않는 시스템을 설계합니다."
  
  'Buzz Book' 프로젝트에서 RabbitMQ를 활용한 이벤트 기반 MSA를 구축하여 대규모 트래픽 상황에서도 안정적인 쿠폰 발급을 보장하고, 단일 실패 지점(SPOF)을 제거하여 시스템의 신뢰성을 높였습니다.
  또한 'Linky' 자율 주행 로봇 프로젝트에서는 Kubernetes와 ArgoCD를 도입하여 자가 치유(Self-healing)가 가능한 GitOps 인프라를 설계했습니다.
  장애가 발생하지 않기를 기도하는 것이 아니라, 언제든 복구 가능한 견고한 아키텍처를 통해 비즈니스의 연속성을 지키는 엔지니어가 되고자 합니다.`,
  
  email: "heejun.park@proton.me",
  githubUrl: "https://github.com/heejunp",
  blogUrl: "https://blog.heejunp.com"
};
