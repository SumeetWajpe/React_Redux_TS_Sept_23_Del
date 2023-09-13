import React from "react";
type OutputMessageProps = {
  message: string;
};

export default function OutputMessage(props: OutputMessageProps) {
  return (
    <div>
      <label>{props.message}</label>
    </div>
  );
}
