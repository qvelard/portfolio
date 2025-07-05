export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: 'web-app' | 'mobile' | 'tool' | 'machine-learning';
  github?: string;
  demo?: string;
  blog?: string;
  date: string;
  role: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Biomolecule Generation with Anti-oxydant and Anti-inflammatory properties',
    slug: 'biomolecule-generation',
    description: 'This Project, authored by Quentin Velard and Salma Bouaouda under Guenael Cabanes at École des Mines de Nancy, leverages deep learning to generate biomolecules with anti-inflammatory (AI) and antioxidant (AO) properties. This work supports the "Biomolecules 4 Bioeconomy" framework, with potential applications in pharmaceuticals, agrochemicals, and cosmetics.',
    longDescription: `
      ## Project Overview
      This Project, authored by Quentin Velard and Salma Bouaouda under Guenael Cabanes at École des Mines de Nancy, leverages deep learning to generate biomolecules with anti-inflammatory (AI) and antioxidant (AO) properties. This work supports the "Biomolecules 4 Bioeconomy" framework, with potential applications in pharmaceuticals, agrochemicals, and cosmetics.

      ## Objectives
      The project focuses on two main goals:
      1. **State-of-the-Art Review**: Analyze existing deep learning methods for molecular generation and identify pretrained models to adapt.
      2. **Model Training**: Develop neural networks using transfer learning to create biomolecules with AI and AO properties.

      With a molecular space of approximately 10^60 possibilities and limited open-source data, traditional discovery is slow—deep learning aims to change that!

      ## 🗝️ Key Concepts Explained
      - **Anti-inflammatory (AI) Biomolecules**: Reduce inflammation by targeting mediators like cytokines (e.g., curcumin, NSAIDs).
      - **Antioxidant (AO) Biomolecules**: Neutralize free radicals to prevent damage (e.g., vitamins C and E, BHT).
      - **SMILES Notation**: Represents molecular structures as text (e.g., "CCO" for ethanol) for computational use.

      ## 🔧 Methodology
      The approach combines Large Language Models (LLMs) and Generative Adversarial Networks (GANs) across two pipelines: Data Generation and Data Prediction.

      ### 📊 Data Collection
      The team sourced 1,883 AI molecules from PubChem, noting properties like molecular weight and hydrophobicity. Limited data availability posed a challenge, addressed through augmentation.

      ### Architectures
      1. **LLM Fine-Tuning**: ChemBERTa, pretrained on 77 million SMILES from PubChem, was fine-tuned to predict AI/AO properties.
      2. **GAN + LLM Hybrid**: GPT-2_zinc_87m (pretrained on 480 million SMILES from ZINC) generates molecules, while a discriminator ensures validity—a fresh take on molecular design!

      ### Pipelines
      1. **Data Generation Pipeline**:
         - **Data Augmentation Layer (DAL)**: Expands the dataset to 11,503 molecules via tautomers and permutations.
         - **GAN + LLM**: Creates and filters new molecules.
         - **Linear Discriminant Analysis (LDA)**: Keeps the most relevant features.
      2. **Data Prediction Pipeline**: Fine-tunes ChemBERTa to predict AI/AO properties, enhancing the dataset further.

      ## 📈 Experimental Results
      Check out the key findings below in two handy tables!

      ### Data Augmentation Layer (DAL)
      | Metric | Initial Dataset | Tautomers Only | Permutations Only | Tautomers + Permutations |
      |--------|----------------|----------------|-------------------|-------------------------|
      | Number of Molecules | 1,883 | 3,359 | 10,015 | 11,503 |
      | Validity | 100% | 100% | 100% | 100% |
      | Originality | 0% | 44% | 81% | 84% |
      | Diversity | 0.91 | 0.90 | 0.88 | 0.89 |
      | Drug-likeness | 79% | 74% | 72% | 72% |

      **Note**: The DAL boosted the dataset size dramatically while keeping validity perfect, though drug-likeness dipped slightly.

      ### Model Performance
      | Metric | LLM Alone | GAN + LLM |
      |--------|-----------|-----------|
      | Validity | 16% | 100% |
      | Originality | 100% | 100% |
      | Diversity | 0.56 | 0.85 |
      | Drug-likeness | 16% | 95% |
      | Accuracy | 9% | 62% (76% with DAL) |

      **Note**: The GAN + LLM hybrid shines with 100% validity and 95% drug-likeness, hitting 76% accuracy with DAL support.

      ## 🌟 Why It Matters
      This project speeds up biomolecule discovery for critical industries, offering a scalable, innovative framework with its GAN+LLM hybrid.

      ## 🚧 Challenges and Future Directions
      Data scarcity, 76% prediction accuracy, and complex biological interactions remain hurdles requiring more validation. Next steps could involve bigger datasets, reinforcement learning, or even quantum computing for better efficiency.
    `,
    image: 'https://qvelard.github.io/portfolio/v1/biomol.webp',
    technologies: ['Python', 'HuggingFace', 'ChemBERTa', 'ChemGPT'],
    category: 'machine-learning',
    github: 'https://github.com/qvelard/BiomolGeneration',
    demo: 'https://velard.fr/v1/biomol-pres.pdf',
    date: '2024',
    role: 'Academic Project',
    featured: true,
  },
  {
    id: '2',
    title: 'Project QILLER: Quantum Incremental Learning for Lifelong Erosion Resilience',
    slug: 'project-qiller',
    description: 'QILLER introduces a novel quantum machine learning method that addresses catastrophic forgetting in variational quantum algorithms (VQAs). Published in IEEE Transactions on Neural Networks and Learning Systems, it combines representation learning, knowledge distillation, and exemplar memory to enable lifelong learning in quantum computing frameworks.',
    longDescription: `
      ## Project Overview
      The paper introduces a new method called QILLER, which stands for "Quantum Incremental Learning for Lifelong Erosion Resilience." It's published in the IEEE Transactions on Neural Networks and Learning Systems and focuses on improving how quantum machine learning models learn over time without forgetting what they've already mastered.

      Catastrophic forgetting is a key problem this paper addresses. In both classical and quantum machine learning, this happens when a model learns new information but loses its ability to remember older knowledge—like forgetting how to ride a bike after learning to drive a car. The authors show this issue exists in variational quantum algorithms (VQAs), a type of quantum machine learning model, and aim to fix it.

      QILLER combines several cool techniques to solve this: representation learning, knowledge distillation, and exemplar memory. These work together to help the model learn new tasks incrementally while holding onto past knowledge, all within a quantum computing framework.

      The goal is lifelong learning, inspired by how humans can keep learning new skills without forgetting old ones. The authors test their method on datasets like MNIST (handwritten digits), FMNIST (fashion items), KMNIST (Japanese characters), and CIFAR-10 (color images), showing it outperforms other approaches.

      ## 🗝️ Key Concepts Explained

      ### Catastrophic Forgetting
      Imagine training a quantum classifier to recognize quantum phases of matter (a physics task), and it works great. Then, you train it on handwritten digits (like 0s and 1s). Suddenly, it forgets the physics task entirely! That's catastrophic forgetting, and the paper gives this exact example from prior research to highlight the issue in VQAs.

      ### Representation Learning
      This is about transforming messy data (like images) into a simpler, more useful form—like summarizing a book into key points. Here, it's done with a quantum autoencoder, which compresses classical data into a quantum state that's easier for the model to work with.

      ### Knowledge Distillation
      Think of it as a student learning from a teacher. The "teacher" is the model's past knowledge, and the "student" is the updated model. It uses a special loss function to ensure the new model mimics what the old one knew, preventing forgetting.

      ### Exemplar Memory
      This acts like a scrapbook of important examples. It stores a small, representative set of samples from old tasks (picked using a method called herding selection) so the model can revisit them and remember past lessons.

      ## 🔧 How QILLER Works

      ### Two-Part Architecture
      QILLER splits into a feature extractor and a classifier. The feature extractor uses a quantum autoencoder (QAE) to turn classical data into quantum features—a 64-dimensional vector—trained once with supervised contrastive loss and then frozen. The classifier, a Variational Quantum Classifier (VQC), predicts classes using these features.

      ### Incremental Learning Steps
      It starts by training on the first task with cross-entropy loss. As new tasks come in, the VQC updates using a mix of cross-entropy loss (for new classes) and distillation loss (to keep old knowledge), referencing past outputs stored in exemplar memory. After each step, the memory updates with new representative samples.

      ### Loss Function Magic
      The loss combines cross-entropy for new learning and distillation to retain old knowledge, with a temperature parameter (T=2) balancing it. It's optimized with COBYLA, a gradient-free method suited for quantum circuits.

      ## 📈 Experimental Results

      ### Impressive Numbers
      QILLER was tested on MNIST, FMNIST, KMNIST, and CIFAR-10. On MNIST, it hit 29% accuracy for 10 classes (1-class-per-step) versus 9-27% for rivals like SCL-VQC, iCaRL-VQC, and TL-VQC. On FMNIST, it scored 28%, beating TL-VQC (19%). KMNIST saw 24%, topping others (12-15%). CIFAR-10 achieved 16%, outperforming TL-VQC (9%).

      ### Real Quantum Hardware
      Tested on Amazon Braket's IonQ Harmony (11 qubits) and simulators, it proves practical even with limits like resizing images to 16x16 pixels.

      ⚠️ **Not Perfect Yet**: Accuracies drop as classes grow due to quantum hardware constraints—still a work in progress!

      ## 🌟 Why It's Awesome

      ### Real-World Ready
      QILLER tackles continuous data streams (think smart cities or social media) where new info keeps coming, unlike older methods that struggle with scalability or forget too much.

      ### Efficient Design
      It uses fewer qubits and discards old VQCs after training, saving quantum resources while still learning effectively.

      ### Beats the Competition
      Outperforms methods like iCaRL-VQC (memory-heavy) and SCL-VQC (less adaptive) by balancing feature extraction and classification in a quantum way.

      ## 🚧 Challenges and Future

      ### Hardware Limits
      Quantum hardware keeps accuracies low for many classes—think 16-29% for 10 classes versus classical models' 90%+. Noise and small qubit counts are the culprits.

      ### Future Potential
      As quantum tech improves, QILLER could scale to bigger, more complex tasks, making quantum lifelong learning a reality.

      For more detailed insights, you can download the full project report below.
    `,
    image: 'https://qvelard.github.io/portfolio/v1/quiller.webp',
    technologies: ['Python', 'QisKit', 'PendlePendle', 'AWS Qunatum Computing'],
    category: 'machine-learning',
    demo: 'https://velard.fr/v1/qiller.pdf',
    date: '2024',
    role: 'Intern',
    featured: true,
  },
  {
    id: '3',
    title: 'F1 RAG Chatbot: Formula 1 Retrieval-Augmented Generation System',
    slug: 'f1-rag-chatbot',
    description: 'Le F1 RAG Chatbot combine une base de connaissances vectorielle, un pipeline d\'embedddings, un système de retrieval avancé et GPT-4 pour fournir des réponses précises et actualisées sur la Formule 1.',
    longDescription: `
      ## Project Overview
      The F1 RAG Chatbot combines advanced retrieval techniques with generative AI to deliver accurate Formula 1 information. By implementing a Retrieval Augmented Generation (RAG) architecture, the system overcomes the limitations of traditional LLMs by grounding responses in a specialized F1 knowledge base.

      ## 🏎️ Architecture Components

      ### 1. Vector Database (Astra DB)
      At the core of the system is a vector database that stores Formula 1 documents as high-dimensional embeddings. Each document is transformed into a 1536-dimensional vector that captures its semantic meaning, enabling similarity-based search beyond simple keyword matching.

      The database schema includes not just the embedding vectors but also metadata like source, date, and category, allowing for comprehensive retrieval and attribution of information. This foundation ensures the chatbot can access specific F1 knowledge that may not be present in general LLM training data.

      \`\`\`javascript
      // Example document schema in Astra DB
      {
        id: "doc-124578",
        text: "The 2025 Formula 1 season will feature 24 races, including the new Madrid Grand Prix...",
        source: "Formula1.com",
        date: "2024-06-10",
        category: "calendar",
        $vector: [0.023, -0.112, 0.438, ...] // 1536-dim vector
      }
      \`\`\`

      ### 2. Embedding Generation Pipeline
      The system uses OpenAI's text-embedding-3-small model to convert both F1 documents and user queries into the same vector space. This common mathematical representation enables semantic matching where queries find relevant information even when using different terminology.

      During indexing, documents are processed in batches to optimize API usage, with each document carefully segmented to maintain context while fitting within the model's token limits. For live queries, the embedding process transforms user questions into the same vector format to enable similarity search.

      \`\`\`javascript
      // Converting user queries to embeddings
      async function generateEmbedding(text) {
        const response = await openai.embeddings.create({
          model: "text-embedding-3-small",
          input: text,
          dimensions: 1536
        });
        return response.data[0].embedding;
      }
      \`\`\`

      ### 3. Context Retrieval System
      The retrieval system performs vector similarity search to find content relevant to user questions. Rather than simple retrieval, the system employs sophisticated ranking and filtering:

      - **Similarity Threshold Filtering** - Only documents above 0.70 cosine similarity are considered
      - **Source Authority Weighting** - Official F1 sources receive priority in retrieval
      - **Recency Prioritization** - More recent documents are favored for time-sensitive topics
      - **Contextual Diversity** - The system seeks to include varied perspectives when appropriate

      This carefully tuned retrieval process ensures that the LLM receives the most relevant, accurate, and up-to-date Formula 1 information as context for generating responses.

      ### 4. Language Model Integration
      The system integrates with GPT-4 through a carefully structured prompt architecture that consists of:

      1. A system prompt establishing the AI as an F1 expert with specific guidelines
      2. Retrieved context from the vector database formatted with source attribution
      3. Conversation history to maintain dialogue coherence
      4. The current user question

      Response streaming is implemented for enhanced user experience, delivering content as it's generated rather than waiting for complete responses. Parameters like temperature (0.7) are tuned to balance creativity with factual accuracy in F1 discussions.

      \`\`\`javascript
      // Structured prompt for GPT-4
      const promptMessages = [
        { role: "system", content: "You are F1GPT, an expert on Formula 1 racing..." },
        { role: "system", content: \`CONTEXT INFORMATION:\n\${retrievedContext}\` },
        ...conversationHistory,
        { role: "user", content: userQuestion }
      ];
      \`\`\`

      ## 🔄 Data Flow Architecture
      The complete RAG pipeline follows these steps during each interaction:

      1. **Query Processing** - User's F1 question is received by the Next.js API route
      2. **Embedding Generation** - The question is transformed into a vector embedding
      3. **Similarity Search** - The vector database is queried for relevant F1 content
      4. **Context Assembly** - Retrieved documents are formatted with source information
      5. **Prompt Construction** - A structured prompt combines the context, conversation history, and user question
      6. **Response Generation** - GPT-4 generates a response grounded in the provided context
      7. **Streaming Delivery** - The response is streamed token-by-token to the user interface

      This architecture ensures that responses are informed by the latest F1 information while maintaining the natural conversational abilities of advanced language models.

      ## 🎨 Frontend Implementation
      The React-based frontend creates an intuitive chat experience using the Vercel AI SDK. Key features include:

      - **Real-time Response Streaming** - Text appears progressively for immediate feedback
      - **Context-aware Suggestions** - Follow-up questions are generated based on conversation context
      - **Mobile-responsive Design** - Layout adapts to different screen sizes with optimized interactions
      - **F1 Theming** - Visual design elements reflect Formula 1 branding and aesthetics

      The user interface manages state using React hooks and provides smooth transitions between conversation states, with automatic scrolling to follow new messages.

      ## 📚 Knowledge Management
      A sophisticated document processing pipeline maintains the F1 knowledge base:

      - **Content Curation** - F1 articles, regulations, statistics, and historical data are sourced from authoritative sites
      - **Document Processing** - Content is cleaned, segmented, and prepared for embedding
      - **Batched Indexing** - Documents are embedded and stored in batches of 20 for efficiency
      - **Regular Updates** - The knowledge base is refreshed with new F1 content after races and announcements

      This systematic approach to knowledge management ensures that the chatbot has access to comprehensive and current Formula 1 information.

      ## ⚡ Technical Optimizations
      The implementation includes several performance optimizations:

      - **Vector Search Efficiency** - Approximate nearest neighbor algorithms accelerate similarity search
      - **Response Caching** - Common F1 questions are cached to reduce embedding and retrieval costs
      - **Incremental Loading** - UI components load progressively to improve perceived performance
      - **Error Handling** - Robust fallback mechanisms ensure service continuity during API disruptions
      - **Resource Conservation** - Careful management of API calls to balance cost and performance

      These optimizations create a responsive, reliable chatbot experience even under high load conditions.

      ## 🚀 Deployment Infrastructure
      The F1 RAG Chatbot is deployed on Railway with containerization for consistent environments:

      - **Docker Containerization** - Ensures consistent runtime across environments
      - **Environment Variable Management** - Secures API keys and configuration
      - **Auto-scaling** - Adapts to traffic patterns for cost efficiency
      - **Monitoring** - Tracks usage patterns and performance metrics

      This infrastructure provides a stable foundation for delivering the F1 chatbot to global users with minimal latency and high reliability.

      ## 🔮 Future Enhancements
      The F1 RAG architecture delivers a significant improvement in accuracy and relevance for Formula 1 information compared to general-purpose chatbots. Future enhancements could include:

      - **Multi-modal Support** - Visual recognition of F1 car components and track layouts
      - **Live Data Integration** - Real-time race information during Grand Prix weekends
      - **Personalization** - User preference tracking for favorite teams and drivers
      - **Advanced Analytics** - F1 performance predictions and statistical analysis

      By combining vector search with generative AI, this architecture creates a specialized knowledge system that delivers the kind of detailed, accurate F1 information that passionate fans demand.

      W
    `,
    image: 'https://qvelard.github.io/portfolio/v1/simple-rag.webp',
    technologies: ['Node.js', 'TypeScript', 'OpenAI', 'Astra DB', 'Langchain.js', 'Vercel AI SDK', 'Railway'],
    category: 'tool',
    github: 'https://github.com/qvelard/RAG_chatbot',
    demo: 'https://ragchatbot-app.velard.fr/',
    date: '2025',
    role: 'Developer',
    featured: true
  }
];

export const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web-app', name: 'Web Apps' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'tool', name: 'Tools' },
  { id: 'ml', name: 'Machine Learning' },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') return projects;
  return projects.filter((project) => project.category === category);
}