import classes from "./HeaderLogos.module.scss";
import Image from "next/image";

// Logos

const HeaderLogos = () => {
  return (
    <div className={classes.HeaderLogos}>
      <ul className={classes.HeaderLogos__list}>
        <div className={classes.HeaderLogos__logo1}>
          <Image
            src="/archetape-logo.png"
            alt="Archetape Logo"
            width={193}
            height={44}
          />
        </div>
        <div className={classes.HeaderLogos__logo2}>
          <Image
            src="/cisco-logo.png"
            alt="Cisco Logo"
            width={85}
            height={45}
          />
        </div>
        <div className={classes.HeaderLogos__logo3}>
          <Image
            src="/worklete-logo.png"
            alt="Worklete Logo"
            width={298}
            height={43}
          />
        </div>
        <div className={classes.HeaderLogos__logo4}>
          <Image
            src="/rolfson-logo.png"
            alt="Rolfson Oil Logo"
            width={215}
            height={43}
          />
        </div>
      </ul>
    </div>
  );
};

export default HeaderLogos;
