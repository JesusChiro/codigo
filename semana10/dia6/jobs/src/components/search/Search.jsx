import style from "./Search.module.scss";
import PropTypes from "prop-types";

const Search = ({ jobs, setFilteredJobs }) => {
  const handleInputChange = (event) => {
    const { value } = event.currentTarget;
    const filteredJobs = jobs.filter(
      (job) => job.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredJobs(filteredJobs);
  };
  return (
    <div className={style.search}>
      <picture className={style.picture}>
        <img src="/search.png" alt="" className={style.icon} />
      </picture>
      <input
        type="text"
        className={style.input}
        onChange={handleInputChange}
        placeholder="Search jobs"
      />
    </div>
  );
};

Search.propTypes={
  jobs: PropTypes.array,
  setFilteredJobs: PropTypes.func.isRequired,
}

export default Search;
