import Button from "./Button";

function Empty({ children }) {
  return (
    <>
      <div className="empty">{children}</div>

      <Button />
    </>
  );
}

export default Empty;
