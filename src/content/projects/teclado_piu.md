---
title: "Controlador HID de 5 Teclas"
tagline: "Periférico USB-HID basado en Arduino Leonardo con pulsadores arcade e iluminación LED reactiva."
category: "embedded"
featured: false
date: 2025-06-01
heroImage: "/assets/projects/hands-piu/hero.png"
tools: ["Arduino", "C++", "PlatformIO", "Impresión 3D","OnShape"]
specs:
  "Microcontrolador": "Arduino Leonardo (ATmega32U4 - USB HID)"
  "Firmware": "C++ en PlatformIO (Librería Keyboard.h)"
  "Interfaz Física": "Matriz de 5 pulsadores tipo arcade (Mapeo W, A, S, D, Q)"
  "Etapa de Potencia LED": "Conmutación con transistores NPN y resistencias pull-down"
  "Chasis": "Carcasa paramétrica impresa en 3D (PLA)"
githubUrl: "https://github.com/andmdam"
---

## 1. Arquitectura del Sistema y Electrónica
Hands_PIU adapta la disposición diagonal de 5 paneles de una plataforma de baile *Pump It Up* a un formato compacto de escritorio operado manualmente. El sistema funciona como un periférico de interfaz humana (USB-HID) nativo, lo que permite su reconocimiento inmediato en sistemas operativos sin requerir controladores externos ni software intermediario de mapeo.

La etapa electrónica integra:
- **Unidad de control:** Microcontrolador ATmega32U4 (Arduino Leonardo) encargado de gestionar la comunicación USB-HID y la lectura digital de entradas.
- **Matriz de entrada:** Cinco pulsadores mecánicos tipo arcade acoplados a resistencias *pull-down* para garantizar estados lógicos definidos y evitar disparos espurios.
- **Etapa de iluminación:** Indicadores LED individuales gobernados mediante transistores NPN, aislando la corriente de carga respecto a los pines digitales del microcontrolador.

## 2. Firmware y Lógica de Interacción
El firmware fue desarrollado en **C++** bajo el entorno **PlatformIO**, empleando la librería nativa `Keyboard.h`. Al detectar el flanco de activación en cada pulsador, el microcontrolador transmite la pulsación de tecla correspondiente (`W`, `A`, `S`, `D`, `Q`). 

La lógica de control incorpora perfiles configurables para la retroalimentación visual de los LEDs: destello de confirmación por pulsación exitosa, iluminación continua en estado de espera y apagado automático por inactividad.

## 3. Diseño Mecánico y Manufactura Aditiva
La carcasa fue modelada paramétricamente en **SolidWorks** y fabricada mediante impresión 3D FDM en filamento PLA. El diseño estructural contempla alojamientos calibrados para el encaje a presión de los 5 botones arcade, separadores internos para la fijación mecánica de la placa electrónica y difusores dedicados para homogeneizar la salida luminosa de cada LED.

## 4. Aplicaciones y Líneas de Evolución
El prototipo sirve como plataforma experimental para el desarrollo de interfaces físicas personalizadas, sistemas de accesibilidad en videojuegos y aprendizaje de protocolos USB-HID sobre microcontroladores. Como iteraciones futuras del diseño se plantea:
- Sustitución de los pulsadores mecánicos por sensores capacitivos o piezoeléctricos de estado sólido.
- Incorporación de actuadores hápticos (motores de vibración) para retroalimentación táctil.
- Integración de una pantalla OLED para el conteo local de pulsaciones y métricas de respuesta.