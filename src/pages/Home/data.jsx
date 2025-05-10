import IndexNutriSmart from '../../assets/NutriSmart/Index.jpg';
import AlimentosNutriSmart from '../../assets/NutriSmart/Alimentos.jpg';
import Dietas from '../../assets/NutriSmart/Dietas.jpg';
import Historial from '../../assets/NutriSmart/Historial.jpg';
import InformacionUsuario from '../../assets/NutriSmart/InformacionUsuario.jpg';
import Perfil from '../../assets/NutriSmart/Perfil.jpg';
import EscanerQR from '../../assets/NutriSmart/EscanerQR.jpg';

import Alimentos from '../../assets/NutriSmartBackEnd/Alimentos.jpg';
import DietasBackEnd from '../../assets/NutriSmartBackEnd/Dieta.jpg';
import HistorialBackEnd from '../../assets/NutriSmartBackEnd/Historial.jpg';
import GoogleFitBackEnd from '../../assets/NutriSmartBackEnd/GoogleFit.jpg';
import Auth from '../../assets/NutriSmartBackEnd/Auth.jpg';
import Usuarios from '../../assets/NutriSmartBackEnd/Usuarios.jpg';

export const skillsData = {
  frontend: [
    { 
      id: 1,
      title: 'projects.nutrismart.title.frontend',
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
      technologies: ['React 18', 'JavaScript', 'HTML5', 'CSS3'],
      year: 2025,
      repository: 'https://github.com/valentintic/DietasAutomaticas',
      demo: 'https://dietasautomaticasnetvdp-hsg2ddc6g5g0ewgg.westeurope-01.azurewebsites.net/',
      role: 'Full Stack Developer',
      features: [
        'projects.nutrismart.features.frontend.item1',
        'projects.nutrismart.features.frontend.item2',
        'projects.nutrismart.features.frontend.item3',
        'projects.nutrismart.features.frontend.item4',
        'projects.nutrismart.features.frontend.item5',
        'projects.nutrismart.features.frontend.item6',
        'projects.nutrismart.features.frontend.item7'
      ],
      challenges: 'projects.nutrismart.challenges'
    },
  ],
  backend: [
    { 
      id: 5,
      title: 'projects.nutrismart.title.backend',
      description: 'projects.nutrismart.description',
      images: [
        Alimentos,
        Auth,
        DietasBackEnd,
        HistorialBackEnd,
        Usuarios,
        GoogleFitBackEnd,
      ],
      technologies: ['ASP.NET', 'C#', 'Azure', 'Google Fit API', 'OAuth 2.0', 'JWT', 'SQL Server', 'Entity Framework', 'Swagger'],  
      year: 2025,
      repository: 'https://github.com/valentintic/DietasAutomaticas',
      demo: 'https://nutrismartapivdp-d6dgezd4gxcsf3fh.spaincentral-01.azurewebsites.net/index.html',
      role: 'Full Stack Developer',
      features: [
        'projects.nutrismart.features.backend.item1',
        'projects.nutrismart.features.backend.item2',
        'projects.nutrismart.features.backend.item3',
        'projects.nutrismart.features.backend.item4',
        'projects.nutrismart.features.backend.item5',
        'projects.nutrismart.features.backend.item6',
        'projects.nutrismart.features.backend.item7',
        'projects.nutrismart.features.backend.item8',
        'projects.nutrismart.features.backend.item9',
      ],
      challenges: 'projects.nutrismart.challenges'
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
    position: 'experience.position.fullstack',
    period: '2024',
    location: 'Madrid, España',
    description: 'experience.description.helops',
    achievements: [
      'experience.achievements.helops.item1',
      'experience.achievements.helops.item2',
      'experience.achievements.helops.item3'
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
    description: 'Training in web development, Java programming, Spring Boot, JavaScript, and database management with MySQL, MongoDB and SQL Server.'
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