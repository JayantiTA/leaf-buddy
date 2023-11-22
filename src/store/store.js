import create from "zustand";

const useStore = create((set) => ({
  selectedImage: null,
  detectionResult: null,
  confidence: 0,
  plantName: "",
  setSelectedImage: (image) => set({ selectedImage: image }),
  setDetectionResult: (result) => set({ detectionResult: result }),
  setConfidence: (confidence) => set({ confidence: confidence }),
  setPlantName: (plantName) => set({ plantName: plantName }),
}));

export default useStore;
