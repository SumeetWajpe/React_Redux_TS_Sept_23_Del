// export function Message() {
//   return <h1>Hello</h1>;
// }

// export var Message = function () {
//   return <h1>Hello</h1>;
// };

type MessageProps = {
  msg: string;
};

export var Message = (props: MessageProps) => <h1>{props.msg}</h1>;
