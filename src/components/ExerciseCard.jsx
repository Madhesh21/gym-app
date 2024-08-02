import React, { useState } from 'react'

export default function ExerciseCard(props) {

  const{exercise,i} = props
  const [setsCompleted, setSetsCompleted] = useState(0)

  function handleSetsIncrement(){
    setSetsCompleted((setsCompleted + 1) % 6)
  }

  return (
    <div className="bg-slate-950 flex flex-col gap-4 p-4 rounded-md sm:flex-wrap border border-solid border-green-400">
      <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4">
        <h4 className="text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400">
          0{i + 1}
        </h4>
        <h2 className="capitalize whitespace-nowrap truncate max-w-full flex-1 text-lg sm:text-xl md:text-2xl sm:text-center text-green-400">
          {exercise.name.replaceAll("_", " ")}
        </h2>
        <p className="capitalize text-slate-400 text-sm">{exercise.type}</p>
      </div>

      <div className="flex flex-col">
        <h3 className="text-sm text-slate-400">Muscle Groups</h3>
        <p className="capitalize">{exercise.muscles.join(" & ")}</p>
      </div>

      <div className='flex flex-col bg-slate-950 rounded gap-2'>
        {exercise.description.split("___").map((val) => {
          return <div>{val}</div>;
        })}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2">
        {["reps", "rest", "tempo"].map((info) => {
          return (
            <div
              key={info}
              className="flex flex-col p-2 w-full rounded border-[1.25px] border-solid border-green-400"
            >
              <h3 className="capitalize text-slate-400 text-sm">
                {info === "reps" ? `${exercise.unit}` : info}
              </h3>
              <p className="font-medium">{exercise[info]}</p>
            </div>
          );
        })}
        <button
          onClick={handleSetsIncrement}
          className="flex flex-col p-2 w-full rounded border-[1.25px] border-solid border-green-900 duration-200 hover:border-green-400 "
        >
          <h3 className="text-slate-400 text-sm capitalize">Sets Completed</h3>
          <p className="font-medium">{setsCompleted} / 5</p>
        </button>
      </div>
    </div>
  );
}
