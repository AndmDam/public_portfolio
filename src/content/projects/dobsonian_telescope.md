---
title: "Telescopio Newtoniano"
tagline: "Instrumento óptico-mecánico de tubo abierto con celda primaria impresa en 3D y base altazimutal graduada."
category: "hardware"
featured: true
date: 2026-10-15
heroImage: "/assets/projects/dobsonian-telescope/hero.png"
tools: ["OnShape", "Inkscape", "Impresión 3D", "Corte Láser", "Mecanizado CNC"]
specs:
  "Configuración Óptica": "Reflector Newtoniano sobre montura Dobsonian"
  "Estructura del Tubo": "Ensamblaje retráctil de 3 barras de aluminio"
  "Celda Primaria": "Soporte paramétrico impreso en 3D (PETG/PLA)"
  "Sistema de Apuntado": "Círculo graduado de 360° (39 cm de diámetro) diseñado en Inkscape"
githubUrl: "https://github.com/andmdam"
---

## 1. Diseño Optomecánico y Estructura Retráctil
El sistema implementa una arquitectura de tubo abierto (*truss/strut*) basada en un ensamblaje retráctil de tres barras de aluminio que vinculan la caja del espejo primario con la jaula superior del secundario y el enfocador. Esta configuración mantiene la rigidez estructural necesaria para conservar la colimación óptica durante el desplazamiento en altitud, reduciendo simultáneamente el volumen de transporte. La celda del espejo primario fue modelada paramétricamente e impresa en 3D (PETG/PLA) para distribuir los puntos de apoyo y permitir el ajuste fino de inclinación mediante tornillos de colimación.

## 2. Montura Altazimutal y Metrología de Apuntado
La base altazimutal incorpora superficies de fricción controladas para suavizar el seguimiento manual en ambos ejes. Para la localización de objetos celestes mediante coordenadas horizontales (*push-to*), se diseñó en Inkscape e integró en la base un dial vectorial graduado de 360° con un diámetro de 39 cm, permitiendo lecturas directas de azimut con resolución de grado.

## 3. Fabricación Digital y Validación Óptica
El desarrollo combina manufactura aditiva para componentes geométricamente complejos (celda primaria, soportes de barras y araña del secundario) con corte láser para los paneles estructurales de la montura. La validación del conjunto incluye pruebas de alineación láser (*colimación*), verificación de estabilidad mecánica frente a flexión diferencial en distintos ángulos de elevación y pruebas de campo de resolución angular y contraste lunar/planetario.