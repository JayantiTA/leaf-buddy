import create from "zustand";

const useStore = create((set) => ({
  selectedImage: null,
  imageBase64: null,
  detectionResult: null,
  confidence: 0,
  plantName: "",
  setSelectedImage: (image) => set({ selectedImage: image }),
  setImageBase64: (image) => set({ imageBase64: image }),
  setDetectionResult: (result) => set({ detectionResult: result }),
  setConfidence: (confidence) => set({ confidence: confidence }),
  setPlantName: (plantName) => set({ plantName: plantName }),
}));

export default useStore;
