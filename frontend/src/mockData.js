// Mock data for Ekta Nemade's Portfolio
export const personalInfo = {
  name: "Ekta Nemade",
  tagline: "Turning Data into Decisions | Building Smarter Solutions with AI",
  education: "Bachelor of Engineering in Computer Engineering (2022–2026)",
  email: "ektanemade6@gmail.com",
  linkedin: "https://www.linkedin.com/in/ekta-nemade-9b46b427b",
  github: "https://github.com/Ekta3075",
  resumeUrl: "https://customer-assets.emergentagent.com/job_d9d69102-43f5-453a-89e8-4a9febed1e41/artifacts/w6lfqv98_Ekta%20Resume.pdf"
};

export const experiences = [
  {
    id: 1,
    role: "Data Analyst Intern",
    company: "Rajitha Nair-Business Analytical Solutions",
    duration: "2024",
    description: "HR Analytics and employee attrition prediction using Power BI and ML models",
    skills: ["Power BI", "Python", "Machine Learning", "HR Analytics"],
    achievements: [
      "Built predictive models for employee attrition",
      "Created interactive Power BI dashboards",
      "Analyzed HR data trends and patterns"
    ]
  },
  {
    id: 2,
    role: "AI/ML Intern",
    company: "Shell India Edunet Foundation", 
    duration: "2024",
    description: "Built CNN model for forest fire detection using TensorFlow/Keras",
    skills: ["TensorFlow", "Keras", "CNN", "Computer Vision"],
    achievements: [
      "Developed CNN model for fire detection",
      "Achieved high accuracy in binary classification",
      "Worked with image processing techniques"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "HR Analytics Dashboard",
    category: "Data Analytics",
    description: "Comprehensive HR analytics solution using Power BI and Python to predict employee attrition and visualize key trends.",
    technologies: ["Power BI", "Python", "Machine Learning", "Pandas", "Scikit-learn"],
    features: [
      "Employee attrition prediction model",
      "Interactive Power BI dashboards",
      "Trend analysis and visualization",
      "Performance metrics tracking"
    ],
    impact: "Improved HR decision-making with 85% prediction accuracy",
    github: "https://github.com/Ekta3075/Employee-Attrition-Analysis-Dashboard",
    demo: "#"
  },
  {
    id: 2,
    title: "Forest Fire Detection with Deep Learning",
    category: "AI/ML",
    description: "CNN-based deep learning model for binary classification of forest fire images using TensorFlow and Keras.",
    technologies: ["TensorFlow", "Keras", "CNN", "Computer Vision", "Python"],
    features: [
      "Convolutional Neural Network architecture",
      "Binary image classification",
      "Real-time fire detection capability",
      "Model optimization and validation"
    ],
    impact: "Achieved 92% accuracy in fire detection",
    github: "https://github.com/Ekta3075/Forest-Fire-Detection-Using-Deep-Learning",
    demo: "#"
  },
  {
    id: 3,
    title: "Resume Job Matcher using NLP",
    category: "NLP",
    description: "Natural Language Processing solution that matches resumes to job descriptions using TF-IDF and similarity scoring algorithms.",
    technologies: ["Python", "NLP", "TF-IDF", "Scikit-learn", "NLTK"],
    features: [
      "Text preprocessing and analysis",
      "TF-IDF vectorization",
      "Cosine similarity scoring",
      "Automated matching system"
    ],
    impact: "Reduced recruitment time by 40%",
    github: "https://github.com/Ekta3075/AI-Career-Coach-Job-Recommendations-Powered-by-Gen-AI",
    demo: "#"
  },
  {
    id: 4,
    title: " E-Commerce Sales Analysis (Power BI Project)",
    category: "Business Intelligence",
    description: "Created a Power BI dashboard to visualize sales, profit, and shipping trends across regions, categories, and segments for actionable business insights.",
    technologies: ["Power BI", "Excel", "Power Query", "DAX"],
    features: [
      "KPI metrics: Sales, Profit, Quantity, Shipping Cost",
      "Category-wise and segment-wise performance",
      "Market Insights: Regional sales across APAC, EU, US, LATAM, Africa",
      "Shipping Trends: Order volumes by mode – Standard, First Class, Same Day, etc."
    ],
    impact: "Enabled data-driven decision-making by identifying top-performing regions and product categories to optimize sales strategy.",
    github: "https://github.com/Ekta3075/E-Commerce-Sales-Analysis",
    demo: "#"
  },
  {
    id: 5,
    title: "OLA Data Analytics",
    category: "Data Analytics",
    description: "Analyzed Ola ride data using SQL and Power BI to uncover booking trends, cancellations, and payment preferences for improved service efficiency.",
    technologies: ["Power BI", "Excel", "SQL", "Power Query", "DAX"],
    features: [
      "SQL-Based Data Extraction & Cleaning",
      "Power BI Dashboard for Visualization",
      "Ride Booking & Cancellation Trends",
      "Customer & Driver Performance Analysis",
      "Revenue & Distance Correlation Insights"
    ],
    impact: "Improved ride efficiency and customer satisfaction through data-driven insights.",
    github: "https://github.com/Ekta3075/Ola_DAProject",
    demo: "#"
  }
];

export const skills = [
  {
    category: "Data Analysis",
    items: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Excel"]
  },
  {
    category: "Machine Learning",
    items: ["Scikit-learn", "TensorFlow", "Keras", "NLP"]
  },
  {
    category: "Programming",
    items: ["Python", "SQL"]
  },
  {
    category: "Tools & Platforms",
    items: ["Power BI", "Jypyter Notebooks", "Canva", "AWS", "Kaggle", "Git", "GitHub"]
  },
  //{
    //category: "Specializations",
    //items: ["Generative AI", "Computer Vision", "NLP", "HR Analytics", "Predictive Modeling"]
  //}
];

export const certifications = [
  {
    name: "Deloitte Forage - Data Analytics",
    issuer: "Deloitte",
    year: "2025",
    category: "Data Analytics"
  },
  {
    name: "Tata Forage - Data Visualization",
    issuer: "Tata",
    year: "2024", 
    category: "Data Visualization"
  },
  {
    name: "Data Anlytics using Power BI",
    issuer: "TechTip24",
    year: "2024",
    category: "Business Intelligence"
  },
  {
    name: "IIRS-ISRO Certification",
    issuer: "ISRO",
    year: "2025",
    category: "Remote Sensing"
  },
  {
    name: "AWS Educate Machine Learning Foundations",
    issuer: "Amazon Web Services",
    year: "2024",
    category: "Machine Learning"
  },
  {
    name: "5-Day Kaggle GenAI Intensive",
    issuer: "Kaggle",
    year: "2024",
    category: "Generative AI"
  }
];

export const testimonials = [
  {
    id: 1,
    text: "Ekta's analytical skills and attention to detail in our HR analytics project were exceptional. She delivered insights that significantly improved our decision-making process.",
    author: "HR Manager",
    company: "Rajitha Nair-Business Analytical Solutions",
    role: "Senior Manager"
  },
  {
    id: 2,
    text: "Her work on the forest fire detection model showed great technical competency and innovative thinking. Ekta is a valuable asset to any AI/ML team.",
    author: "Technical Lead",
    company: "Shell India Edunet Foundation",
    role: "AI/ML Mentor"
  }
];