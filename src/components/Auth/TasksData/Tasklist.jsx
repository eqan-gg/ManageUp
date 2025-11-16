import React from "react";
import AcceptedTasks from "./AcceptedTasks";
import NewTasks from "./NewTasks";
import CompletedTasks from "./CompletedTasks";
import FailedTasks from "./FailedTasks";
import { useState } from "react";

function Tasklist({data}) {

  const [AcceptedState, setAcceptedState] = useState("false")

  
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto w-full mt-10 py-5 flex items-center justify-flex-start gap-5 flex-nowrap" >
          {data.tasks.map((elem,idx)=> {  

            if(elem.newTask){
              return    <NewTasks key={idx} data={elem} setAcceptedState={setAcceptedState} />
            }
            if(elem.active){
              return <AcceptedTasks key={idx} data={elem} />
            }
            if(elem.completed){
              return <CompletedTasks key={idx} data={elem} />
            }
            if(elem.failed){  
              return <FailedTasks key={idx} data={elem} /> }
            


            })}
      

        {/* <AcceptedTasks />
        <NewTasks />  
        <CompletedTasks />
        <FailedTasks  /> */}
      
    </div>
  );
}

export default Tasklist;
