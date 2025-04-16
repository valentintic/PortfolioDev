import IndexNutriSmart from '../../assets/NutriSmart/Index.jpg';
import AlimentosNutriSmart from '../../assets/NutriSmart/Alimentos.jpg';
import Dietas from '../../assets/NutriSmart/Dietas.jpg';
import Historial from '../../assets/NutriSmart/Historial.jpg';
import InformacionUsuario from '../../assets/NutriSmart/InformacionUsuario.jpg';
import Perfil from '../../assets/NutriSmart/Perfil.jpg';
import EscanerQR from '../../assets/NutriSmart/EscanerQR.jpg';

export const skillsData = {
  frontend: [
    { 
      id: 1,
      title: 'projects.nutrismart.title',
      description: 'projects.nutrismart.description',
      images: [
        IndexNutriSmart,
        AlimentosNutriSmart,
        Dietas,
        Historial,
        InformacionUsuario,
        Perfil,
        EscanerQR
      ],
      technologies: ['React 18', 'Redux', 'Google Fit API', 'OAuth 2.0', 'JWT'],
      year: 2023,
      repository: 'https://github.com/valentintic/DietasAutomaticas',
      demo: 'https://github.com/valentintic/DietasAutomaticas',
      role: 'Desarrollador Full Stack',
      features: [
        'projects.nutrismart.features.item1',
        'projects.nutrismart.features.item2',
        'projects.nutrismart.features.item3',
        'projects.nutrismart.features.item4',
        'projects.nutrismart.features.item5',
        'projects.nutrismart.features.item6',
        'projects.nutrismart.features.item7'
      ],
      challenges: 'projects.nutrismart.challenges'
    },
  ],
  backend: [
    {
      id: 4,
      title: 'Tajamar User Management', 
      description: 'Management system for user administration, teachers, and course resources with features for technical talks and access control. Created a system that streamlined administrative tasks by 35% and reduced resource allocation errors by 28%, while implementing access control features that improved security compliance by 40%.',
      images: [
        'https://picsum.photos/id/200/400/300',
        'https://picsum.photos/id/201/400/300',
        'https://picsum.photos/id/202/400/300'
      ],
      technologies: ['Java 21', 'Spring Boot', 'JWT', 'OAuth 2.0', 'C#', 'ASP.NET'],
      year: 2023,
      repository: 'https://github.com/valentintic/tajamar-user-management',
      role: 'Backend Developer',
      features: [
        'User administration and management',
        'Teacher resource allocation',
        'Course resources management',
        'Technical talks scheduling system',
        'Role-based access control',
        'Security compliance features'
      ],
      challenges: 'Implementing a secure and scalable access control system while maintaining ease of use',
      performance: {
        adminTaskEfficiency: 'Streamlined administrative tasks by 35%',
        resourceErrors: 'Reduced resource allocation errors by 28%',
        securityCompliance: 'Improved security compliance by 40%'
      }
    },
    { 
      id: 5,
      title: 'Auth Service', 
      description: 'Sistema de autenticación robusto implementado con Spring Boot, OAuth 2.0 y PostgreSQL para gestionar el acceso seguro a las aplicaciones. Soporta múltiples proveedores de identidad y autenticación multifactor.',
      images: [
        'https://picsum.photos/id/210/400/300',
        'https://picsum.photos/id/211/400/300',
        'https://picsum.photos/id/212/400/300'
      ],
      technologies: ['Spring Boot', 'OAuth 2.0', 'PostgreSQL', 'JWT'],
      year: 2022,
      repository: 'https://github.com/valentintic/auth-service',
      role: 'Backend Developer',
      features: [
        'Autenticación OAuth 2.0 y OpenID Connect',
        'Gestión de usuarios, roles y permisos',
        'Seguridad y encriptación de datos',
        'Autenticación multifactor (MFA)',
        'Single Sign-On (SSO) entre aplicaciones'
      ],
      challenges: 'Integración con múltiples proveedores de identidad manteniendo una experiencia unificada',
      performance: {
        throughput: '5,000 auth/s',
        latency: '<100ms',
        securityAudit: 'OWASP Top 10 compliant'
      }
    },
    { 
      id: 6,
      title: 'HelOps Web Applications', 
      description: 'Developed web applications using React and Java Spring Boot for Anadat Technology, with a focus on system performance optimization and reduced load times.',
      images: [
        'https://picsum.photos/id/213/400/300',
        'https://picsum.photos/id/214/400/300',
        'https://picsum.photos/id/215/400/300'
      ],
      technologies: ['React', 'Spring Boot', 'Java', 'AWS', 'Kubernetes'],
      year: 2024,
      repository: 'https://github.com/valentintic/helops-applications',
      role: 'Full Stack Developer',
      features: [
        'High-performance web applications',
        'Optimized system architecture',
        'Cloud infrastructure integration',
        'Authentication with JWT and OAuth 2.0',
        'Responsive UI with modern JavaScript frameworks'
      ],
      challenges: 'Optimizing application performance while maintaining scalability in cloud environments',
      performance: {
        systemPerformance: 'Increased by 7%',
        loadTimes: 'Reduced by 10%',
        deploymentTime: 'Reduced by 12%',
        downtime: 'Reduced by 10%'
      }
    },
  ],
  database: [
    { 
      id: 7,
      title: 'Gestor de Inventarios', 
      description: 'Aplicación para la gestión de inventarios desarrollada con PostgreSQL y Sequelize, facilitando el seguimiento y control de productos con análisis predictivo para optimizar stock.',
      images: [
        'https://picsum.photos/id/220/400/300',
        'https://picsum.photos/id/221/400/300',
        'https://picsum.photos/id/222/400/300'
      ],
      technologies: ['PostgreSQL', 'Sequelize', 'Express', 'Node.js'],
      year: 2022,
      repository: 'https://github.com/valentintic/gestor-inventarios',
      role: 'Full Stack Developer',
      features: [
        'CRUD completo de productos',
        'Reportes y estadísticas de inventario',
        'Predicción de demanda con algoritmos ML',
        'Gestión de proveedores y pedidos',
        'Alertas de stock mínimo inteligentes'
      ],
      challenges: 'Implementar un modelo predictivo preciso para anticipar la demanda de productos',
      performance: {
        queryTime: '<100ms para consultas complejas',
        dataIntegrity: '100% con validación en múltiples niveles',
        backups: 'Automáticos cada 6 horas'
      }
    },
    { 
      id: 8,
      title: 'Big Data Analytics', 
      description: 'Plataforma de análisis de datos que utiliza MongoDB y Mongoose para procesar grandes volúmenes de información, complementada con visualizaciones en Chart.js y capacidades de machine learning.',
      images: [
        'https://picsum.photos/id/230/400/300',
        'https://picsum.photos/id/231/400/300',
        'https://picsum.photos/id/232/400/300'
      ],
      technologies: ['MongoDB', 'Mongoose', 'Chart.js', 'TensorFlow.js', 'Node.js'],
      year: 2023,
      repository: 'https://github.com/valentintic/big-data-analytics',
      role: 'Data Engineer',
      features: [
        'Visualización interactiva de datos',
        'Consultas avanzadas en MongoDB',
        'Integración con dashboards en tiempo real',
        'Análisis predictivo con TensorFlow.js',
        'ETL automatizado desde múltiples fuentes'
      ],
      challenges: 'Procesar y visualizar eficientemente conjuntos de datos de varios terabytes',
      performance: {
        throughput: 'Procesamiento de 50GB/hora',
        aggregation: 'Consultas complejas <200ms',
        scalability: 'Sharding automático basado en carga'
      }
    },
    { 
      id: 9,
      title: 'Data Warehouse Solution', 
      description: 'Sistema de almacenamiento de datos empresariales con SQL Server y Azure Synapse Analytics, diseñado para análisis de negocio y toma de decisiones basada en datos.',
      images: [
        'https://picsum.photos/id/233/400/300',
        'https://picsum.photos/id/234/400/300',
        'https://picsum.photos/id/235/400/300'
      ],
      technologies: ['SQL Server', 'Azure Synapse Analytics', 'SSIS', 'Power BI'],
      year: 2022,
      repository: 'https://github.com/valentintic/data-warehouse',
      role: 'BI Developer',
      features: [
        'Modelado dimensional optimizado',
        'ETL automatizado con SSIS',
        'Dashboards ejecutivos en Power BI',
        'Procesamiento paralelo para consultas complejas',
        'Integración con múltiples fuentes de datos'
      ],
      challenges: 'Diseñar un modelo dimensional que balanceara rendimiento y flexibilidad analítica',
      performance: {
        queryPerformance: '90% de consultas <3s',
        compressionRatio: '85% ahorro de espacio',
        freshness: 'Actualización incremental cada 15 minutos'
      }
    },
  ],
};

