# Changelog
> Cambios entre versiones del proyecto

## 0.0.2 - Base (30/08/2026)
- Crear botones:
    - Pausa/ Resumir
    - Resetear Contador
- Separar tipos de Contadores en componente propio
- Eliminar función redundante `calcNewFinishTime()` que hacía lo mismo que `calcFinishTime`
- Añadir CSS para:
    - Ocultar tipos de tiempo de sesión mientras avanza
    - Ocultar botón de Iniciar mientras avanza
    - Ocultar botones de pausa y resetear antes de iniciar

## 0.0.1 - Base (28/08/2026)
- Crear interfaz Timer
- Crear lógica de intervalos de tiempo
- Crear lógica de conversión de minutos, segundos y milisegundos
- Crear componente displayTime => muestraContador a partir de variable tipo Timer
- Crear sección Contador con temporizadores de 40 minutos, 25 minutos y 10 minutos