// src/utils/galleryTypes.ts
export interface GalleryImage {
  src: string; // Ruta de la imagen, ej: '/images/mi-imagen.jpg'
  alt: string; // Texto alternativo para accesibilidad
  width: number; // Ancho original de la imagen
  height: number; // Alto original de la imagen
  thumbnailSrc?: string; // Opcional: ruta para una miniatura si es diferente
}