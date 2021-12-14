import React from "react";
import "./HeaderOption.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { Avatar } from "@material-ui/core";

function HeaderOption({ avatar, Icon, title }) {
  const user = useSelector(selectUser);

  return (
    <div className="headerOption">
      {Icon && (
        <Icon
          className="headerOption
            __icon"
        />
      )}

      {avatar && (
        <Avatar className="headerOption__icon">{user?.email[0]}</Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
