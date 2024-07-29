import React from 'react'

export default function Button(props) {
  const{text, func} = props
  return (
    <button onClick={func} className="px-8 py-4 mx-auto rounded-md border-solid border-2 border-blue-400 bg-slate-950 blueShadow">
      <p>{text}</p>
    </button>
  );
}