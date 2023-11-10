import PageLink from "./pageLink";

const DashboardToggle = () => {
  return (
    <div className="flex justify-center">
      <PageLink url={"/gallery"} content={"Gallery"} />
      <PageLink url={"/catalog"} content={"Catalog"} />
    </div>
  );
};

export default DashboardToggle;
