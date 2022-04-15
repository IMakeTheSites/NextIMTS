import classes from "./Call.module.scss";

const Call = () => {
  return (
    <div className={classes.Call}>
      <h1 className={classes.Call__heading}>
        Independent
        <br /> <span>consultants</span>
      </h1>
      <span className={classes.Call__arrowLeft}>
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33 17L1 17"
            stroke="#3AB982"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 33L1 17L17 1"
            stroke="#3AB982"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <span className={classes.Call__arrowRight}>
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 17L33 17"
            stroke="#3AB982"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 1L33 17L17 33"
            stroke="#3AB982"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <div className={classes.Call__callUs}>
        <p className={classes.Call__callUs__text}>
          Call Us Today for FREE Consultations
        </p>
        <button className={classes.Call__callUs__button}>
          Call +1 (407)-985-2747
        </button>
      </div>
    </div>
  );
};

export default Call;