// Datos actualizados de experiencia profesional
export const experienceData = [
  {
    id: 1,
    company: 'HelOps, Anadat Technology',
    position: 'Full Stack Developer',
    period: '2024',
    location: 'Madrid, España',
    description: 'Desarrollo de aplicaciones web y optimización de infraestructuras cloud.',
    achievements: [
      'Developed web applications using React and Java Spring Boot, increasing system performance by 7% and reducing load times by 10%.',
      'Optimized AWS cloud infrastructures with Kubernetes, reducing deployment time by 12% and downtime by 10%.',
      'Implemented authentication systems with JWT and OAuth 2.0'
    ],
    technologies: ['React', 'Java Spring Boot', 'AWS', 'Kubernetes', 'JWT', 'OAuth 2.0']
  },
];

// Datos actualizados de educación
export const educationData = [
  {
    id: 1,
    institution: 'Tajamar, Madrid',
    degree: 'Master\'s in Full Stack + Multicloud Development',
    field: 'Advanced Web Development',
    period: '2024 - 2025',
    description: 'Advanced training in React, Angular, Vue.js, ASP.NET, C# and cloud architectures (AWS, Azure, Google Cloud).'
  },
  {
    id: 2,
    institution: 'IES Francisco de Quevedo',
    degree: 'Web Application Development',
    field: 'Web Development',
    period: '2022 - 2024',
    description: 'Training in web development, Java programming, Spring Boot, JavaScript, and database management with MySQL and MongoDB.'
  }
];

