import GameSavingLoader from './index';

(async () => {
  try {
    await GameSavingLoader.load();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
})();
