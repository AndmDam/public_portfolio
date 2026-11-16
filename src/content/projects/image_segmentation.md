---
title: "Enriquecimiento de Set de Images"
tagline: "Biblioteca personalizada en Python para generación sintética de imágenes RGB y sincronización de anotaciones JSON."
category: "embedded"
featured: true
date: 2024-06-15
heroImage: "/assets/projects/amp-img/hero.jpeg"
tools: ["Python", "OpenCV", "scikit-image", "NumPy", "SciPy", "Pillow", "Matplotlib"]
specs:
  "Entorno de Ejecución": "Python 3.10.12 (OpenCV 4.10, scikit-image 0.24, NumPy 2.1, SciPy 1.14)"
  "Capacidad de Filtrado": "20 transformaciones configurables (geométricas, fotométricas, ruido y filtros compuestos)"
  "Escala de Procesamiento": "Expansión automatizada para conjuntos de hasta 4,000 imágenes"
  "Gestión de Anotaciones": "Renombrado secuencial y fusión sincronizada de metadatos JSON (mixture.py)"
githubUrl: "https://github.com/AndmDam/image_set_extension"
---

## 1. Arquitectura de Procesamiento y Filtrado Paramétrico
El sistema (`amp_img`) constituye una alternativa local y determinista desarrollada para reemplazar flujos externos de preprocesamiento (como Roboflow) que presentaban fallos en la integridad de los lotes. La biblioteca `ampliacion_lib` encapsula 20 operaciones independientes y combinadas sobre matrices RGB:
* **Transformaciones Geométricas y Espaciales:** Recorte basado en márgenes (`crop_image`), volteo multi-eje (`apply_flip_image`), rotación con preservación de centro (`first_rotate_image`) y deformaciones elásticas controladas por campos de desplazamiento (`elastic_transform` mediante parámetros $\alpha$ y $\sigma$).
* **Alteraciones Fotométricas y Espectrales:** Ajuste de exposición, brillo, contraste, saturación, desplazamiento en el espacio de color HSV (`apply_hue_filter`), conversión ponderada a escala de grises y transformación matricial RGB para emulación Sepia.
* **Oclusión, Ruido y Extracción de Bordes:** Generación de máscaras aleatorias (`apply_cutout_filter`), inyección de ruido sal y pimienta (`apply_noise_filter`), desenfoque gaussiano selectivo por umbral de contraste, operadores gradientes Sobel y detección de contornos Canny.
* **Filtros Compuestos:** Pipelines encadenados (`Mix1`, `Mix2`, `Mix3`) diseñados para escalar conjuntos de datos hasta 4,000 muestras manteniendo variabilidad controlada sin rotaciones ortogonales de $90^{\circ}$.

## 2. Consolidación de Datasets y Sincronización de Metadatos
Para integrar los subconjuntos generados en un único corpus listo para entrenamiento de modelos de visión por computadora, el módulo `mixture.py` recorre recursivamente los directorios de salida. El script ejecuta un renombrado secuencial estandarizado mediante prefijos e índices configurables, copia los archivos de imagen al directorio consolidado y actualiza dinámicamente las referencias internas dentro de los archivos `.json` de anotaciones, unificando todo el esquema en un registro maestro sin pérdida de trazabilidad.