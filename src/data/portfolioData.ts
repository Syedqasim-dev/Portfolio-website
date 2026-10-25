export interface Project {
  id: string;
  title: string;
  category: 'Machine Learning' | 'Deep Learning' | 'Computer Vision' | 'NLP' | 'Web Applications';
  subtitle: string;
  projectTypeBadge: 'Final Year Project' | 'Personal Project' | 'Research Initiative' | 'Engineering Pipeline';
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  problem: string;
  solution: string;
  architecture: string[];
  keyFeatures: string[];
  githubUrl: string;
  demoUrl?: string;
  year: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  detailedDescription: string;
  skills: string[];
  deliverables: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: { name: string; focus: string }[];
}

export interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  role: string;
  organization: string;
  type: 'Education' | 'Academic Project' | 'Experience' | 'Certification';
  location: string;
  description: string;
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: "Syed Qasim Ali",
  displayFirstName: "SYED",
  displayLastName: "QASIM ALI",
  role: "AI / ML Engineer",
  tagline: "Results-driven Artificial Intelligence graduate designing and deploying end-to-end multimodal AI solutions integrating computer vision, speech processing, and FastAPI.",
  availabilityStatus: "Available for Opportunities",
  availabilityNote: "Available for full-time roles, internships, and remote/on-site opportunities in Islamabad/Rawalpindi.",
  email: "qasim.numledu@gmail.com",
  phone: "+92-312-6060714",
  location: "Islamabad, Pakistan",
  educationBadge: "BS in Artificial Intelligence (BSAI) · NUML Islamabad (2022–2026)",
  githubUrl: "https://github.com/Syedqasim-dev/Projects",
  linkedinUrl: "https://linkedin.com/in/syed-qasim-ali-a8b95a314",
  resumePdfPath: "/assets/aistudio/Syed_Qasim_Ali_AI_ML_Engineer_Resume_bf82cca5.pdf",
  portraitImage: "/assets/aistudio/WhatsApp_Image_2026-10-24_at_3.19.12_PM_ef28ead7.jpeg",
  summary: "Results-driven Artificial Intelligence graduate with hands-on experience in machine learning, deep learning, and full-stack AI system development. Proven ability to design and deploy end-to-end AI solutions using Python, TensorFlow, and FastAPI. Skilled in building multimodal systems integrating computer vision, speech processing, and NLP. Adept at translating complex research into practical applications, with a strong foundation in CNNs, LSTMs, and emotion recognition systems. Seeking a role in AI/ML engineering, data science, or software development to contribute technical expertise to impactful, real-world projects.",
  coreCompetencies: [
    "Multimodal AI Systems",
    "Speech Emotion Recognition (SER)",
    "Computer Vision & Facial Emotion",
    "Deep Neural Networks (CNN, RNN, LSTM)",
    "FastAPI & RESTful API Engineering",
    "Model Training & Evaluation"
  ],
  languages: [
    { language: "Urdu", proficiency: "Native" },
    { language: "English", proficiency: "Professional Proficiency" }
  ],
  interests: [
    "Applied AI Research",
    "Healthcare AI",
    "Computer Vision",
    "Competitive Programming"
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "healthcare-empathy-ai",
    title: "Healthcare Empathy AI",
    subtitle: "Multimodal Empathy Training System for Doctors",
    projectTypeBadge: "Final Year Project",
    category: "Deep Learning",
    year: "2025 — 2026",
    shortDescription: "A full-stack AI system designed to train and evaluate clinical practitioners on empathetic patient communication using real-time multimodal analysis combining facial expressions and acoustic speech features.",
    fullDescription: "Healthcare Empathy AI is a comprehensive capstone initiative addressing clinical communication gaps. By synchronously extracting facial landmarks with DeepFace and OpenCV alongside speech emotion spectrograms using CNN and LSTM networks, the platform scores non-verbal empathy indicators during simulated medical consultations and delivers actionable session-based feedback via a high-performance FastAPI backend.",
    thumbnail: "/src/assets/images/project_healthcare_ai_1792828523440.jpg",
    tags: ["Python", "TensorFlow", "Keras", "Librosa", "DeepFace", "OpenCV", "FastAPI", "SQLAlchemy", "SQLite", "Bootstrap", "Chart.js"],
    metrics: [
      { label: "Modality", value: "Video + Audio" },
      { label: "Audio Corpora", value: "RAVDESS & CREMA-D" },
      { label: "Backend", value: "FastAPI REST" }
    ],
    problem: "Clinicians often struggle with non-verbal empathy cues under stressful hospital conditions, with few objective tools to practice compassionate bedside interaction.",
    solution: "Designed and developed a dual-stream multimodal neural architecture that assesses facial micro-expressions via DeepFace and vocal intonation via CNN-LSTM networks in real-time.",
    architecture: [
      "Speech Emotion Recognition (SER) module using CNN and LSTM architectures trained on RAVDESS and CREMA-D datasets",
      "Real-time facial expression analysis utilizing DeepFace and OpenCV for non-verbal empathy indicators",
      "RESTful backend built with FastAPI and SQLAlchemy over SQLite for structured session logging",
      "Interactive consultation analytics dashboard delivering performance scores and targeted improvement suggestions"
    ],
    keyFeatures: [
      "Dual-stream real-time analysis of speech acoustic patterns and facial affect",
      "Non-verbal empathy index scoring doctor-patient engagement in simulated consultations",
      "Detailed session-based feedback reports with performance breakdowns and suggestions",
      "Lightweight SQLite persistence with asynchronous FastAPI endpoints"
    ],
    githubUrl: "https://github.com/Syedqasim-dev/Projects",
    demoUrl: "https://github.com/Syedqasim-dev/Projects"
  },
  {
    id: "facial-emotion-detection",
    title: "Facial Emotion Detection System",
    subtitle: "Real-Time 7-State Affective Classification Pipeline",
    projectTypeBadge: "Personal Project",
    category: "Computer Vision",
    year: "2024",
    shortDescription: "A real-time facial emotion recognition application using DeepFace and OpenCV capable of detecting 7 distinct emotional states via live webcam feed or static image input.",
    fullDescription: "Engineered a production-ready facial emotion detection application capable of classifying 7 distinct emotional states in real-time. Features an optional custom CNN training pipeline using the FER2013 dataset from Kaggle for domain-specific fine-tuning and transfer learning experiments.",
    thumbnail: "/src/assets/images/project_facial_emotion_1792828526319.jpg",
    tags: ["Python", "DeepFace", "OpenCV", "Keras", "FER2013 Dataset", "CNN"],
    metrics: [
      { label: "Emotion States", value: "7 Emotions" },
      { label: "Input Modes", value: "Webcam & Static" },
      { label: "Benchmark Dataset", value: "Kaggle FER2013" }
    ],
    problem: "Detecting emotional subtleties in unconstrained camera environments requires balancing robust facial detection with low computational latency.",
    solution: "Combined OpenCV haar/cascade spatial alignment with DeepFace representations, along with a custom Keras CNN training pipeline trained on FER2013.",
    architecture: [
      "Face detection and bounding box stabilization using OpenCV",
      "Facial alignment and normalization to mitigate head pose variations",
      "Emotion inference using DeepFace backbone and optional custom CNN trained on FER2013",
      "Real-time display overlay mapping probability distributions across 7 affective states"
    ],
    keyFeatures: [
      "Accurate classification of 7 emotional classes: Angry, Disgust, Fear, Happy, Sad, Surprise, Neutral",
      "Supports dual ingestion: real-time webcam video stream or high-resolution static photos",
      "Custom CNN training pipeline scripts for reproducible training on Kaggle FER2013",
      "Clean modular Python codebase structured for easy integration into web APIs"
    ],
    githubUrl: "https://github.com/Syedqasim-dev/Projects",
    demoUrl: "https://github.com/Syedqasim-dev/Projects"
  },
  {
    id: "speech-emotion-recognition",
    title: "Speech Emotion Recognition (SER)",
    subtitle: "Acoustic CNN & LSTM Neural Classifier on RAVDESS & CREMA-D",
    projectTypeBadge: "Research Initiative",
    category: "Deep Learning",
    year: "2024 — 2025",
    shortDescription: "A dedicated acoustic speech emotion classifier using convolutional and recurrent LSTM layers trained on RAVDESS and CREMA-D datasets for audio-based emotion detection.",
    fullDescription: "Deep acoustic pipeline decomposing conversational audio into log-mel spectrograms and Mel-frequency cepstral coefficients (MFCCs). Employs stacked 2D CNN layers for spatial harmonic extraction and LSTM recurrent units to model temporal cadence and speech emotion dynamics.",
    thumbnail: "/src/assets/images/project_speech_emotion_1792828523790.jpg",
    tags: ["Python", "TensorFlow", "Keras", "Librosa", "RAVDESS", "CREMA-D", "LSTM", "CNN"],
    metrics: [
      { label: "Architecture", value: "CNN + LSTM" },
      { label: "Audio Datasets", value: "RAVDESS & CREMA-D" },
      { label: "Feature Extraction", value: "Librosa MFCCs" }
    ],
    problem: "Voice intonations contain micro-temporal nuances that simple text sentiment models overlook entirely.",
    solution: "Extracted rich acoustic descriptors (MFCCs, Chroma, Mel Spectrograms) and trained a hybrid CNN-LSTM network to classify vocal emotion states.",
    architecture: [
      "Audio preprocessing and silence-trimming via Librosa",
      "Computation of 128-band Mel spectrograms and MFCC feature vectors",
      "Spatial convolution layers to extract harmonic patterns across frequency bands",
      "LSTM sequence layers capturing temporal transitions and vocal pitch dynamics"
    ],
    keyFeatures: [
      "Trained on dual recognized benchmarks: RAVDESS and CREMA-D",
      "Effective noise handling and data augmentation (pitch shifts, noise injection)",
      "High sensitivity to arousal and valence indicators in conversational speech",
      "Directly integrated as the auditory backbone of Healthcare Empathy AI"
    ],
    githubUrl: "https://github.com/Syedqasim-dev/Projects",
    demoUrl: "https://github.com/Syedqasim-dev/Projects"
  },
  {
    id: "ml-model-benchmarking",
    title: "Machine Learning Model Evaluation Suite",
    subtitle: "End-to-End Classification, Evaluation & Preprocessing Pipelines",
    projectTypeBadge: "Engineering Pipeline",
    category: "Machine Learning",
    year: "2024",
    shortDescription: "A systematic experimental suite implementing data preprocessing, feature engineering, and cross-validated model evaluation using Scikit-learn.",
    fullDescription: "A disciplined machine learning pipeline benchmarking classical algorithms (Random Forest, SVM, Logistic Regression, Gradient Boosters). Incorporates rigorous stratified cross-validation, hyperparameter grid search, and comprehensive metric evaluation (Precision, Recall, F1, ROC-AUC).",
    thumbnail: "/src/assets/images/project_timeseries_lstm_1792828525414.jpg",
    tags: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Jupyter Notebook", "Model Evaluation"],
    metrics: [
      { label: "Algorithms", value: "ANN, SVM, Ensembles" },
      { label: "Validation", value: "Stratified K-Fold" },
      { label: "Toolkit", value: "Scikit-Learn & Pandas" }
    ],
    problem: "Ad-hoc model selection without rigorous data preprocessing and validation leads to overfitting and skewed deployment metrics.",
    solution: "Constructed an automated data preprocessing pipeline with robust scaling, categorical encoding, and exhaustive model benchmarking.",
    architecture: [
      "Automated exploratory data analysis and missing value imputation",
      "Standardization, feature selection, and correlation matrix diagnostics",
      "Multi-model training sweeps with cross-validation splits",
      "Confusion matrix generation and precision-recall trade-off analysis"
    ],
    keyFeatures: [
      "Clean modular Scikit-learn pipelines preventing data leakage",
      "In-depth performance evaluation across imbalanced distributions",
      "Reproducible Jupyter notebook experimentation workflow",
      "Exportable model artifacts for downstream API inference"
    ],
    githubUrl: "https://github.com/Syedqasim-dev/Projects",
    demoUrl: "https://github.com/Syedqasim-dev/Projects"
  },
  {
    id: "rag-nlp-assistant",
    title: "Contextual NLP & RAG Pipeline",
    subtitle: "Retrieval-Augmented Generation & Vector Search System",
    projectTypeBadge: "Research Initiative",
    category: "NLP",
    year: "2024 — 2025",
    shortDescription: "An intelligent text processing and retrieval-augmented generation (RAG) assistant leveraging semantic vector search and natural language processing.",
    fullDescription: "Built an NLP document intelligence assistant implementing semantic chunking, dense vector embeddings, and contextual retrieval to answer domain-specific questions with verified source attribution.",
    thumbnail: "/src/assets/images/project_rag_assistant_1792828525268.jpg",
    tags: ["Python", "NLP", "FastAPI", "Vector Embeddings", "RESTful API", "SQLite"],
    metrics: [
      { label: "Domain", value: "Applied NLP" },
      { label: "Interface", value: "FastAPI REST" },
      { label: "Retrieval", value: "Semantic Similarity" }
    ],
    problem: "Standard language models lack access to proprietary records and generate hallucinated citations when queried on technical documents.",
    solution: "Engineered a dense vector indexing pipeline with semantic similarity scoring and citation tracing served over asynchronous FastAPI endpoints.",
    architecture: [
      "Document ingestion and recursive semantic chunking",
      "Vector embedding generation and similarity index construction",
      "Ranked document chunk retrieval based on cosine similarity",
      "FastAPI response orchestration with source paragraph metadata"
    ],
    keyFeatures: [
      "Accurate question answering grounded in uploaded corpus documents",
      "Fast semantic retrieval with sub-second response latency",
      "Clean RESTful API endpoints for client-side integration",
      "Session history logged to SQLite database with SQLAlchemy"
    ],
    githubUrl: "https://github.com/Syedqasim-dev/Projects",
    demoUrl: "https://github.com/Syedqasim-dev/Projects"
  },
  {
    id: "temporal-rnn-forecasting",
    title: "Sequential Time-Series with RNN & LSTM",
    subtitle: "Deep Recurrent Network Architecture for Sequential Data",
    projectTypeBadge: "Research Initiative",
    category: "Deep Learning",
    year: "2024",
    shortDescription: "Exploration of Simple RNN and Long Short-Term Memory (LSTM) networks for sequential data modeling, capturing temporal dependencies and trend dynamics.",
    fullDescription: "An experimental study examining recurrent neural architectures (ANN, RNN, LSTM) on sequence modeling. Benchmarked hidden-state vanishing gradient mitigation, gate mechanisms, and multi-step sequence predictions.",
    thumbnail: "/src/assets/images/project_timeseries_lstm_1792828525414.jpg",
    tags: ["Python", "TensorFlow", "Keras", "RNN", "LSTM", "ANN"],
    metrics: [
      { label: "Architectures", value: "RNN & LSTM" },
      { label: "Framework", value: "TensorFlow & Keras" },
      { label: "Task", value: "Sequence Modeling" }
    ],
    problem: "Sequential dependencies break traditional feed-forward assumptions due to historical state loss over time.",
    solution: "Constructed recurrent memory cells and LSTM gating networks trained with backpropagation through time (BPTT).",
    architecture: [
      "Sliding window temporal sequence generator",
      "Keras Sequential model with Bidirectional LSTM and Dropout layers",
      "Adam optimizer with learning rate decay schedules",
      "Comparative error benchmarking against baseline feed-forward ANNs"
    ],
    keyFeatures: [
      "Detailed comparison of Simple RNN vs LSTM memory capacity",
      "Custom sequence windowing and normalization pipeline",
      "Loss curve diagnostics tracking gradient stability",
      "Reusable TensorFlow/Keras training scripts"
    ],
    githubUrl: "https://github.com/Syedqasim-dev/Projects",
    demoUrl: "https://github.com/Syedqasim-dev/Projects"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "multimodal-ai-systems",
    number: "01",
    title: "Multimodal AI & Emotion Recognition",
    category: "Computer Vision & Audio Fusion",
    shortDescription: "Designing end-to-end multimodal systems that synchronize facial expression analysis (DeepFace/OpenCV) and speech acoustic processing (Librosa/CNN-LSTM).",
    detailedDescription: "Bridging visual and acoustic perception to build emotionally aware AI applications. Having designed Healthcare Empathy AI, I specialize in combining facial action units, head orientation, and acoustic spectrogram patterns from benchmark datasets like RAVDESS and CREMA-D into cohesive analytical scores.",
    skills: ["DeepFace", "OpenCV", "Librosa", "TensorFlow", "Keras", "RAVDESS", "CREMA-D", "Multimodal AI", "Emotion Recognition"],
    deliverables: [
      "Real-time webcam facial expression analysis pipelines",
      "Speech Emotion Recognition (SER) acoustic models",
      "Multimodal fusion scoring empathetic responsiveness and affective state",
      "Live consultation and training feedback interfaces"
    ]
  },
  {
    id: "deep-learning-neural-nets",
    number: "02",
    title: "Deep Learning & Neural Architectures",
    category: "ANN, CNN, RNN, and LSTM Networks",
    shortDescription: "Architecting, training, and fine-tuning deep neural networks using TensorFlow and Keras across computer vision, audio, and sequential data.",
    detailedDescription: "From convolutional neural networks (CNNs) for image classification and feature maps to recurrent neural networks (RNNs and LSTMs) for audio and sequential signals, I build disciplined model architectures with rigorous validation on FER2013, RAVDESS, and custom corpora.",
    skills: ["TensorFlow", "Keras", "CNNs", "LSTMs", "RNNs", "ANN", "FER2013 Dataset", "Transfer Learning", "Model Fine-Tuning"],
    deliverables: [
      "Custom CNN architectures for image and spectrogram classification",
      "Recurrent LSTM networks for audio and sequence processing",
      "Domain-specific fine-tuning pipelines on benchmark datasets",
      "Hyperparameter optimization and cross-entropy evaluation curves"
    ]
  },
  {
    id: "fastapi-backend-deployment",
    number: "03",
    title: "Backend & RESTful API Engineering",
    category: "FastAPI, SQLAlchemy, and Database Systems",
    shortDescription: "Building robust, production-grade RESTful APIs to serve machine learning models with FastAPI, SQLAlchemy, SQLite, MySQL, and PostgreSQL.",
    detailedDescription: "Taking AI models out of notebooks and into real-world production. I build asynchronous FastAPI backends with Pydantic schemas, SQLAlchemy ORM layers, and relational databases (SQLite, MySQL, PostgreSQL) to support session tracking, user evaluation reports, and live analytics.",
    skills: ["FastAPI", "SQLAlchemy", "SQLite", "PostgreSQL", "MySQL", "RESTful API Design", "Python", "Bootstrap", "Chart.js"],
    deliverables: [
      "Low-latency RESTful inference microservices with OpenAPI docs",
      "Database schema architecture and ORM integration via SQLAlchemy",
      "Session analytics and automated evaluation report generation",
      "Full-stack integration connecting AI backends to client dashboards"
    ]
  },
  {
    id: "data-prep-workflow-automation",
    number: "04",
    title: "Data Preprocessing & Workflow Automation",
    category: "Scikit-Learn, Pandas, and n8n Workflows",
    shortDescription: "Data cleaning, feature transformation, stratified evaluation, and automated end-to-end engineering pipelines powered by n8n and Git.",
    detailedDescription: "Machine learning success begins with immaculate data preparation. I develop automated preprocessing workflows—including noise filtering, audio normalization, missing value imputation, and automated workflow orchestrations using n8n and GitHub Actions.",
    skills: ["Data Preprocessing", "Model Training & Evaluation", "Scikit-learn", "n8n (Workflow Automation)", "Jupyter Notebook", "Git", "GitHub"],
    deliverables: [
      "Automated audio and image data preprocessing scripts",
      "Rigorous cross-validation and confusion matrix diagnostics",
      "Automated data workflows using n8n",
      "Structured and reproducible GitHub code repositories"
    ]
  }
];

