import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { resetSnackbar } from "../features/snackbar/snackbar";
import { useEffect } from "react";
function SnackBarListener() {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const { message, variant } = useSelector((state) => state.setSnackBar);

  useEffect(() => {
    console.log(message, variant);
    if (message.length > 0 && variant.length > 0) {
      enqueueSnackbar(message, { variant });
    }
    dispatch(resetSnackbar());
  }, [message, variant, enqueueSnackbar]);

  return null;
}

export default SnackBarListener;
