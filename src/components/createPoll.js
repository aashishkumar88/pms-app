import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { FormControl, Link, Button } from "@mui/material";
import { createPollRequest } from "../actions/index";

const CreatePoll = () => {
  const [createPoll, setCreatePoll] = useState({
    title: "",
    options: [" "],
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const createPollSelector = useSelector(
    (state) => state && state.createPollState
  );
  const CreateData = (e, key) => {
    setCreatePoll({ ...createPoll, [key]: e.target.value });
  };

  useEffect(() => {
    if (createPollSelector.isSuccess) {
      if (createPollSelector.data.error === 0) {
        navigate("/gDashboard");
      }
    }
  }, [createPollSelector]);

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    if (createPoll.title && createPoll.options) {
      dispatch(createPollRequest({ ...createPoll }));
    }
  };

const CreateOption=(e,key)=>{
  setCreatePoll({...createPoll.options,[key]:e.target.value})
}

  const handlePoll = (e, index) => {
    const list = { ...createPoll.options };
    // setCreatePoll({...createPoll.options,list[index]:e.target.value});
  };
  console.log(createPoll, "XXXXX");
  return (
    <>
      <div className="w-96 mt-[3%] ml-[35%] border-2 	px-12 py-5">
        <h1 className="text-3xl mb-[5%] ml-[17%]">Create New Poll</h1>
        <FormControl>
          <form onSubmit={handleCreateSubmit}>
            <TextField
              fullWidth
              label="title"
              type="text"
              sx={{ marginBottom: "12px", ml: "10px" }}
              variant="outlined"
              onChange={(e) => CreateData(e, "title")}
            />
            {[' '].map((val, index) => {
              return (
                <div key={index}>
                  <TextField
                    fullWidth
                    label="option"
                    value={val}
                    type="text"
                    sx={{ marginBottom: "6px", ml: "10px" }}
                    variant="outlined"
                    onChange={(e) => CreateOption(e, "options")}
                  />
                  <button onClick={(e) => handlePoll(index)}>ADD</button>
                </div>
              );
            })}

            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{ mt: "12px", ml: "10px" }}
            >
              Create New Poll
            </Button>
          </form>
        </FormControl>
      </div>
    </>
  );
};

export default CreatePoll;
