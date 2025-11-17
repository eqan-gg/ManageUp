import React, { useState } from "react";
import AcceptedTasks from "./AcceptedTasks";
import NewTasks from "./NewTasks";
import CompletedTasks from "./CompletedTasks";
import FailedTasks from "./FailedTasks";

function Tasklist({ data }) {
  const [AcceptedState, setAcceptedState] = useState("false");

  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto w-full mt-10 py-5 flex gap-5 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-gray-800"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.newTask) {
          return <NewTasks key={idx} data={elem} setAcceptedState={setAcceptedState} />;
        }
        if (elem.active) {
          return <AcceptedTasks key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompletedTasks key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTasks key={idx} data={elem} />;
        }
      })}
    </div>
  );
}

export default Tasklist;
