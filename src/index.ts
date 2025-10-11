import { SeasonController } from "./controller/SeasonController.js";

export const handler = async () => {
  try {
    const seasonController = new SeasonController();
    const seasons = await seasonController.getSeasons();
    const currentSeason = seasonController.getCurrentSeason(seasons);
    return {
      statusCode: 200,
      body: JSON.stringify({ currentSeason }),
    };
  } catch (error) {
    console.error("Error in handler:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "서버 내부 오류가 발생했습니다.",
        error: error instanceof Error ? error.message : String(error),
      }),
    };
  }
};
