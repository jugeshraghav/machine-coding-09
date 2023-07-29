import { useData } from "../contexts/DataContext";
import { PlaylistModal } from "../modals/PlaylistModal";

export const Playlist = () => {
  const { state } = useData();

  return (
    <>
      <div>My PlayList</div>
      <PlaylistModal />
    </>
  );
};
