export const promptStyleItems = [
  { label: "cinematic", value: "cinematic" },
  { label: "realistic", value: "realistic" },
  { label: "oil painting", value: "oil painting" },
  { label: "digital art", value: "digital art" },
  { label: "cartoon", value: "cartoon" },
];

export const imageRatioItems = [
  { label: "Square", value: "1:1" },
  { label: "Landscape", value: "16:9" },
  { label: "Portrait", value: "9:16" },
  { label: "Standard", value: "4:3" },
  { label: "Ultra Wide", value: "21:9" },
];

export const imageRatios = {
  "1:1": { width: 1024, height: 1024 },
  "16:9": { width: 1920, height: 1080 },
  "9:16": { width: 1080, height: 1920 },
  "4:3": { width: 1280, height: 960 },
  "21:9": { width: 2520, height: 1080 },
};

export const qualityItems = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
  { label: "Ultra", value: "ultra" },
  { label: "Maximum", value: "max" },
];

export const aiModels = [
  { label: "Flux", value: "flux" },
  { label: "Kontext", value: "kontext" },
  { label: "Turbo", value: "turbo" },
];

export const promptDefaultValue = {
  prompt: "",
  style: "",
  model: "",
  size: "",
  quality: "",
};
