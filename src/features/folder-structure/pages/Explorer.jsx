import explorerData from "../data/explorerData";
import Folder from "./Folder";
const containerStyle = {
  display: "flex",
  justifyContent: "flex-start",
};

function Explorer({ data }) {
  return (
    <div style={containerStyle}>
      <Folder item={explorerData} />
    </div>
  );
}

export default Explorer;
