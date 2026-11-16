export interface Certificate {
    title: string;
    issuer: string;
    date: string;
    area: 'cad-manufactura' | 'electronica-iot' | 'software-datos' | 'formacion-tecnica';
    file: string;
    type: 'pdf' | 'image';
    credentialId?: string; 
}

export const certificates: Certificate[] = [
    {
        title: "Certified Onshape Associate",
        issuer: "PTC OnShape",
        date: "2026-07",
        area: "cad-manufactura",
        file: "onshape-certified-associate.pdf",
        type: "pdf",
    },
    {
        title: "Onshape Fundamentals",
        issuer: "PTC OnShape",
        date: "2026-06",
        area: "cad-manufactura",
        file: "onshape_fundamentals.pdf",
        type: "pdf",
    },
    {
        title: "Onshape Data Management",
        issuer: "PTC OnShape",
        date: "2026-06",
        area: "cad-manufactura",
        file: "onshape_data_management.pdf",
        type: "pdf",
    },
    {
        title: "Onshape CAD Basis",
        issuer: "PTC OnShape",
        date: "2026-06",
        area: "cad-manufactura",
        file: "onshape_cad.pdf",
        type: "pdf",
    },
    {
        title: "Diseño y Manufactura Industria 4.0",
        issuer: "UNIDO (ONU)",
        date: "2026",
        area: "electronica-iot",
        file: "industria-4-0.pdf",
        type: "pdf",
    },
    {
        title: "AI Image Processing",
        issuer: "CEDIA - EPN - Universidad Yachay Tech",
        date: "2025",
        area: "software-datos",
        file: "ai-image-processing.pdf",
        type: "pdf",
    },
    {
        title: "AI",
        issuer: "CEDIA - EPN - Universidad Yachay Tech",
        date: "2025",
        area: "software-datos",
        file: "ai.pdf",
        type: "pdf",
    },
    {
        title: "Curso de Diseño 3D",
        issuer: "ELEVIFY",
        date: "2025",
        area: "cad-manufactura",
        file: "3d-modeling.pdf",
        type: "pdf",
    },
    {
        title: "Fundamentos Eléctricos y Seguridad",
        issuer: "ELEVIFY",
        date: "2025",
        area: "formacion-tecnica",
        file: "electronica.pdf",
        type: "pdf",
    },
    {
        title: "Prevención de Riesgos",
        issuer: "Universidad Yachay Tech",
        date: "2023",
        area: "formacion-tecnica",
        file: "prevencion-riesgos.pdf",
        type: "pdf",
    }
]