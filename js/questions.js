// questions.js — 50 preguntas de Python con espacios en blanco
// Secciones 1-5: FOR, WHILE, Gauss/Factorial, Fibonacci, Matrices (50 pts)
// Secciones 6-7: Funciones de usuario, import/numpy/math  (+33 pts)
// ── Total: 50 pts (1 pt por pregunta) ───────────────────────────────────

const QUIZ_SECTIONS = [
  { id: 1, name: "Ciclos FOR",          abbrev: "FOR",       color: "#3B82F6" },
  { id: 2, name: "Ciclos WHILE",        abbrev: "WHILE",     color: "#8B5CF6" },
  { id: 3, name: "Gauss y Factorial",   abbrev: "Gauss",     color: "#10B981" },
  { id: 4, name: "Serie Fibonacci",     abbrev: "Fibonacci", color: "#F59E0B" },
  { id: 5, name: "Matrices 2D",         abbrev: "Matrices",  color: "#EF4444" },
  { id: 6, name: "Funciones",           abbrev: "def/if",    color: "#EC4899" },
  { id: 7, name: "import / numpy",      abbrev: "import",    color: "#06B6D4" },
];

const QUIZ_QUESTIONS = [

  // ══════════════════════════════════════════════════════
  // SECCIÓN 1 — Ciclos FOR con condicionales (12 pts)
  // ══════════════════════════════════════════════════════

  {
    id: 1, section: 1, points: 1,
    topic: "Clasificador Par/Impar",
    question: "Completa el ciclo FOR para imprimir si cada número es par o impar:",
    code:
`numeros = [1, 4, 7, 10, 13]
for n in numeros:
    if n [1] 2 == 0:
        print(n, "es [2]")
    else:
        print(n, "es impar")`,
    blanks: [
      { id: 1, options: ["%", "//", "**", "+"],                 correct: "%" },
      { id: 2, options: ["par", "positivo", "cero", "negativo"], correct: "par" },
    ],
  },

  {
    id: 2, section: 1, points: 1,
    topic: "Validación de contraseña",
    question: "Completa el ciclo FOR con control de contraseña y acceso denegado:",
    code:
`for i in [1](3):
    clave = input("Ingrese clave: ")
    if clave [2] "python123":
        print("Acceso permitido")
        [3]
    print("Intento fallido")
else:
    print("Acceso [4]")`,
    blanks: [
      { id: 1, options: ["range", "len", "list", "int"],                   correct: "range" },
      { id: 2, options: ["==", "!=", ">=", "in"],                          correct: "==" },
      { id: 3, options: ["break", "continue", "pass", "return"],           correct: "break" },
      { id: 4, options: ["denegado", "permitido", "bloqueado", "inválido"],correct: "denegado" },
    ],
  },

  {
    id: 3, section: 1, points: 1,
    topic: "Calificador de exámenes",
    question: "Completa la función que devuelve la calificación letra según la nota:",
    code:
`def calificar(nota):
    if nota >= [1]:
        return "A"
    [2] nota >= 70:
        return "B"
    [3]:
        return "[4]"`,
    blanks: [
      { id: 1, options: ["90", "80", "70", "60"],              correct: "90" },
      { id: 2, options: ["elif", "else if", "or", "while"],    correct: "elif" },
      { id: 3, options: ["else", "finally", "default", "except"], correct: "else" },
      { id: 4, options: ["F", "C", "D", "E"],                  correct: "F" },
    ],
  },

  {
    id: 4, section: 1, points: 1,
    topic: "Procesamiento con continue",
    question: "Completa el ciclo que omite 'monitor' y finaliza con bloque else:",
    code:
`dispositivos = ["teclado", "monitor", "mouse"]
for i in range([1](dispositivos)):
    if dispositivos[i] == "[2]":
        [3]
    print(dispositivos[i])
[4]:
    print("Recorrido completado")`,
    blanks: [
      { id: 1, options: ["len", "size", "count", "max"],               correct: "len" },
      { id: 2, options: ["monitor", "teclado", "mouse", "pantalla"],   correct: "monitor" },
      { id: 3, options: ["continue", "break", "pass", "return"],       correct: "continue" },
      { id: 4, options: ["else", "finally", "except", "then"],         correct: "else" },
    ],
  },

  {
    id: 5, section: 1, points: 1,
    topic: "Contador de vocales",
    question: "Completa el ciclo FOR que cuenta las vocales de un texto:",
    code:
`texto = "programacion"
contador_vocales = 0
for letra in texto:
    if letra.[1]() [2] "aeiou":
        contador_vocales [3] 1
print("Vocales:", [4])`,
    blanks: [
      { id: 1, options: ["lower", "upper", "strip", "split"],                        correct: "lower" },
      { id: 2, options: ["in", "not in", "==", "is"],                               correct: "in" },
      { id: 3, options: ["+=", "-=", "*=", "/="],                                   correct: "+=" },
      { id: 4, options: ["contador_vocales", "contador", "total", "suma"],           correct: "contador_vocales" },
    ],
  },

  {
    id: 6, section: 1, points: 1,
    topic: "Recorrido de arreglos — Planetas",
    question: "Completa el ciclo FOR que recorre planetas y usa bloque else:",
    code:
`planetas = ["Mercurio", "Venus", "Tierra", "Marte"]
for [1] in planetas:
    if nombre == "[2]":
        print("¡Planeta habitable!")
    else:
        print(nombre.[3]())
[4]:
    print("Recorrido completado")`,
    blanks: [
      { id: 1, options: ["nombre", "planeta", "item", "x"],           correct: "nombre" },
      { id: 2, options: ["Tierra", "Venus", "Marte", "Luna"],         correct: "Tierra" },
      { id: 3, options: ["upper", "lower", "strip", "title"],         correct: "upper" },
      { id: 4, options: ["else", "finally", "except", "pass"],        correct: "else" },
    ],
  },

  {
    id: 7, section: 1, points: 1,
    topic: "enumerate con puntajes",
    question: "Completa el ciclo que usa enumerate para mostrar posición y puntaje:",
    code:
`puntajes = [75, 90, 85, 60, 95]
for i, puntaje in [1](puntajes):
    if puntaje >= [2]:
        resultado = "Aprobado"
    else:
        resultado = "Reprobado"
    print(f"Est. {i [3] 1}: {puntaje} — {resultado}")
print("Total:", sum([4]))`,
    blanks: [
      { id: 1, options: ["enumerate", "zip", "range", "sorted"],   correct: "enumerate" },
      { id: 2, options: ["90", "70", "60", "80"],                  correct: "90" },
      { id: 3, options: ["+", "-", "*", "/"],                      correct: "+" },
      { id: 4, options: ["puntajes", "resultado", "lista", "datos"], correct: "puntajes" },
    ],
  },

  {
    id: 8, section: 1, points: 1,
    topic: "zip con productos y precios",
    question: "Completa el ciclo que usa zip para clasificar productos por precio:",
    code:
`productos = ["Laptop", "Mouse", "Teclado"]
precios   = [2500000, 80000, 150000]
for producto, precio in [1](productos, precios):
    if precio [2] 100000:
        tipo = "[3]"
    else:
        tipo = "Economico"
    [4] = tipo
print(f"{producto} → {categoria}")`,
    blanks: [
      { id: 1, options: ["zip", "enumerate", "range", "map"],          correct: "zip" },
      { id: 2, options: [">", "<", ">=", "<="],                        correct: ">" },
      { id: 3, options: ["Alto", "Barato", "Costoso", "Grande"],       correct: "Alto" },
      { id: 4, options: ["categoria", "precio", "producto", "tipo"],   correct: "categoria" },
    ],
  },

  // ══════════════════════════════════════════════════════
  // SECCIÓN 2 — Ciclos WHILE (10 pts)
  // ══════════════════════════════════════════════════════

  {
    id: 9, section: 2, points: 1,
    topic: "Múltiplos de 3 con WHILE",
    question: "Completa el ciclo WHILE que cuenta múltiplos de 3 hasta 30:",
    code:
`[1] = 0
numero = 1
while numero <= 30:
    if numero [2] 3 == 0:
        [1] [3] 1
    numero += 1
print("Múltiplos de 3:", contador)`,
    blanks: [
      { id: 1, options: ["contador", "numero", "total", "suma"],  correct: "contador" },
      { id: 2, options: ["%", "//", "**", "+"],                   correct: "%" },
      { id: 3, options: ["+=", "-=", "*=", "/="],                 correct: "+=" },
    ],
  },

  {
    id: 10, section: 2, points: 1,
    topic: "Adivina el número",
    question: "Completa el juego de adivinar un número secreto con WHILE:",
    code:
`numero_secreto = 42
while [1]:
    intento = int(input("Adivina: "))
    if intento == [2]:
        print("¡Correcto!")
        [3]
    elif intento < numero_secreto:
        print("Muy [4]")
    else:
        print("Muy alto")`,
    blanks: [
      { id: 1, options: ["True", "False", "1", "None"],                       correct: "True" },
      { id: 2, options: ["numero_secreto", "intento", "42", "numero"],        correct: "numero_secreto" },
      { id: 3, options: ["break", "continue", "pass", "return"],              correct: "break" },
      { id: 4, options: ["bajo", "alto", "pequeño", "poco"],                  correct: "bajo" },
    ],
  },

  {
    id: 11, section: 2, points: 1,
    topic: "Simulación de descuentos",
    question: "Completa el WHILE que aplica descuento del 5 % hasta cierto límite:",
    code:
`precio = 200.0
[1] precio > [2]:
    precio [3] (1 - [4])
    print(f"Precio: {precio:.2f}")
print("Precio final:", precio)`,
    blanks: [
      { id: 1, options: ["while", "for", "if", "do"],         correct: "while" },
      { id: 2, options: ["140.0", "100.0", "150.0", "180.0"], correct: "140.0" },
      { id: 3, options: ["*=", "+=", "-=", "/="],             correct: "*=" },
      { id: 4, options: ["0.05", "0.1", "0.15", "0.2"],      correct: "0.05" },
    ],
  },

  {
    id: 12, section: 2, points: 1,
    topic: "Gestor de tareas",
    question: "Completa el WHILE que procesa tareas con pop() hasta vaciar la lista:",
    code:
`[1] = ["comprar", "estudiar", "llamar", "cocinar"]
while [4]([1]) > 0:
    tarea = [1].[2](0)
    if "estudiar" [3] [1]:
        print("Tarea académica pendiente")
    print(f"Completada: {tarea}")`,
    blanks: [
      { id: 1, options: ["tareas", "lista", "items", "pendientes"],  correct: "tareas" },
      { id: 2, options: ["pop", "remove", "append", "insert"],       correct: "pop" },
      { id: 3, options: ["in", "not in", "==", "is"],                correct: "in" },
      { id: 4, options: ["len", "size", "count", "range"],           correct: "len" },
    ],
  },

  {
    id: 13, section: 2, points: 1,
    topic: "Menú interactivo",
    question: "Completa el menú WHILE con input y elif para múltiples opciones:",
    code:
`opcion = ""
while opcion [1] "4":
    opcion = [2]("1-Ver  2-Agregar  3-Eliminar  4-Salir\\n> ")
    if opcion == "[3]":
        print("Mostrando lista...")
    [4] opcion == "2":
        print("Agregando elemento...")`,
    blanks: [
      { id: 1, options: ["!=", "==", ">=", "<="],            correct: "!=" },
      { id: 2, options: ["input", "print", "str", "int"],    correct: "input" },
      { id: 3, options: ["1", "2", "3", "4"],                correct: "1" },
      { id: 4, options: ["elif", "else", "if", "while"],     correct: "elif" },
    ],
  },

  {
    id: 14, section: 2, points: 1,
    topic: "Verificación de stock",
    question: "Completa el WHILE con índice para contar productos con stock cero:",
    code:
`stock = [5, 0, 3, 0, 8, 0, 2]
i = [1]
sin_stock = 0
while i < [2](stock):
    if stock[i] == 0:
        sin_stock += 1
    [3] [4] 1
print("Sin stock:", sin_stock)`,
    blanks: [
      { id: 1, options: ["0", "1", "-1", "len(stock)"],        correct: "0" },
      { id: 2, options: ["len", "size", "count", "max"],       correct: "len" },
      { id: 3, options: ["i", "j", "k", "idx"],                correct: "i" },
      { id: 4, options: ["+=", "-=", "*=", "/="],              correct: "+=" },
    ],
  },

  // ══════════════════════════════════════════════════════
  // SECCIÓN 3 — Suma de Gauss y Factorial (12 pts)
  // ══════════════════════════════════════════════════════

  {
    id: 15, section: 3, points: 1,
    topic: "Suma de Gauss — FOR básico",
    question: "Completa el FOR que suma 1 a n y verifica con la fórmula de Gauss:",
    code:
`n = 100
suma = 0
for i in [1](1, n + 1):
    suma [2] i
[4] = n [3] (n + 1) // 2
print(f"FOR: {suma}, Fórmula: {formula_check}")`,
    blanks: [
      { id: 1, options: ["range", "list", "len", "enumerate"],                correct: "range" },
      { id: 2, options: ["+=", "-=", "*=", "/="],                             correct: "+=" },
      { id: 3, options: ["*", "+", "-", "/"],                                 correct: "*" },
      { id: 4, options: ["formula_check", "suma", "resultado", "total"],      correct: "formula_check" },
    ],
  },

  {
    id: 16, section: 3, points: 1,
    topic: "Suma de Gauss — detallada",
    question: "Completa el FOR que muestra la expresión de la suma y la convierte a string:",
    code:
`n = 10
[4] = 0
for i in [1](1, n + 1):
    if i [2] n:
        print(f"{i} + ", end="")
    else:
        print(f"{i} = ", end="")
    [4] += i
print([3]([4]))`,
    blanks: [
      { id: 1, options: ["range", "list", "enumerate", "zip"],               correct: "range" },
      { id: 2, options: ["<", ">", "<=", "=="],                              correct: "<" },
      { id: 3, options: ["str", "int", "float", "len"],                      correct: "str" },
      { id: 4, options: ["suma_gauss", "resultado", "total", "acumulado"],   correct: "suma_gauss" },
    ],
  },

  {
    id: 17, section: 3, points: 1,
    topic: "Suma de Gauss — WHILE ascendente",
    question: "Completa el WHILE que suma números impares hasta n con paso 2:",
    code:
`n = 50
i = [1]
suma = 0
while i [2] n:
    suma [3] i
    i += [4]
print(f"Suma de impares hasta {n}: {suma}")`,
    blanks: [
      { id: 1, options: ["1", "0", "2", "-1"],                correct: "1" },
      { id: 2, options: ["<=", "<", ">=", ">"],               correct: "<=" },
      { id: 3, options: ["+=", "-=", "*=", "/="],             correct: "+=" },
      { id: 4, options: ["2", "1", "3", "n"],                 correct: "2" },
    ],
  },

  {
    id: 18, section: 3, points: 1,
    topic: "Factorial — FOR descendente",
    question: "Completa el FOR descendente que calcula el factorial y lo guarda en una variable:",
    code:
`n = 6
if n == [1]:
    resultado = 1
else:
    resultado = 1
    for i in range(n, [2], -1):
        resultado [3] i
[4] = resultado
print(f"{n}! = {factorial_resultado}")`,
    blanks: [
      { id: 1, options: ["0", "1", "-1", "None"],                                   correct: "0" },
      { id: 2, options: ["0", "1", "-1", "2"],                                      correct: "0" },
      { id: 3, options: ["*=", "+=", "-=", "/="],                                   correct: "*=" },
      { id: 4, options: ["factorial_resultado", "resultado", "factorial", "total"],  correct: "factorial_resultado" },
    ],
  },

  {
    id: 19, section: 3, points: 1,
    topic: "Factorial — FOR ascendente",
    question: "Completa el FOR ascendente que calcula el factorial de n:",
    code:
`n = 6
factorial = [1]
for i in [2](1, n + 1):
    factorial [3] i
print(f"Factorial de [4] = {factorial}")`,
    blanks: [
      { id: 1, options: ["1", "0", "n", "-1"],                    correct: "1" },
      { id: 2, options: ["range", "list", "len", "enumerate"],    correct: "range" },
      { id: 3, options: ["*=", "+=", "-=", "/="],                 correct: "*=" },
      { id: 4, options: ["6", "n", "i", "5"],                     correct: "6" },
    ],
  },

  {
    id: 20, section: 3, points: 1,
    topic: "Factorial — cadena formateada",
    question: "Completa el FOR que construye la expresión matemática del factorial como string:",
    code:
`n = 5
factorial = 1
[4] = ""
for i in range(1, n + 1):
    factorial *= i
    if i [1] 1:
        [4] = [4] + " × " + [2](i)
    [3]:
        [4] = [2](i)
print(f"{expresion_matematica} = {factorial}")`,
    blanks: [
      { id: 1, options: [">", "<", "==", ">="],                                              correct: ">" },
      { id: 2, options: ["str", "int", "float", "repr"],                                     correct: "str" },
      { id: 3, options: ["else", "elif", "finally", "except"],                               correct: "else" },
      { id: 4, options: ["expresion_matematica", "formula", "cadena", "texto"],              correct: "expresion_matematica" },
    ],
  },

  // ══════════════════════════════════════════════════════
  // SECCIÓN 4 — Serie de Fibonacci (8 pts)
  // ══════════════════════════════════════════════════════

  {
    id: 21, section: 4, points: 1,
    topic: "Fibonacci — FOR básico con lista",
    question: "Completa el FOR que genera n términos de Fibonacci usando índices negativos:",
    code:
`n = 8
fib = [[1], 1]
for _ in [2](n - 2):
    fib.[4](fib[[3]] + fib[-2])
print(fib)`,
    blanks: [
      { id: 1, options: ["0", "1", "-1", "None"],                   correct: "0" },
      { id: 2, options: ["range", "list", "len", "enumerate"],      correct: "range" },
      { id: 3, options: ["-1", "-2", "0", "1"],                     correct: "-1" },
      { id: 4, options: ["append", "insert", "add", "push"],        correct: "append" },
    ],
  },

  {
    id: 22, section: 4, points: 1,
    topic: "Fibonacci — FOR con break",
    question: "Completa el FOR que genera Fibonacci y se detiene cuando supera 100:",
    code:
`fib = [0, 1]
for i in range(20):
    nuevo = fib[i] [2] fib[i + 1]
    fib.append(nuevo)
    if nuevo [3] 100:
        [4]
print(f"Penúltimo: {fib[[1]]}")`,
    blanks: [
      { id: 1, options: ["-2", "-1", "0", "1"],                    correct: "-2" },
      { id: 2, options: ["+", "-", "*", "/"],                      correct: "+" },
      { id: 3, options: [">", "<", ">=", "<="],                    correct: ">" },
      { id: 4, options: ["break", "continue", "pass", "return"],   correct: "break" },
    ],
  },

  {
    id: 23, section: 4, points: 1,
    topic: "Fibonacci — WHILE con contador",
    question: "Completa el WHILE que genera Fibonacci controlando el número de términos:",
    code:
`fib = [0, 1]
contador = [1]
[2] contador <= 10:
    siguiente = fib[-1] + fib[-2]
    fib.[3](siguiente)
    contador [4] 1
print(fib)`,
    blanks: [
      { id: 1, options: ["2", "1", "0", "3"],                      correct: "2" },
      { id: 2, options: ["while", "for", "if", "do"],              correct: "while" },
      { id: 3, options: ["append", "insert", "add", "push"],       correct: "append" },
      { id: 4, options: ["+=", "-=", "*=", "/="],                  correct: "+=" },
    ],
  },

  {
    id: 24, section: 4, points: 1,
    topic: "Fibonacci — WHILE con límite de valor",
    question: "Completa el WHILE que agrega términos de Fibonacci menores o iguales a 1000:",
    code:
`a, b = 0, [1]
[4] = []
while b [2] 1000:
    [4].append([3])
    a, b = b, a + b
print(f"Fibonacci hasta 1000: {secuencia}")`,
    blanks: [
      { id: 1, options: ["1", "0", "2", "-1"],                  correct: "1" },
      { id: 2, options: ["<=", "<", ">=", ">"],                  correct: "<=" },
      { id: 3, options: ["b", "a", "a+b", "0"],                 correct: "b" },
      { id: 4, options: ["secuencia", "lista", "fibonacci", "resultado"], correct: "secuencia" },
    ],
  },

  // ══════════════════════════════════════════════════════
  // SECCIÓN 5 — Matrices Bidimensionales (8 pts)
  // ══════════════════════════════════════════════════════

  {
    id: 25, section: 5, points: 1,
    topic: "Matriz FOR — recorrido por valor",
    question: "Completa el doble FOR que imprime la matriz fila por fila:",
    code:
`matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for [1] in matriz:
    for [2] in [1]:
        [4]([2], [3]=" ")
    print()`,
    blanks: [
      { id: 1, options: ["fila", "row", "lista", "item"],         correct: "fila" },
      { id: 2, options: ["elemento", "col", "val", "num"],        correct: "elemento" },
      { id: 3, options: ["end", "sep", "file", "flush"],          correct: "end" },
      { id: 4, options: ["print", "write", "show", "display"],    correct: "print" },
    ],
  },

  {
    id: 26, section: 5, points: 1,
    topic: "Matriz FOR — suma por índice",
    question: "Completa el doble FOR por índice que suma todos los elementos:",
    code:
`matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
total = 0
for i in [1]([2](matriz)):
    for j in [1]([2](matriz[[3]])):
        total [4] matriz[i][j]
print("Suma total:", total)`,
    blanks: [
      { id: 1, options: ["range", "list", "enumerate", "zip"],  correct: "range" },
      { id: 2, options: ["len", "size", "count", "max"],        correct: "len" },
      { id: 3, options: ["i", "j", "0", "k"],                   correct: "i" },
      { id: 4, options: ["+=", "-=", "*=", "/="],               correct: "+=" },
    ],
  },

  {
    id: 27, section: 5, points: 1,
    topic: "Matriz FOR — modificación de elementos",
    question: "Completa el doble FOR que multiplica por 2 cada elemento de la matriz:",
    code:
`matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
[4] i in [1](len(matriz)):
    for j in [1](len(matriz[[2]])):
        matriz[[2]][j] [3] 2
print(matriz)`,
    blanks: [
      { id: 1, options: ["range", "list", "len", "zip"],     correct: "range" },
      { id: 2, options: ["i", "j", "fila", "k"],             correct: "i" },
      { id: 3, options: ["*=", "+=", "-=", "/="],            correct: "*=" },
      { id: 4, options: ["for", "while", "if", "do"],        correct: "for" },
    ],
  },

  {
    id: 28, section: 5, points: 1,
    topic: "Matriz WHILE — recorrido con índices",
    question: "Completa el doble WHILE con índices i y j para imprimir la matriz:",
    code:
`matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
i = [3]
while i [2] [1](matriz):
    j = 0
    while j < [1](matriz[i]):
        print(matriz[i][j], end=" ")
        j [4] 1
    print()
    i += 1`,
    blanks: [
      { id: 1, options: ["len", "size", "count", "range"],    correct: "len" },
      { id: 2, options: ["<", ">", "<=", ">="],               correct: "<" },
      { id: 3, options: ["0", "1", "-1", "None"],             correct: "0" },
      { id: 4, options: ["+=", "-=", "*=", "/="],             correct: "+=" },
    ],
  },

  {
    id: 29, section: 5, points: 1,
    topic: "Matriz WHILE — búsqueda con parada",
    question: "Completa el doble WHILE que busca un valor y para al encontrarlo:",
    code:
`matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
[4] = [1]
[2] = 5
i = 0
while i < len(matriz) and not [4]:
    j = 0
    while j < len(matriz[i]):
        if matriz[i][j] == [2]:
            [4] = True
            [3]
        j += 1
    i += 1`,
    blanks: [
      { id: 1, options: ["False", "True", "None", "0"],                  correct: "False" },
      { id: 2, options: ["valor_buscado", "target", "buscar", "valor"],  correct: "valor_buscado" },
      { id: 3, options: ["break", "continue", "pass", "return"],         correct: "break" },
      { id: 4, options: ["encontrado", "resultado", "hallado", "found"], correct: "encontrado" },
    ],
  },

  {
    id: 30, section: 5, points: 1,
    topic: "Crear matriz con FOR",
    question: "Completa el doble FOR que crea una matriz de filas × columnas:",
    code:
`filas, [2] = 3, 4
matriz = []
for i in [1](filas):
    fila = []
    for j in [1]([2]):
        fila.[3](j * i)
    matriz.[4](fila)
print(matriz)`,
    blanks: [
      { id: 1, options: ["range", "list", "len", "enumerate"],   correct: "range" },
      { id: 2, options: ["columnas", "cols", "n", "m"],          correct: "columnas" },
      { id: 3, options: ["append", "insert", "add", "extend"],   correct: "append" },
      { id: 4, options: ["append", "insert", "add", "extend"],   correct: "append" },
    ],
  },

  // ══════════════════════════════════════════════════════
  // SECCIÓN 6 — Funciones de usuario (18 pts)
  // def, return, tramos if/elif/else, int(), float(),
  // for + if internos dentro de funciones
  // ══════════════════════════════════════════════════════

  {
    id: 31, section: 6, points: 1,
    topic: "def con return básico",
    question: "Completa la función que calcula el área de un rectángulo:",
    code:
`[1] area_rectangulo(base, [2]):
    area = base [3] altura
    [4] area

print(area_rectangulo(5, 3))`,
    blanks: [
      { id: 1, options: ["def", "function", "fun", "lambda"],   correct: "def" },
      { id: 2, options: ["altura", "h", "alto", "y"],           correct: "altura" },
      { id: 3, options: ["*", "+", "-", "/"],                    correct: "*" },
      { id: 4, options: ["return", "print", "yield", "pass"],   correct: "return" },
    ],
  },

  {
    id: 32, section: 6, points: 1,
    topic: "def con parámetro por defecto",
    question: "Completa la función de potencia con exponente opcional (default = 2):",
    code:
`def potencia(base, [1]=2):
    [2] = base [3] [4]
    return resultado

print(potencia(3))
print(potencia(2, 8))`,
    blanks: [
      { id: 1, options: ["exponente", "exp", "n", "e"],             correct: "exponente" },
      { id: 2, options: ["resultado", "res", "valor", "total"],     correct: "resultado" },
      { id: 3, options: ["**", "*", "+", "//"],                     correct: "**" },
      { id: 4, options: ["exponente", "base", "2", "n"],            correct: "exponente" },
    ],
  },

  {
    id: 33, section: 6, points: 1,
    topic: "Función por tramos — 2 casos (if/else)",
    question: "Completa la función dostramos: devuelve x² si x≥0, o −x² si x<0:",
    code:
`def dostramos(x):
    if x [1] 0:
        return x [2] 2
    [3]:
        return [4]x ** 2

print(dostramos(4))
print(dostramos(-3))`,
    blanks: [
      { id: 1, options: [">=", ">", "<=", "=="],                    correct: ">=" },
      { id: 2, options: ["**", "*", "+", "//"],                     correct: "**" },
      { id: 3, options: ["else", "elif", "finally", "except"],      correct: "else" },
      { id: 4, options: ["-", "+", "abs(", "~"],                    correct: "-" },
    ],
  },

  {
    id: 34, section: 6, points: 1,
    topic: "Función por tramos — 3 casos (if/elif/else)",
    question: "Completa la función trestramos con tres intervalos distintos:",
    code:
`def tres_tramos(x):
    if x [1] 1:
        return x
    [2] x <= 5:
        return 2 [3] x
    [4]:
        return x ** 3

print(tres_tramos(0))
print(tres_tramos(3))
print(tres_tramos(7))`,
    blanks: [
      { id: 1, options: ["<=", "<", ">=", "=="],                    correct: "<=" },
      { id: 2, options: ["elif", "else if", "or", "while"],         correct: "elif" },
      { id: 3, options: ["*", "+", "**", "/"],                      correct: "*" },
      { id: 4, options: ["else", "finally", "except", "default"],   correct: "else" },
    ],
  },

  {
    id: 35, section: 6, points: 1,
    topic: "Función por tramos — 4 casos",
    question: "Completa la función que clasifica un número en cuatro categorías:",
    code:
`def clasificar(x):
    if x > 0:   return "[1]"
    elif x < 0: return "[2]"
    [3]:        return "[4]"

for v in [5, -3, 0]:
    print(clasificar(v))`,
    blanks: [
      { id: 1, options: ["Positivo", "Mayor", "Grande", "Arriba"],  correct: "Positivo" },
      { id: 2, options: ["Negativo", "Menor", "Chico", "Abajo"],    correct: "Negativo" },
      { id: 3, options: ["else", "elif", "finally", "except"],      correct: "else" },
      { id: 4, options: ["Cero", "Nulo", "Vacío", "Neutro"],        correct: "Cero" },
    ],
  },

  {
    id: 36, section: 6, points: 1,
    topic: "Uso de int() en función",
    question: "Completa la función que convierte texto a entero y determina mayoría de edad:",
    code:
`def es_mayor(edad_texto):
    edad = [1](edad_texto)
    if edad [2] 18:
        return [3]
    [4] False

print(es_mayor("20"))
print(es_mayor("15"))`,
    blanks: [
      { id: 1, options: ["int", "float", "str", "bool"],            correct: "int" },
      { id: 2, options: [">=", ">", "<=", "=="],                    correct: ">=" },
      { id: 3, options: ["True", "False", "1", "None"],             correct: "True" },
      { id: 4, options: ["return", "print", "yield", "pass"],       correct: "return" },
    ],
  },

  {
    id: 37, section: 6, points: 1,
    topic: "Uso de float() en función",
    question: "Completa la función que calcula el IMC a partir de cadenas de texto:",
    code:
`def calcular_imc(peso_str, talla_str):
    peso  = [1](peso_str)
    talla = [2](talla_str)
    imc   = peso / talla [3] 2
    [4] round(imc, 2)

print(calcular_imc("70", "1.75"))`,
    blanks: [
      { id: 1, options: ["float", "int", "str", "bool"],            correct: "float" },
      { id: 2, options: ["float", "int", "str", "round"],           correct: "float" },
      { id: 3, options: ["**", "*", "+", "/"],                      correct: "**" },
      { id: 4, options: ["return", "print", "yield", "pass"],       correct: "return" },
    ],
  },

  {
    id: 38, section: 6, points: 1,
    topic: "Función con for + condicional interno",
    question: "Completa la función que suma solo los números positivos de una lista:",
    code:
`def suma_positivos([1]):
    total = 0
    [2] num in lista:
        if num [3] 0:
            total [4] num
    return total

print(suma_positivos([-1, 3, -2, 5, 4]))`,
    blanks: [
      { id: 1, options: ["lista", "numeros", "arr", "data"],        correct: "lista" },
      { id: 2, options: ["for", "while", "if", "in"],               correct: "for" },
      { id: 3, options: [">", "<", ">=", "!="],                     correct: ">" },
      { id: 4, options: ["+=", "-=", "*=", "/="],                   correct: "+=" },
    ],
  },

  {
    id: 39, section: 6, points: 1,
    topic: "Función con for + contador interno",
    question: "Completa la función que cuenta cuántas notas superan el mínimo:",
    code:
`def contar_aprobados(notas, [1]):
    aprobados = 0
    for nota in [2]:
        if nota [3] minimo:
            aprobados [4] 1
    return aprobados

print(contar_aprobados([70, 85, 55, 90, 48], 60))`,
    blanks: [
      { id: 1, options: ["minimo", "base", "umbral", "corte"],      correct: "minimo" },
      { id: 2, options: ["notas", "lista", "arr", "valores"],       correct: "notas" },
      { id: 3, options: [">=", ">", "<=", "!="],                    correct: ">=" },
      { id: 4, options: ["+=", "-=", "*=", "/="],                   correct: "+=" },
    ],
  },

  {
    id: 40, section: 6, points: 1,
    topic: "Función con for que construye lista",
    question: "Completa la función que genera los cuadrados de los números pares hasta n:",
    code:
`def cuadrados_pares(n):
    resultado = []
    for i in range([1]):
        if i [2] 2 == 0:
            resultado.[3](i [4] 2)
    return resultado

print(cuadrados_pares(10))`,
    blanks: [
      { id: 1, options: ["n", "n+1", "n-1", "10"],                  correct: "n" },
      { id: 2, options: ["%", "//", "**", "+"],                     correct: "%" },
      { id: 3, options: ["append", "insert", "add", "push"],        correct: "append" },
      { id: 4, options: ["**", "*", "+", "//"],                     correct: "**" },
    ],
  },

  // ══════════════════════════════════════════════════════
  // SECCIÓN 7 — import / numpy / math (15 pts)
  // import math, from math import, math.sqrt/pi/sin/cos/
  // floor/ceil/factorial, import numpy as np,
  // np.array/mean/std/sum/max/min/zeros/ones/linspace
  // ══════════════════════════════════════════════════════

  {
    id: 41, section: 7, points: 1,
    topic: "import math — funciones básicas",
    question: "Completa el código que importa math y usa pi, sqrt y floor:",
    code:
`[1] math

print(math.[2])
print(math.[3](16))
print(math.[4](2.7))`,
    blanks: [
      { id: 1, options: ["import", "from", "using", "include"],     correct: "import" },
      { id: 2, options: ["pi", "e", "tau", "inf"],                  correct: "pi" },
      { id: 3, options: ["sqrt", "pow", "log", "exp"],              correct: "sqrt" },
      { id: 4, options: ["floor", "ceil", "round", "trunc"],        correct: "floor" },
    ],
  },

  {
    id: 42, section: 7, points: 1,
    topic: "from math import",
    question: "Completa la importación selectiva de sqrt, pi y factorial:",
    code:
`[1] math [2] sqrt, pi, factorial

print([3](25))
print([4](5))
print(pi)`,
    blanks: [
      { id: 1, options: ["from", "import", "using", "load"],        correct: "from" },
      { id: 2, options: ["import", "as", "use", "get"],             correct: "import" },
      { id: 3, options: ["sqrt", "pi", "factorial", "log"],         correct: "sqrt" },
      { id: 4, options: ["factorial", "sqrt", "pi", "floor"],       correct: "factorial" },
    ],
  },

  {
    id: 43, section: 7, points: 1,
    topic: "math en funciones propias",
    question: "Completa las funciones que usan math.pi y math.sqrt:",
    code:
`import math

def area_circulo([1]):
    return [2].pi [3] radio ** 2

def hipotenusa(a, b):
    return math.[4](a**2 + b**2)

print(round(area_circulo(5), 2))
print(hipotenusa(3, 4))`,
    blanks: [
      { id: 1, options: ["radio", "r", "x", "n"],                   correct: "radio" },
      { id: 2, options: ["math", "m", "mt", "Math"],                correct: "math" },
      { id: 3, options: ["*", "+", "**", "/"],                      correct: "*" },
      { id: 4, options: ["sqrt", "pow", "log", "floor"],            correct: "sqrt" },
    ],
  },

  {
    id: 44, section: 7, points: 1,
    topic: "import numpy as np — array básico",
    question: "Completa el código que crea un array de numpy y calcula media y suma:",
    code:
`import numpy [1] np

arr = np.[2]([1, 2, 3, 4, 5])
print("Media:", np.[3](arr))
print("Suma: ", np.[4](arr))`,
    blanks: [
      { id: 1, options: ["as", "import", "from", "="],              correct: "as" },
      { id: 2, options: ["array", "Array", "list", "zeros"],        correct: "array" },
      { id: 3, options: ["mean", "sum", "max", "std"],              correct: "mean" },
      { id: 4, options: ["sum", "mean", "max", "min"],              correct: "sum" },
    ],
  },

  {
    id: 45, section: 7, points: 1,
    topic: "numpy — estadísticas descriptivas",
    question: "Completa el código que obtiene máximo, mínimo, desviación estándar y media:",
    code:
`import numpy as np

datos = np.array([10, 20, 30, 40, 50])
print("Máx:", np.[1](datos))
print("Mín:", np.[2](datos))
print("Std:", np.[3](datos))
print("Med:", np.[4](datos))`,
    blanks: [
      { id: 1, options: ["max", "min", "mean", "std"],              correct: "max" },
      { id: 2, options: ["min", "max", "mean", "std"],              correct: "min" },
      { id: 3, options: ["std", "var", "mean", "sum"],              correct: "std" },
      { id: 4, options: ["mean", "sum", "max", "std"],              correct: "mean" },
    ],
  },

  {
    id: 46, section: 7, points: 1,
    topic: "numpy — zeros, ones y linspace",
    question: "Completa el código que usa zeros, ones y linspace de numpy:",
    code:
`import numpy as np

ceros = np.[1]((3, 3))
unos  = np.[2]((2, 4))
rango = np.[3](0, 10, 5)
print([4].shape)`,
    blanks: [
      { id: 1, options: ["zeros", "ones", "empty", "full"],         correct: "zeros" },
      { id: 2, options: ["ones", "zeros", "full", "empty"],         correct: "ones" },
      { id: 3, options: ["linspace", "arange", "range", "array"],   correct: "linspace" },
      { id: 4, options: ["rango", "ceros", "unos", "datos"],        correct: "rango" },
    ],
  },

  {
    id: 47, section: 7, points: 1,
    topic: "math — ceil y floor",
    question: "Completa el código que usa ceil y floor y muestra los resultados:",
    code:
`import math

x = 3.7
techo = math.[1](x)
piso  = math.[2](x)
print(f"Ceil: {[3]}, Floor: {[4]}")`,
    blanks: [
      { id: 1, options: ["ceil", "floor", "round", "trunc"],        correct: "ceil" },
      { id: 2, options: ["floor", "ceil", "round", "trunc"],        correct: "floor" },
      { id: 3, options: ["techo", "piso", "x", "resultado"],        correct: "techo" },
      { id: 4, options: ["piso", "techo", "x", "resultado"],        correct: "piso" },
    ],
  },

  {
    id: 48, section: 7, points: 1,
    topic: "math — sin, cos y pi",
    question: "Completa el código que convierte grados a radianes y calcula seno y coseno:",
    code:
`import math

angulo = 30
rad = angulo [1] math.pi / 180
print(round(math.[2](rad), 4))
print(round(math.[3](rad), 4))
print(round(math.[4], 5))`,
    blanks: [
      { id: 1, options: ["*", "/", "+", "**"],                      correct: "*" },
      { id: 2, options: ["sin", "cos", "tan", "sqrt"],              correct: "sin" },
      { id: 3, options: ["cos", "sin", "tan", "log"],               correct: "cos" },
      { id: 4, options: ["pi", "e", "tau", "inf"],                  correct: "pi" },
    ],
  },

  {
    id: 49, section: 7, points: 1,
    topic: "Función propia con numpy",
    question: "Completa la función que calcula media y desviación estándar de un array:",
    code:
`import numpy [1] np

def estadisticas(numeros):
    media = np.[2](numeros)
    desv  = np.[3](numeros)
    return [4], desv

arr = np.array([85, 90, 78, 92, 88])
m, d = estadisticas(arr)
print(f"Media: {m:.1f}, Desv: {d:.1f}")`,
    blanks: [
      { id: 1, options: ["as", "import", "from", "="],              correct: "as" },
      { id: 2, options: ["mean", "std", "sum", "max"],              correct: "mean" },
      { id: 3, options: ["std", "mean", "var", "sum"],              correct: "std" },
      { id: 4, options: ["media", "desv", "numeros", "arr"],        correct: "media" },
    ],
  },

  {
    id: 50, section: 7, points: 1,
    topic: "Combinar from math import con función propia",
    question: "Completa la función de distancia euclidiana usando sqrt importado de math:",
    code:
`from math import sqrt, [1]

def distancia(x1, y1, x2, y2):
    dx = (x2 - x1) [2] 2
    dy = (y2 - y1) [3] 2
    return [4](dx + dy)

print(round(distancia(0, 0, 3, 4), 2))
print(round(pi, 4))`,
    blanks: [
      { id: 1, options: ["pi", "e", "tau", "factorial"],            correct: "pi" },
      { id: 2, options: ["**", "*", "+", "//"],                     correct: "**" },
      { id: 3, options: ["**", "*", "+", "//"],                     correct: "**" },
      { id: 4, options: ["sqrt", "pow", "math.sqrt", "abs"],        correct: "sqrt" },
    ],
  },
];
