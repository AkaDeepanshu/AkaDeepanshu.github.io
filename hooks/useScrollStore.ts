import { create } from "zustand";

type ScrollStore = {
    activeChapter: number;
    progress: number;
    setActiveChapter: (index: number) => void;
    setProgress: (progress: number) => void;
}

export const useScrollStore = create<ScrollStore>((set)=>({
    activeChapter: 0,
    progress: 0,
    setActiveChapter: (index) => set({ activeChapter: index }),
    setProgress: (progress) => set({ progress }),
}));