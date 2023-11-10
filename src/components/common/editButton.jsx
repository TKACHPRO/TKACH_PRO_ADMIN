import CommonButton from "./commonButton";

const EditButton = ({ onClick }) => {
  return <CommonButton className="bg-emerald-700 mr-2" content={"Edit"} onClick={onClick} />;
};

export default EditButton;
