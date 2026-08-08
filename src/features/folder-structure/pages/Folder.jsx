import { useState } from "react";
import File from "./File";

const folderStyle = {
  display: "flex",
  justifyContent: "flex-start",
  paddingLeft: "20px",
  flexDirection: "column",
  alignItems: "flex-start",
};

function Folder({ item }) {
  const [open, setOpen] = useState(false);

  if (!item?.isFolder) {
    return <File file={item} />;
  }

  return (
    <div style={folderStyle}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          cursor: "pointer",
          userSelect: "none",
          fontWeight: "bold",
        }}
      >
        {open ? "📂" : "📁"} {item.name}
      </div>

      {open &&
        item.children?.map((child) => <Folder key={child.id} item={child} />)}
    </div>
  );
}

export default Folder;
