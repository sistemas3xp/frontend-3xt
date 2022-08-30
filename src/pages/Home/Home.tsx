import { Button } from "@mui/material";
import React from "react";
import { finishLoading, startLoading } from "@features/loading/loading";
import { useAppDispatch } from "@hooks/reduxHooks";
import { APP_NAME } from "env";

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
      <Button onClick={loadingTest}>start</Button>
    </div>
  );
};

export default Home;
