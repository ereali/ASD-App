function Label(props) {
  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
        color: props.textColor,
        borderRadius: "17px",
        textAlign: "center",
        verticalAlign: "center",
        display: "inline-flex",
        flexDirection: "row",
        padding: "15px",
        fontSize: "50px",
      }}
    >
      <p>{props.name}</p>
    </div>
  );
}

export default Label;
