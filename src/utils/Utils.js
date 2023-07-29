export const isInWatchLater = (watchLaterArray, videoId) => {
  console.log(videoId);
  console.log(typeof videoId);
  return watchLaterArray?.some(({ _id }) => _id === Number(videoId));
};

export const isInGivenPlaylist = (givenPlaylistArr, videoId) => {
  return givenPlaylistArr?.find(({ _id }) => _id === videoId);
};
