import Bosses from "./Bosses.js";
(async () => {
    const bosses = new Bosses();
    await bosses.load();
    bosses.mapDataToCards();
  })();
