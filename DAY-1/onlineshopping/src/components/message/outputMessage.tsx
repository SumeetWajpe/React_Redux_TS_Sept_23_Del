import React from "react";
type OutputMessageProps = {
  message: string;
};

export default function OutputMessage(props: OutputMessageProps) {
  console.log("Output Message");
  return (
    <div>
      <label>{props.message}</label>
    </div>
  );
}
