import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

import styles from "./AcountItem.module.scss";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://khoinguonsangtao.vn/wp-content/uploads/2022/09/anh-gai-xinh-toc-dai-deo-kinh-2k7.jpg"
        alt="error"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Ng Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
        </h4>
        <span className={cx("username")}>
            A
        </span>
      </div>
    </div>
  );
}

export default AccountItem;
