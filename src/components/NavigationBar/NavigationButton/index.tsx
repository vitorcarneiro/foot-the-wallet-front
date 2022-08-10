import PropTypes from "prop-types";
import {
  BsGridFill,
  BsGrid,
  BsQuestionCircle,
  BsFillFileBarGraphFill,
  BsFileBarGraph,
  BsPeopleFill,
  BsPeople,
} from "react-icons/bs";
import { IoWallet, IoWalletOutline } from "react-icons/io5";
import {
  RiLightbulbFill,
  RiLightbulbLine,
  RiSettings3Fill,
  RiSettings3Line,
} from "react-icons/ri";
import ButtonForNav from "./style";

function NavButton({ isActive, type }: { isActive: boolean; type: string }) {
  const iconSize = 30;
  const menu = {
    name: "error",
    reactIcon: <BsQuestionCircle size={iconSize} />,
  };

  switch (type) {
    case "home":
      menu.name = "Home";
      menu.reactIcon = isActive ? (
        <BsGridFill size={iconSize} />
      ) : (
        <BsGrid size={iconSize} />
      );
      break;

    case "wallet":
      menu.name = "Wallet";
      menu.reactIcon = isActive ? (
        <IoWallet size={iconSize} />
      ) : (
        <IoWalletOutline size={iconSize} />
      );
      break;

    case "light":
      menu.name = "Light mode";
      menu.reactIcon = isActive ? (
        <RiLightbulbFill size={iconSize} />
      ) : (
        <RiLightbulbLine size={iconSize} />
      );
      break;

    case "settings":
      menu.name = "Settings";
      menu.reactIcon = isActive ? (
        <RiSettings3Fill size={iconSize} />
      ) : (
        <RiSettings3Line size={iconSize} />
      );
      break;

    case "graphs":
      menu.name = "Graph charts";
      menu.reactIcon = isActive ? (
        <BsFillFileBarGraphFill size={iconSize} />
      ) : (
        <BsFileBarGraph size={iconSize} />
      );
      break;

    case "friends":
      menu.name = "Graph charts";
      menu.reactIcon = isActive ? (
        <BsPeopleFill size={iconSize} />
      ) : (
        <BsPeople size={iconSize} />
      );
      break;

    default:
      break;
  }

  return (
    <ButtonForNav isActive={isActive}>
      {menu.reactIcon}
      <div>
        <span>{menu.name}</span>
      </div>
      <div>
        <div />
        <div />
      </div>
    </ButtonForNav>
  );
}
NavButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};

export default NavButton;
