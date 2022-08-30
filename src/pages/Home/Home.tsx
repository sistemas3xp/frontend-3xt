import React from "react";
import { finishLoading, startLoading } from "@features/loading/loading";
import { useAppDispatch } from "@hooks/reduxHooks";
import { APP_NAME } from "env";
import { CustomButton } from "@components/atoms";

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
    <div>
      {APP_NAME}
      <CustomButton text="start" onClick={loadingTest}></CustomButton>
    </div>
  );
};

export default Home;
