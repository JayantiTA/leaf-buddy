import create from 'zustand';

const useStore = create((set) => ({
  selectedImage: null,
  setSelectedImage: (image) => set({ selectedImage: image }),
}));

export default useStore;
