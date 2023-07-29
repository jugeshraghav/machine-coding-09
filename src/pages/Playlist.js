import { useData } from "../contexts/DataContext";
import { PlaylistModal } from "../modals/PlaylistModal";

export const Playlist = () => {
  const { state } = useData();

  return (
    <>
      <h1 className="font-bold text-lg">My PlayList</h1>
      <PlaylistModal />
    </>
  );
};
