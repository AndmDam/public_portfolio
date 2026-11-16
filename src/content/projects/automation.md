---
title: "Automatización en Resolución de Formularios"
tagline: "Sistema de scraping DOM, emulación de entrada humana y validación de flujos dinámicos en navegador."
category: "embedded"
featured: false
date: 2024-05-15
heroImage: "/assets/projects/auto-ans/hero.jpeg"
tools: ["Python", "Selenium", "PyAutoGUI", "JSON"]
specs:
  "Motor de Navegación": "Selenium WebDriver"
  "Emulación de Entrada": "PyAutoGUI (eventos de ratón y teclado a nivel de SO)"
  "Configuración": "Reglas y patrones desacoplados en JSON"
  "Arquitectura": "Modular (bot.py, visual_mode.py, suite de pruebas unitarias)"
githubUrl: "https://github.com/andmdam/auto_ans_mdam"
---

## 1. Arquitectura de Automatización Híbrida
El sistema combina control programático del DOM mediante **Selenium** con emulación de periféricos a nivel de sistema operativo mediante **PyAutoGUI**. Esta arquitectura dual permite interactuar tanto con elementos HTML estándar como con interfaces protegidas contra inyección directa de eventos JavaScript, resolviendo formularios de selección múltiple, temporizadores y validaciones asíncronas.

## 2. Motor de Patrones y Ejecución Visual
La lógica de decisión opera sobre un esquema de reglas externas almacenadas en `config.json`, lo que desacopla el motor de recorrido (`bot.py`) de la estructura específica de cada plataforma web. El módulo `visual_mode.py` gestiona el seguimiento óptico de coordenadas en pantalla y la verificación básica de estados de error en tiempo real durante las pruebas de regresión.