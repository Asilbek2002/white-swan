import { FiCheckCircle } from "react-icons/fi";
//assets
import SevicePhoto from "../../../../assets/images/female-call-center-agent-posing-with-headphones-with-mic.jpg";
//stylesheet
import cls from "./our-service.module.scss";

function OurService() {
  return (
    <div className={cls["about-info"]}>
      <div className={cls["left-container"]}>
        <img className={cls["left-container_img"]} src={SevicePhoto} alt="" />
      </div>
      <div className={cls["right-container"]}>
        <span className={cls["small-title"]}>OUR SERVICE</span>
        <h3 className={cls.title}>
          Brokers <span>and</span> clients
        </h3>

        <div className={cls["bottom-title_container"]}>
          <div className={cls["bottom-title"]}>
            <FiCheckCircle size={30} />
            24/7 Update
          </div>
          <div className={cls["bottom-title"]}>
            <FiCheckCircle size={30} />
            Cargo Insurance
          </div>
          <div className={cls["bottom-title"]}>
            <FiCheckCircle size={30} />
            Easy Invoicing
          </div>
          <div className={cls["bottom-title"]}>
            <FiCheckCircle size={30} />
            Online Tracking
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurService;
