import React from "react";
import { finishLoading, startLoading } from "@features/loading/loading";
import { useAppDispatch } from "@hooks/reduxHooks";
import { APP_NAME } from "env";
import { CustomButton } from "@components/atoms";
import X_ICON from "@assets/x.svg";
import O_ICON from "@assets/o.svg";

const Home = () => {
  const dispatch = useAppDispatch();
  const loadingTest = () => {
    dispatch(startLoading());
    const myTimeout = setTimeout(endLoading, 5000);

    function endLoading() {
      dispatch(finishLoading());
      clearTimeout(myTimeout);
    }
  };

  return (
    <div
      style={{
        width: "690px",
        margin: "auto",
        border: "1px solid black",
        display: "flex",
        marginTop: "50px",
        gap: "5px",
      }}
    >
      <CustomButton
        textIcon={X_ICON}
        variant="darkBlue"
        onClick={loadingTest}
      />
      <CustomButton
        textIcon={O_ICON}
        variant="darkBlue"
        onClick={loadingTest}
      />
      <CustomButton
        textIcon={X_ICON}
        variant="darkBlue"
        onClick={loadingTest}
      />
    </div>
  );
};

export default Home;
