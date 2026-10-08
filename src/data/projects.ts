export type CoverTone = 'accent' | 'ink' | 'paper';

export interface Project {
    title: string;
    description: string;
    stack: string[];
    url: string;
    /** Texto corto del enlace que se muestra en la portada. */
    urlLabel: string;
    repoUrl?: string;
    tone: CoverTone;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        title: 'BULKY',
        description: 'Registra tus rutinas de entrenamiento y lleva el control de tu dieta desde una sola aplicación.',
        stack: ['Angular', 'TailwindCSS', 'Supabase'],
        url: 'https://bulky-fitness.vercel.app/',
        urlLabel: 'bulky.fitness',
        tone: 'accent',
        featured: true,
    },
    {
        title: 'KanbanHub',
        description: 'Organiza tareas y proyectos en tableros Kanban, con un backend propio en NestJS y PostgreSQL.',
        stack: ['Angular', 'TailwindCSS', 'NestJS', 'PostgreSQL', 'NeonDB'],
        url: 'https://kanbanhub.work/',
        urlLabel: 'kanbanhub.work',
        tone: 'ink',
        featured: true,
    },
    {
        title: 'BrickTrack',
        description: 'Rastrea y gestiona tus minifiguras, sets y piezas de LEGO desde un único lugar.',
        stack: ['Angular', 'TailwindCSS', 'NestJS', 'PostgreSQL', 'NeonDB'],
        url: 'https://bricktrack.vercel.app/',
        urlLabel: 'bricktrack.vercel.app',
        tone: 'paper',
    },
    {
        title: 'BrickLink Cart Planner',
        description: 'Planifica tus compras de piezas en BrickLink y optimiza al máximo el precio de cada carrito.',
        stack: ['Angular', 'TailwindCSS'],
        url: 'https://bl-cart-planner.vercel.app/',
        urlLabel: 'bl-cart-planner.vercel.app',
        repoUrl: 'https://github.com/KikoMola/bl-cart-planner',
        tone: 'ink',
    },
    {
        title: 'Angular Dependency Checker',
        description: 'Analiza y gestiona las dependencias de cualquier proyecto Angular en un solo vistazo.',
        stack: ['React', 'TailwindCSS', 'shadcn/ui', 'Vite'],
        url: 'https://angular-dependency-checker.vercel.app/',
        urlLabel: 'angular-dependency-checker',
        repoUrl: 'https://github.com/KikoMola/Angular-Dependency-Checker',
        tone: 'paper',
    },
    {
        title: 'LeeTuTicket',
        description: 'Compra y vende entradas para eventos online entre usuarios.',
        stack: ['Angular', 'TailwindCSS', 'Supabase'],
        url: 'https://leetuticket.com/',
        urlLabel: 'leetuticket.com',
        tone: 'accent',
    },
    {
        title: 'RAG Chat',
        description: 'Chatea con tus documentos: organízalos en colecciones y recibe respuestas en streaming basadas solo en su contenido.',
        stack: ['Angular', 'TailwindCSS', 'RxJS', 'SSE'],
        url: 'https://github.com/KikoMola/rag-front',
        urlLabel: 'github / rag-front',
        tone: 'ink',
    },
    {
        title: 'RAG Local',
        description: 'Motor RAG 100% local con búsqueda híbrida, OCR de documentos escaneados y modelos ejecutados en tu propia máquina.',
        stack: ['Python', 'FastAPI', 'Ollama', 'ChromaDB', 'SQLite'],
        url: 'https://github.com/KikoMola/rag-back',
        urlLabel: 'github / rag-back',
        tone: 'paper',
    }
];
