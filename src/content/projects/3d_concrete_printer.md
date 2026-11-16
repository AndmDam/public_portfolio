---
title: "Impresora 3D de Concreto"
tagline: "Diseño conceptual de sistema mecatrónico de extrusión por capas para fabricación aditiva en construcción."
category: "hardware"
featured: true
date: 2025-01-26
heroImage: "/assets/projects/impresora-concreto/hero.png"
gallery:
  - src: "assets/projects/impresora-concreto/ejes_1.png"
    caption: "Acercamiento ejes de movimiento en coordenadas cartesianas X-Y-Z."
  - src: "assets/projects/impresora-concreto/extrusor_analysis.png"
    caption: "Análisis del movimiento de la mezcla en el tornillo helicoidal para la mezcla del mortero."
tools: ["SolidWorks", "OnShape", "Mecanizado CNC", "LaTeX"]
specs:
  "Alcance": "Ingeniería conceptual y diseño electromecánico"
  "Controlador": "Duet 3 Mainboard 6XD + Duet 3 Expansion 1XD"
  "Actuadores": "Motores paso a paso (34HS86-6013A, 24HS60-4240A)"
  "Transmisión": "Correas dentadas HTD (5M y 8M), husillos de bolas (16-05) y guías lineales HIWIN (HGR25/35)"
  "Estructura": "Perfiles de aluminio estructural (45 × 45, 45 × 90, 45 × 135, 45 × 180)"
  "Extrusión": "Tolva de carga con tornillo helicoidal (adición, mezcla y presión) y boquilla"
githubUrl: "https://github.com/andmdam"
---

## 1. Arquitectura Mecánica y Estructural
El proyecto consiste en el diseño conceptual de un sistema bajo configuración de pórtico (*gantry*) modular modelado en **SolidWorks**. La estructura principal proyecta el uso de perfiles de aluminio estructural de distintas secciones (45 × 45, 45 × 90, 45 × 135 y 45 × 180 mm), anclados sobre una base rígida para minimizar vibraciones dinámicas durante la operación.

Para el desplazamiento de precisión en los ejes cartesianos, el diseño integra:
- **Guiado lineal:** Guías **HIWIN** (HGR25 y HGR35) con patines de bolas (HGH25CA) y barras templadas (SFC 16 mm).
- **Transmisión de potencia:** Correas dentadas **HTD** (5M y 8M) y husillos de bolas (16-05) con soportes BK15/BF15.
- **Cabezal de extrusión:** Tolva de alimentación acoplada a un tornillo helicoidal multietapa (adición, mezcla y presión) dimensionado para impulsar mortero o concreto modificado con aditivos hacia la boquilla de deposición.

## 2. Sistema de Control y Electrónica
La arquitectura de control de movimiento e interpretación de trayectorias mediante **G-Code** se planteó alrededor de una placa controladora **Duet 3 Mainboard 6XD** acoplada a una tarjeta de expansión **Duet 3 Expansion 1XD** mediante bus CAN. Esta etapa electrónica gestiona motores paso a paso de alto torque (modelos **34HS86-6013A** y **24HS60-4240A**) encargados de sincronizar la cinemática de los ejes del pórtico con el caudal de dosificación del extrusor.