export const SKILL_CATEGORIES: SkillGroup[] = [
  {
    category: "Programming Languages",
    description: "Core programming languages used for algorithm engineering and systems.",
    skills: [
      { name: "Python", focus: "Primary language for AI/ML, data pipelines, TensorFlow & FastAPI" },
      { name: "C++", focus: "Data structures, algorithms, and computational efficiency" },
      { name: "SQL", focus: "Relational database querying, schema modeling & transformations" }
    ]
  },
  {
    category: "Machine Learning & Deep Learning",
    description: "Neural network architectures and statistical modeling.",
    skills: [
      { name: "TensorFlow & Keras", focus: "Model training, transfer learning, CNNs & LSTMs" },
      { name: "Scikit-Learn", focus: "Supervised & unsupervised ML, pipelines, evaluation metrics" },
      { name: "ANN & CNN", focus: "Convolutional neural networks for vision & spatial harmonics" },
      { name: "RNN & LSTM", focus: "Recurrent networks for sequential audio & speech signals" },
      { name: "Model Training & Evaluation", focus: "Stratified cross-validation, loss curves, confusion matrices" }
    ]
  },
  {
    category: "Computer Vision & Audio",
    description: "Affective computing across video streams and speech signals.",
    skills: [
      { name: "OpenCV", focus: "Real-time webcam video stream processing & landmark alignment" },
      { name: "DeepFace", focus: "Facial expression classification & biometric affect extraction" },
      { name: "Librosa", focus: "Audio feature extraction: MFCCs, chroma, and log-mel spectrograms" },
      { name: "RAVDESS & CREMA-D", focus: "Audio speech corpora for emotion recognition training" },
      { name: "FER2013 Dataset", focus: "Kaggle facial emotion benchmark for domain fine-tuning" }
    ]
  },
  {
    category: "Backend & APIs",
    description: "Deploying AI inference pipelines as production services.",
    skills: [
      { name: "FastAPI", focus: "High-performance asynchronous RESTful API development" },
      { name: "SQLAlchemy", focus: "Python SQL toolkit and Object Relational Mapper (ORM)" },
      { name: "RESTful API Design", focus: "Clean endpoint contracts, Pydantic schemas & JSON payloads" },
      { name: "SQLite, PostgreSQL & MySQL", focus: "Relational databases for session tracking & data storage" }
    ]
  },
  {
    category: "Tools & Platforms",
    description: "Development environment, workflow automation, and collaboration.",
    skills: [
      { name: "Git & GitHub", focus: "Version control, multi-branching & repository management" },
      { name: "Jupyter Notebook", focus: "Rapid exploratory data analysis, prototyping & diagnostics" },
      { name: "n8n (Workflow Automation)", focus: "Automated event-driven multi-step AI workflows" },
      { name: "MS Office Suite", focus: "Word, Excel, PowerPoint for technical documentation & reports" }
    ]
  }
];

