---
title: "Espectrofluorómetro Portátil Multifuente"
tagline: "Instrumento óptico compacto con combinación coaxial en cascada dicróica, obturador térmico de luz UV y portacubetas modular."
category: "scientific-instrumentation"
featured: true
date: 2026-07-01
heroImage: "/assets/projects/spectrofluorometer/hero.png"
tools: ["Impresión 3D", "OnShape", "LaTeX", "Mecanizado CNC"]
specs:
  "Fuentes Ópticas": "Láseres 402 nm, 452 nm, 516 nm + LED UV 365 nm"
  "Controlador Láser": "Driver OEM RGB 12 VDC (Modo CW / TTL 0–20 kHz)"
  "Regulación UV": "LM2596 (Step-Down) / LM317 (Corriente constante 500–700 mA)"
  "Alimentación": "12 VDC 3 A (Consumo: 1.73 A mín. – 2.40 A máx.)"
  "Óptica": "Cascada dicróica a 45° + Filtro ZWB2 (Wood's Glass)"
  "Mecánica": "Obturador de precalentamiento UV + Portacubetas Push-Push"
githubUrl: "https://github.com/andmdam"
---
## 1. Arquitectura Óptica, Láseres y Disposición de Espejos
El sistema óptico integra cuatro fuentes de excitación dentro de un chasis compacto para incidir sobre una cubeta de muestras, ubicando el sensor de fluorescencia a 45° respecto al haz de excitación para evitar interferencia directa:

