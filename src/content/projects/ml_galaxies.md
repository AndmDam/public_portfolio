---
title: "Clasificación de Galaxias con ML"
tagline: "Pipeline de preprocesamiento fotométrico y aprendizaje supervisado sobre el catálogo astronómico SDSS."
category: "embedded"
featured: false
date: 2025-07-15
heroImage: "/assets/projects/astro-bootcamp/hero.png"
tools: ["Python", "scikit-learn", "OpenCV", "NumPy", "Pandas", "Matplotlib"]
specs:
  "Conjunto de Datos": "SDSS (Sloan Digital Sky Survey)"
  "Clases Morfológicas": "Espirales, elípticas e irregulares"
  "Preprocesamiento": "Normalización y extracción de características con OpenCV"
  "Métricas de Evaluación": "Precisión, recall y matrices de confusión"
githubUrl: "https://github.com/andmdam/Bootcamp2025"
---

## 1. Preprocesamiento de Imágenes Astronómicas
El flujo de trabajo ingesta capturas del catálogo **Sloan Digital Sky Survey (SDSS)** y aplica rutinas de limpieza, reducción de ruido de fondo y normalización espacial mediante **OpenCV** y **NumPy**. A partir de los perfiles de intensidad luminosa y geometría aparente, se extraen descriptores morfológicos cuantitativos para estructurar el conjunto de entrenamiento.

## 2. Modelado Supervisado y Evaluación
Mediante **scikit-learn**, se entrenan clasificadores supervisados para discriminar automáticamente entre galaxias espirales, elípticas e irregulares. El desempeño de los modelos se evalúa cuantitativamente mediante métricas de precisión, *recall* y matrices de confusión, complementando el análisis con mapas de características generados en **Matplotlib** y **Seaborn** para interpretar los criterios de separación morfológica.