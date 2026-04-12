export type Chapter = {
  id: string;
  trigger: string;
  model: {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: number;
  };
  camera: {
    position: [number, number, number];
  };
};

export const CHAPTERS: Chapter[] = [
  {
    id: "hero",
    trigger: "#section-hero",
    model: {
      position: [1.5, 0, 0],
      rotation: [-0.3, -0.99, 0.34],
      scale: 1.3,
    },
    camera: {
      position: [0, 0, 4],
    },
  },
  {
    id: "story",
    trigger: "#section-story",
    model: {
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: 1.3,
    },
    camera: { position: [0, 0, 3] },
  },
  {
    id: "arsenal",
    trigger: "#section-arsenal",
    model: {
      position: [0, 0, 0],
      rotation: [0.5, 0.8, 0.785],
      scale: 1.5,
    },
    camera: { position: [0, 0, 3.5] },
  },
  {
    id: "experience",
    trigger: "#section-experience",
    model: {
      position: [-1.8, 0, 0],
      rotation: [0.1, 0.4, 0.2],
      scale: 1.2,
    },
    camera: { position: [0, 0, 3.5] },
  },
  {
    id: "work",
    trigger: "#section-work",
    model: {
      position: [1.8, 1, 0],
      rotation: [-0.5, 1.2, 0.6],
      scale: 1.0,
    },
    camera: { position: [0, 0, 4.5] },
  },
  {
    id: "contact",
    trigger: "#section-contact",
    model: {
      position: [0, -0.5, 0],
      rotation: [0, 0, 0],
      scale: 1.3,
    },
    camera: { position: [0, 0, 3] },
  },
];
