---
title: "Microscopio de Efecto Túnel (STM)"
tagline: "Microscopio de efecto túnel modular low cost con ESP32 y modulos DAC/ADC con etapas analógicas y digitales."
category: "scientific-instrumentation"
featured: true
date: 2026-04-15
heroImage: "/assets/projects/stm/hero_render.jpeg"
gallery:
  - src: "assets/projects/stm/esquematico-tia.png"
    caption: "Etapa de preamplificación de transimpedancia (OPA124) para corrientes en el orden de picoamperios."
  - src: "assets/projects/stm/cabezal-piezo.png"
    caption: "Ensamble mecánico del actuador piezoeléctrico y portamuestras."
  - src: "assets/projects/stm/curva-tunelamiento.png"
    caption: "Caracterización experimental I-V y calibración mediante unión de ruptura."
  - src: "assets/projects/stm/fuente_simetrica.png"
    caption: "Fuente de poder Simétrica_dual."
tools: ["KiCad", "OnShape", "Impresión 3D", "ESP32", "Python", "C++", "LaTeX"]
specs:
  "Resolución de corriente": "0.1 nA"
  "Control piezoeléctrico": "Amplificación HV ±15 VDC"
  "Adquisición": "ADS1115 vía I2C"
githubUrl: "https://github.com/andmdam/stm_esp32"
---


## 1. Contexto del Problema
La democratización de la ciencia de frontera muchas veces está limitado a universidades/centros de investigación de alto prestigio que poseen cantidades ingentes de inversión. En países tercermundistas este tipo de innovación es casi nula al existir muy pocos lugares donde poder experimentar con el alto riesgo de romper algo e $inutilizar dispositivos de varios miles de dólares.

## 2. Arquitectura de Hardware y Esquemáticos
* Diagrama de bloques del Sistema
* Circuito de acondicionamiento de señal (etapa de transimpedancia para corrientes túnel en el orden de pA/nA).
* Blindaje electromagnético y aislamiento de vibraciones mecánicas.

## 3. Firmware y Procesamiento de Datos
* Bucle de control PID en el microcontrolador.
* Algoritmo de aproximación grues y fina del escaner.
* Script de procesamiento y rasterizado de matriz topográfica en Python. 

## 4. Resultados Cuantificables
* Curvas I-V obtenidas experimentalmente.
* Tolerancias mecánicas alcanzadas en el mecanismo de traslación.
