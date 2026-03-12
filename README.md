# Chat en Tiempo Real – React + Vue + Socket.io

## Descripción

Este proyecto implementa una aplicación simple de **chat en tiempo real** utilizando **Socket.io**.
Se desarrollaron dos implementaciones frontend diferentes:

- **React (Vite + TypeScript)**
- **Vue 3 (Vite + TypeScript + Composition API)**

Ambas aplicaciones se conectan al **mismo servidor Socket.io** y pueden intercambiar mensajes en tiempo real.

El objetivo de este proyecto es demostrar:

- Arquitectura moderna de frontend
- Comunicación en tiempo real con WebSockets
- Manejo de estado
- Diseño basado en componentes
- Buenas prácticas de desarrollo

---

# Estructura del Proyecto

```
realtime-chat-socketio
│
├── react-chat
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   ├── store
│   │   └── types
│
├── vue-chat
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   ├── stores
│   │   └── types
│
└── socket-server
```

---

# Tecnologías Utilizadas

## Aplicación React

- React
- Vite
- TypeScript
- Zustand (manejo de estado)
- Socket.io-client

## Aplicación Vue

- Vue 3
- Composition API
- Pinia (manejo de estado)
- TypeScript
- Socket.io-client

## Backend

- Node.js
- Socket.io

---

# Funcionalidades

Ambas aplicaciones permiten:

- Envío de mensajes en tiempo real
- Recepción inmediata de mensajes
- Indicador de estado de conexión
- Historial de mensajes durante la sesión
- Reconexión automática del socket

Mejoras adicionales implementadas:

- Scroll automático al último mensaje
- Persistencia de mensajes usando `localStorage`
- Generación automática de nombre de usuario
- Limpieza correcta de listeners del socket

---

# Arquitectura

El proyecto sigue una **arquitectura basada en separación de responsabilidades**.

Cada aplicación frontend se divide en:

### Componentes

Responsables de la interfaz de usuario.

Ejemplos:

- ChatWindow
- MessageList
- MessageInput
- ConnectionStatus

### Servicios

Encapsulan integraciones externas.

Ejemplo:

`socket.ts` maneja toda la lógica de WebSockets.

### Manejo de Estado

Se utiliza un estado centralizado para evitar mezclar lógica con la interfaz.

- React → Zustand
- Vue → Pinia

### Tipos

Interfaces de TypeScript reutilizables dentro de la aplicación.

Ejemplo:

```
Message {
  id: string
  user: string
  text: string
}
```

---

# Cómo Ejecutar el Proyecto

## 1. Iniciar el servidor Socket

```
cd socket-server
npm install
node server.js
```

El servidor se ejecutará en:

```
http://localhost:3001
```

---

## 2. Ejecutar React Chat

```
cd react-chat
npm install
npm run dev
```

URL por defecto:

```
http://localhost:5173
```

---

## 3. Ejecutar Vue Chat

```
cd vue-chat
npm install
npm run dev
```

URL por defecto:

```
http://localhost:5174
```

---

# Prueba del Chat en Tiempo Real

Abre ambas aplicaciones simultáneamente:

React → `localhost:5173`
Vue → `localhost:5174`

Los mensajes enviados desde una aplicación aparecerán inmediatamente en la otra.

---

# Decisiones Técnicas

### Servicio de Socket

La lógica de Socket.io se encapsula en un servicio (`socket.ts`) para:

- Evitar duplicación de listeners
- Mantener una única instancia del socket
- Mejorar mantenibilidad

### Estado Centralizado

El estado se gestiona mediante:

- **Zustand** en React
- **Pinia** en Vue

Esto permite separar la lógica de negocio de la interfaz.

### Limpieza de Listeners

Todos los listeners del socket se eliminan correctamente usando:

```
socket.off(event, handler)
```

Esto evita problemas de memoria o listeners duplicados.

---

# Posibles Mejoras

Algunas mejoras que podrían implementarse en el futuro:

- Autenticación de usuarios
- Timestamps en los mensajes
- Indicador de usuario escribiendo
- Persistencia de mensajes en base de datos
- Canales o salas de chat

---

# Autor

Implementación de prueba técnica para demostrar arquitectura frontend moderna utilizando **React, Vue 3 y Socket.io**.
