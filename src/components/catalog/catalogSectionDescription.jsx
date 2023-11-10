import EditButton from "../common/editButton";
import { useState } from "react";
import updateCatalogSectionDescription from "@/api/updateCatalogSectionDescription";

const CatalogSectionDescription = ({ id, description }) => {
  const [inputText, setInputText] = useState("");
  const [descriptionText, setDescriptionText] = useState(description);

  const handleUpdate = async () => {
    const descriptionUpdated = await updateCatalogSectionDescription(id, inputText);
    if (descriptionUpdated) {
      setDescriptionText(inputText);
      setInputText("");
    }
  };

  return (
    <div className="flex mb-2 border-b items-center ">
      <h3 className="mr-auto font-bold text-xl max-w-1/2">Description: {descriptionText}</h3>
      <input
        onChange={(e) => setInputText(e.target.value)}
        type="text"
        className="h-5 w-42 border rounded-sm mx-2 text-dark p-1"
        value={inputText}
      />

      <EditButton onClick={() => handleUpdate()} />
    </div>
  );
};

export default CatalogSectionDescription;