- **Láser Verde (~516 nm):** Forma parte de un módulo láser OEM de aluminio originalmente RGB, con un consumo estimado de 250 mA a 400 mA y una caída de tensión medida de 7.1 V en vacío a 6.2 V bajo carga.
- **Láser Azul (~452 nm):** Integrado en el mismo bloque óptico, opera entre 350 mA y 600 mA con una tensión bajo carga de 5.5 V (7.1 V sin carga).
- **UV Cercano (402 nm):** Reemplaza al diodo rojo original del módulo; funciona a 5 VDC con un consumo de 250 mA a 300 mA e incorpora un disipador de calor dedicado de gran tamaño.
- **Lámpara LED UV-A (365 nm):** Diodo SMD de alta potencia en encapsulado 6565 (6.5 mm con doble chip interno en serie) que opera entre 6.2 V y 7.2 V (6.5 V–6.8 V nominales bajo carga) y 500 mA a 700 mA (hasta 1000 mA con disipación activa). Está acoplado a un filtro óptico negro ZWB2 (Wood's Glass) que bloquea el resplandor visible residual y transmite exclusivamente la banda de 365 nm. Esta lámpara LED requiere de precalentamiento por lo que se optó por añadir un sistema de obturación mientras se estabiliza en su longitud de onda idónea.

Para combinar los tres haces láser en un único eje coaxial sin desalineaciones, los elementos reflectivos se dispusieron en cascada a un ángulo de incidencia (AOI) de 45° desde el fondo hacia la salida:

1. **Fondo de la línea (Láser Verde):** Un espejo de altas prestaciones (full mirror) refleja el haz de 516 nm a 45° como haz base del canal óptico.
2. **Posición intermedia (Láser Azul):** Un beamsplitter dieléctrico azul (15 × 10 × 1.1 mm, especificación *Pass Green, Pass Red & Reflect Blue*) permite el paso recto del haz verde proveniente del fondo mientras refleja el haz azul a 45° para superponerlo coaxialmente.
3. **Salida hacia la cubeta (Láser Violeta):** Un divisor dicroico 405 nm HR (*High Reflectance*) con recubrimiento amarillo (~99 % de reflectividad a 405 nm) refleja el haz violeta hacia la muestra mientras transmite los haces verde y azul combinados.

La orientación correcta de cada lámina se validó experimentalmente mediante el test del lápiz (paralaje de reflexión), verificando que la punta y su reflejo se toquen sin separación para garantizar que los láseres incidan directamente sobre la cara con recubrimiento dieléctrico y evitar dobles reflexiones (*ghosting*) o refracción en el sustrato de vidrio. Además, se diseñaron cunas en V (*V-grooves*) impresas en 3D para centrar automáticamente los cilindros de los láseres en un mismo plano horizontal.

## 2. Electrónica, Controlador y Gestión de Potencia
La etapa electrónica centraliza el control de las fuentes luminosas, la regulación de corriente y la distribución de energía mediante las siguientes soluciones:

- **Controlador OEM de Láseres:** Placa alimentada a 12 VDC con reguladores reductores (*buck*) integrados que ajustan automáticamente el voltaje de salida para mantener corriente constante en cada diodo. Soporta modulación TTL (0–20 kHz, niveles lógicos de 3.3 V a 5 V) y operación en onda continua (CW), configurándose en modo continuo para las mediciones del equipo.
- **Regulación para el LED UV de 365 nm:** Debido al coeficiente de temperatura negativo del semiconductor UV y su caída de voltaje umbral al calentarse, se implementó regulación mediante convertidor reductor LM2596 y regulador lineal de corriente constante LM317 (configurado con resistencia de potencia R = 1.25 V / 0.7 A ≈ 1.78 Ω) para evitar embalamiento térmico y parpadeos por protección de sobrecorriente.
- **Presupuesto de Corriente y Fuente:** El análisis energético del sistema completo determinó un consumo mínimo de 1.73 A (1,725 mA) y un máximo de 2.40 A (2,400 mA) (incluyendo 75–100 mA de los leds indicadores). Tras evaluar una topología en cascada desde USB 5 V con convertidor *boost* a 12 V (y considerar un paquete de baterías 18650 en serie 3S de 11.1–12.6 V), se optó por una fuente estabilizada de 12 VDC y 3 A que garantiza margen suficiente sin caídas de tensión, evitando así errores al tomar las mediciones o al usar varios láseres en conjunto.
- **Conmutación en Positivo e Indicadores:** Cada canal cuenta con un interruptor mecánico en la línea positiva (corte en el positivo) que alimenta en paralelo tanto la fuente óptica como un LED indicador de estado con su resistencia dedicada (por ejemplo, 330 Ω para el canal verde a 6.2 V y 150–220 Ω para el azul a 5.5 V, limitando la corriente a 15–20 mA).
- **Arquitectura de Tierra en Estrella (Star Ground):** Todos los retornos negativos (fuente de 12 V, drivers láser, LM317, indicadores LED y referencia TTL) convergen en un único nodo central para eliminar bucles de tierra y ruido de conmutación.

## 3. Diseño Mecánico, Gestión Térmica y Documentación
El chasis y los subensambles mecánicos fueron modelados paramétricamente en OnShape utilizando control de versiones (V1.0), operaciones de partición (*Split*) para ajustes modulares de distancia entre la lámpara UV y la cubeta, vistas explosionadas y planos técnicos 2D:

- **Obturador Mecánico de Precalentamiento UV:** Pestaña móvil integrada en el chasis frente al LED de 365 nm que bloquea físicamente el haz durante los primeros minutos de calentamiento (*warm-up*), permitiendo que la fuente alcance estabilidad térmica sin exponer ni fotodegradar prematuramente la muestra en la cubeta.
- **Portacubetas con Mecanismo Push-Push:** Sistema compacto basado en un mecanismo de corazón (*heart track* con seguidor y resorte de retorno, inspirado en lectores de tarjetas SD) que permite insertar y expulsar verticalmente la cubeta por pulsación sin desalinear los componentes ópticos adyacentes.
- **Disipación Térmica y Flujo de Aire:** Bloque disipador de aluminio mecanizado en CNC con pasta térmica para evacuar el calor del LED UV de 365 nm. La carcasa impresa en 3D que tiene áreas de ventilación.
- **Documentación Técnica y Propiedad Intelectual:** Elaboración de la guía de ensamblaje y memoria descriptiva en inglés utilizando LaTeX (clase `book` con paquetes `siunitx`, `booktabs`, `tikz` y `tcolorbox`), junto con la estructuración de planos normalizados en blanco y negro para el registro del instrumento como instrumentación educativa bajo costo.