# 🎃 Retos de Programación Terroríficos - Evento de Halloween 2024 🎃

¡Este repositorio contiene mi participación en el evento de **Retos de Programación Terroríficos** organizado por [midudev](https://midudev.com)! Fue una gran experiencia para poner en práctica diferentes técnicas y algoritmos, perfeccionando la lógica de programación con una ambientación de Halloween.

---

## 🧪 Descripción de los Retos y Técnicas Aplicadas

### Reto #01: Crea la poción perfecta 🧙‍♀️

**Descripción del Problema:**  
Una bruja necesita combinar dos pociones de una lista para lograr un poder específico.

**Técnica:**  
Para este reto, utilicé la técnica de "Two Sum" con un enfoque de tabla hash para lograr una eficiencia de **O(n)**. Al mantener un registro de los complementos de los poderes de las pociones, pude encontrar el par objetivo en una sola pasada por la lista, optimizando así el tiempo de ejecución.

---

### Reto #02: Horda de zombies 🧟

**Descripción del Problema:**  
Una batalla entre zombies y humanos, donde cada ronda determina el ganador según el poder de ataque de cada lado.

**Técnica:**  
Para simular las rondas de la batalla, implementé una comparación iterativa y acumulativa de los poderes de cada bando, resultando en una complejidad de **O(n)**. Esta estrategia permitió acumular los poderes según el resultado de cada ronda, controlando la ventaja de cada bando sin almacenar datos innecesarios.

---

### Reto #03: Escapa de la pesadilla de Freddy 🛌

**Descripción del Problema:**  
Encuentra el camino más seguro en un laberinto para escapar de Freddy.

**Técnica:**  
Este problema fue resuelto mediante Programación Dinámica (DP) en una matriz, donde cada celda acumulaba el menor "peligro" posible desde el inicio hasta esa posición. La solución tiene una complejidad de **O(n * m)**, donde **n** y **m** son las dimensiones del laberinto. Este enfoque optimizó el cálculo de riesgos acumulados al evitar caminos innecesarios.

---

### Reto #04: Encuentra al asesino 🔪

**Descripción del Problema:**  
Identificar al asesino con un susurro parcial de su nombre y una lista de sospechosos.

**Técnica:**  
Utilicé expresiones regulares para modelar el patrón del susurro, reemplazando caracteres inciertos por puntos (`.`) en el regex y adaptando el final del nombre si terminaba en `$`. Este enfoque tiene una complejidad promedio de **O(n * m)**, donde **n** es la longitud del susurro y **m** el número de sospechosos, optimizando la coincidencia de patrones para cada nombre en la lista.

---

### Reto #05: Terror en Silent Hill ▲

**Descripción del Problema:**  
Determinar si el temido Pyramid Head puede alcanzarte en una habitación.

**Técnica:**  
Resolví este reto utilizando el algoritmo de Búsqueda en Amplitud (BFS), ideal para problemas de alcance en matrices. La BFS fue implementada para explorar los caminos posibles de Pyramid Head en busca de la posición del jugador, asegurando una complejidad de **O(n²)** en una matriz de tamaño **n x n**. Esta solución minimizó el tiempo de búsqueda al procesar cada celda solo una vez.

---

## 💡 Reflexiones y Aprendizajes

Cada uno de estos retos fue una oportunidad para aplicar diferentes técnicas de optimización y algoritmos de búsqueda y dinámica. Participar en este evento organizado por midudev fue una excelente forma de profundizar en la resolución de problemas y mejorar mi capacidad para afrontar desafíos de programación.

---

🎃 ¡Gracias por revisar mi participación en estos retos espeluznantes! 🎃
