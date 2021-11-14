import { Container, Fab, Modal } from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import MenuIcon from "@mui/icons-material/Menu";
import useStyles from "./styles";
import { showModal } from "../redux/actions";
import CreatePostModal from "../components/CreatePostModal";
import { useDispatch } from "react-redux";
import ListMenu from "../components/Menu";

function Main() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = React.useState(false);

  const openCreatePostModal = React.useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <Container maxWidth="lg">
      <CreatePostModal />
      <Fab className={classes.fab} onClick={openCreatePostModal}>
        <AddIcon />
      </Fab>
      <Fab className={classes.menu} onClick={handleOpenMenu}>
        <MenuIcon />
      </Fab>
      <Modal open={openMenu} onClose={handleCloseMenu}>
        <ListMenu />
      </Modal>
    </Container>
  );
}

export default Main;