export const JOURNEY_TIMELINE: TimelineEntry[] = [
  {
    id: "journey-numl-degree",
    year: "2022 — 2026",
    title: "Bachelor of Science in Artificial Intelligence (BSAI)",
    role: "Undergraduate AI Scholar",
    organization: "National University of Modern Languages (NUML)",
    type: "Education",
    location: "Islamabad, Pakistan",
    description: "Comprehensive degree curriculum in Artificial Intelligence focusing on theoretical foundations, neural architectures, and software engineering practices.",
    highlights: [
      "Relevant Coursework: Machine Learning, Deep Learning, Computer Vision, NLP, Database Management, Software Engineering, Professional Practices",
      "Hands-on development of end-to-end AI applications using Python, TensorFlow, and FastAPI",
      "Active focus on multimodal emotion recognition and affective healthcare computing"
    ]
  },
  {
    id: "journey-healthcare-project",
    year: "2025 — 2026",
    title: "Healthcare Empathy AI (Final Year Project)",
    role: "Lead Full-Stack AI Engineer",
    organization: "NUML Capstone Project Initiative",
    type: "Academic Project",
    location: "Islamabad, Pakistan",
    description: "Designed and developed an end-to-end full-stack AI system to train and evaluate medical practitioners on empathetic patient communication using real-time multimodal analysis.",
    highlights: [
      "Built Speech Emotion Recognition (SER) module with CNN and LSTM models trained on RAVDESS and CREMA-D datasets",
      "Integrated DeepFace and OpenCV for real-time facial expression analysis to score non-verbal empathy indicators",
      "Developed RESTful backend with FastAPI and SQLAlchemy over SQLite providing session-based performance feedback and improvement suggestions",
      "Technologies: Python, TensorFlow, Keras, Librosa, DeepFace, OpenCV, FastAPI, SQLAlchemy, SQLite, Bootstrap, Chart.js"
    ]
  },
  {
    id: "journey-facial-emotion-project",
    year: "2024",
    title: "Facial Emotion Detection System",
    role: "AI Developer",
    organization: "Personal Project Initiative",
    type: "Academic Project",
    location: "Islamabad, Pakistan",
    description: "Built a real-time facial emotion detection application capable of recognizing 7 distinct emotional states via webcam or static image input.",
    highlights: [
      "Engineered real-time facial affect classification using DeepFace and OpenCV",
      "Implemented custom CNN training pipeline using the FER2013 dataset from Kaggle for domain-specific fine-tuning",
      "Optimized inference loop for smooth frame rates on consumer hardware"
    ]
  },
  {
    id: "journey-imcb-college",
    year: "2020 — 2022",
    title: "Intermediate — Pre-Engineering",
    role: "Student",
    organization: "IMCB I-10/4",
    type: "Education",
    location: "Islamabad, Pakistan",
    description: "Higher secondary education with a rigorous pre-engineering curriculum encompassing advanced mathematics, physics, and analytical problem solving.",
    highlights: [
      "Core Subjects: Mathematics, Physics, Chemistry",
      "Strong foundational groundwork for computational sciences and calculus"
    ]
  }
];

export const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/Syedqasim-dev/Projects", username: "Syedqasim-dev/Projects" },
  { name: "LinkedIn", url: "https://linkedin.com/in/syed-qasim-ali-a8b95a314", username: "syed-qasim-ali-a8b95a314" },
  { name: "Email", url: "mailto:qasim.numledu@gmail.com", username: "qasim.numledu@gmail.com" },
  { name: "Phone", url: "tel:+923126060714", username: "+92-312-6060714" }
];
