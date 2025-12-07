import { Console } from "as-wasi/assembly";

export function _start(): void {
  Console.log(" Hello, WebAssembly with WASI! ");
}

// Provide an internal abort handler so the runtime does not request env.abort from the host.
export function abort(
  message: string | null,
  fileName: string | null,
  line: i32,
  column: i32
): void {
  const msg = message ? message : "";
  const file = fileName ? fileName : "";
  Console.error(
    "abort: " +
      msg +
      " " +
      file +
      " " +
      line.toString() +
      ":" +
      column.toString()
  );
}
