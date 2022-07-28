import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { viewPollRequest } from "../actions";
import { useEffect } from "react";

const ViewPoll = () => {
  const dispatch = useDispatch();
  const viewPollSelector = useSelector(
    (state) => state && state.viewPollState.data
  );
  console.log(viewPollSelector, "viewpollselectttt");
  const viewPollData = () => {
    dispatch(viewPollRequest());
  };

  useEffect(() => {
    dispatch(viewPollRequest());
  }, []);
  return (
    <>
      <Card className="flex flex-wrap justify-items-center justify-center mt-9">
        {viewPollSelector &&
          viewPollSelector.data.map((val) => {
            return (
              <>
                <CardContent className="w-1/4 border-1 m-4 shadow-lg">
                  <Typography
                    sx={{ fontSize: 16, fontWeight: "Bold" }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {val.title}
                    <hr />
                    {val.options.map((item) => {
                      return (
                        <>
                          <CardContent className="flex">
                            <Typography>
                              {item.option}
                            </Typography>
                          </CardContent>
                        </>
                      );
                    })}
                  </Typography>
                </CardContent>
              </>
            );
          })}
      </Card>
    </>
  );
};

export default ViewPoll;
