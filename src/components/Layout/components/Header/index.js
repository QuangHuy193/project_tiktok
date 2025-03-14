import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faEllipsisVertical,
  faLanguage,
  faKeyboard,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { Children, useEffect, useState } from "react";
// import 'tippy.js/dist/tippy.css'

import Button from "~/components/Button";
import { wrapper as PopperWrapper } from "~/components/Popper";
import images from "~/assets/images";
import styles from "./Header.module.scss";
import AccountItem from "../AccountItem";
import Menu from "~/components/Popper/Menu";

const cx = classNames.bind(styles);

const MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English", // United States, Canada, Australia, etc.
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt", // Vietnam
        },
        {
          type: "language",
          code: "fi",
          title: "Suomi", // Finland
        },
        {
          type: "language",
          code: "no",
          title: "Norsk", // Norway
        },
        {
          type: "language",
          code: "se",
          title: "Svenska", // Sweden
        },
        {
          type: "language",
          code: "dk",
          title: "Dansk", // Denmark
        },
        {
          type: "language",
          code: "ch",
          title: "Schweizerdeutsch", // Switzerland (Swiss German)
        },
        {
          type: "language",
          code: "nl",
          title: "Nederlands", // Netherlands
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and Help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  const handleOnChangeMenu = (menuItem) => {
    //
    console.log(menuItem);
  };

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img src={images.logo} alt="Tiktok" />

        <Tippy
          interactive={true}
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex={-1} {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search accounts and video" spellCheck="false" />

            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>

            <FontAwesomeIcon className={cx("spinner")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("action")}>
          <Button text>Upload</Button>
          <Button primary>Log in</Button>

          <Menu items={MENU_ITEM} onChange={handleOnChangeMenu}>
            <button className={cx("more-btn")}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
