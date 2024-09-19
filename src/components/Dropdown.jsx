const Dropdown = ({ title, opt, changeCategoryFunc }) => {
  return (
    <>
      <div className="select z-0">
        <select
          defaultValue="0"
          name="format"
          onChange={changeCategoryFunc}
          className="z-0"
        >
          <option value="0" disabled>
            {title}
          </option>
          {opt.map((item, i) => {
            return (
              <option key={i} value={item}>
                {item.toUpperCase()}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default Dropdown;
