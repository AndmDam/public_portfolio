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
        issuer: "PTC Onshape",
        date: "2026-07",
        area: "cad-manufactura",
        file: "onshape-certified-associate.pdf",
        type: "pdf",
    },
    {
        title: "Advanced Part & Assembly Configurations",
        issuer: "PTC Onshape",
        date: "2026-07 & 2026-11",
        area: "cad-manufactura",
        file: "advanced_part-advanced_conf.pdf",
        type: "pdf",
    },
    {
        title: "Master Model & Managed In-Context Design",
        issuer: "PTC Onshape",
        date: "2026-11",
        area: "cad-manufactura",
        file: "master_model-managed_in_context.pdf",
        type: "pdf",
    },
    {
        title: "Advanced Onshape Assemblies & Detailed Drawnings",
        issuer: "PTC Onshape",
        date: "2026-06 & 2026-11",
        area: "cad-manufactura",
        file: "advanced_assemblies-detailed_drawnings.pdf",
        type: "pdf",
    },
    {
        title: "Introduction to Onshape Simulation",
        issuer: "PTC Onshape",
        date: "2026-11",
        area: "cad-manufactura",
        file: "onshape_simulation.pdf",
        type: "pdf",
    },
    {
        title: "Variables and Expressions",
        issuer: "PTC Onshape",
        date: "2026-11",
        area: "cad-manufactura",
        file: "variables_and_expressions.pdf",
        type: "pdf",
    },
    {
        title: "Branching, Merging & Document Management",
        issuer: "PTC Onshape",
        date: "2026-06",
        area: "software-datos",
        file: "branch_merginig-management.pdf",
        type: "pdf",
    },
    {
        title: "Diseño y Manufactura Industria 4.0",
        issuer: "UNIDO (ONU)",
        date: "2026-07",
        area: "electronica-iot",
        file: "industria-4-0.pdf",
        type: "pdf",
    },
    {
        title: "AI Image Processing",
        issuer: "CEDIA - EPN - Universidad Yachay Tech",
        date: "2025-07",
        area: "software-datos",
        file: "ai-image_processing-artificial_inteligence.pdf",
        type: "pdf",
    },
    {
        title: "Curso de Diseño 3D",
        issuer: "ELEVIFY",
        date: "2026-06",
        area: "cad-manufactura",
        file: "3d-modeling.pdf",
        type: "pdf",
    },
    {
        title: "Fundamentos Eléctricos y Seguridad",
        issuer: "ELEVIFY",
        date: "2026-07",
        area: "formacion-tecnica",
        file: "fundamentos_electricos_seguridad.pdf",
        type: "pdf",
    },
    {
        title: "Prevención de Riesgos",
        issuer: "Universidad Yachay Tech",
        date: "2023-02",
        area: "formacion-tecnica",
        file: "prevencion-riesgos.pdf",
        type: "pdf",
    }
]