function FilterButtons({ typeFilter, setSearchParams, currentFilter }) {
  function setTypeClass(type) {
    if (type == "simple") {
      return "hover:bg-[#E17654]  hover:text-white";
    } else if (type == "luxury") {
      return "hover:bg-[#161616] hover:text-white";
    } else {
      return "hover:bg-[#115E59] hover:text-white";
    }
  }
  function setActiveTypeClass(type) {
    if (type == "simple") {
      return "bg-[#E17654]  text-white";
    } else if (type == "luxury") {
      return "bg-[#161616] text-white";
    } else {
      return "bg-[#115E59] text-white";
    }
  }
  return typeFilter ? (
    <button
      className={`${
        currentFilter === typeFilter
          ? setActiveTypeClass(typeFilter)
          : `bg-[#FFEAD0] `
      } transition-all px-3 rounded-full ${setTypeClass(typeFilter)} `}
      onClick={() => setSearchParams(`?type=${typeFilter}`)}>
      {typeFilter}
    </button>
  ) : (
    <button
      className="underline hover:font-bold"
      onClick={() => setSearchParams(``)}>
      Clear All
    </button>
  );
}

export default FilterButtons;
