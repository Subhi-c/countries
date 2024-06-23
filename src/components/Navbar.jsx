function Navbar({ Darkbg, setDarkbg }) {
  // const [className, setClassName] = useState("defaultClass");
  // function handleDarkBg() {
  //   setClassName((prevClassName) =>
  //     prevClassName === "defaultClass" ? "newClass" : "defaultClass"
  //   );
  //   const value = !Darkbg;
  //   setDarkbg(value);
  // }
  return (
    <>
      <div className="className navBar p-5">
        <h2>Where in the world?</h2>
        <button className="DarkBtn">Dark Mode</button>
      </div>
    </>
  );
}
export default Navbar;
