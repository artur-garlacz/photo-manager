import Button from "components/ui/Button";
import Input from "components/ui/Input";

export function LoginView() {
  return (
    <form className="">
      <div
        className={"flex flex-col flex-grow md:flex-grow-0 w-full sm:w-7/12"}
      >
        <Input id={"username"} name={"username"} />

        <Input id={"password"} name={"password"} />

        <span className={"self-end my-2 text-form text-secondary"}></span>
      </div>

      <Button
        className={"self-center mt-12 w-full max-w-88"}
        variant={"primary"}
        type={"submit"}
      >
        Login
      </Button>
    </form>
  );
}