// Datos actualizados de certificaciones
export const certificationData = [
  {
    id: 1,
    name: 'AWS Certified Developer - Associate (DVA-C02)',
    issuer: 'Amazon Web Services',
    date: '2023',
    description: 'Certifies skills in developing and deploying applications on AWS, including Lambda, API Gateway, and DynamoDB.'
  },
  {
    id: 2,
    name: 'Microsoft Certified: Azure Developer Associate (AZ-204)',
    issuer: 'Microsoft',
    date: '2023',
    description: 'Validates knowledge in Azure solution development, including functions, containers, and security.'
  },
  {
    id: 3,
    name: 'PowerPlatform (PL-400)',
    issuer: 'Microsoft',
    date: '2023',
    description: 'Microsoft official certification in Power Platform solution development.'
  }
];

// Datos actualizados de habilidades técnicas con niveles de competencia
export const technicalSkillsData = {
  languages: [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'Java (17-21)', level: 90 },
    { name: 'Python', level: 75 },
    { name: 'C#', level: 90 }
  ],
  frontend: [
    { name: 'React', level: 95 },
    { name: 'Vue.js', level: 90 },
    { name: 'Angular', level: 85 },
    { name: 'HTML5/CSS3', level: 95 },
    { name: 'Redux', level: 90 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Thymeleaf', level: 80 },
  ],
  backend: [
    { name: 'Java Spring Boot', level: 95 },
    { name: 'ASP.NET Core', level: 85 },
  ],
  database: [
    { name: 'MongoDB', level: 95 },
    { name: 'MySQL', level: 90 },
    { name: 'Oracle', level: 85 },
    { name: 'SQL Server', level: 85 }
  ],
  devops: [
    { name: 'Docker', level: 95 },
    { name: 'Kubernetes', level: 90 },
    { name: 'Terraform', level: 85 },
    { name: 'AWS', level: 90 },
    { name: 'Azure', level: 85 },
    { name: 'Google Cloud', level: 80 }
  ],
  ai: [
    { name: 'TensorFlow', level: 85 },
    { name: 'PyTorch', level: 80 },
    { name: 'OpenCV', level: 75 },
    { name: 'Machine Learning', level: 80 }
  ],
  softSkills: [
    { name: 'Communication', level: 95 },
    { name: 'Problem-Solving', level: 90 },
    { name: 'Adaptability', level: 95 },
    { name: 'Leadership', level: 85 },
    { name: 'Time Management', level: 90 },
    { name: 'Critical Thinking', level: 95 }
  ]
};

// Información de contacto
export const contactInfo = {
  phone: '+34 603 14 89 70',
  email: 'valentinpreutesei@gmail.com',
  location: 'Madrid, Spain',
  linkedin: 'https://www.linkedin.com/in/valentinpreutesei/',
  github: 'https://github.com/valentintic'
};