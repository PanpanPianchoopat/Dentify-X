import ModelAPI from "@/services/modelAPI";

export const useModel = (imageData) => {
  const inputData = {
    B64Image: imageData.split(/,(.*)/s)[1],
    BGRColors: [
      [255, 0, 255],
      [255, 255, 0],
    ],
    BBoxThickness: 4,
    FontThickness: 2,
    FontScale: 1.1,
    FontYOffset: -20,
    InitialFilter: false,
    ScoreThreshold: 0.8,
  };
  const response = ModelAPI.getAnalysis(inputData)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });

  return response;
};
