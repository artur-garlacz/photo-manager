//Hooks
// import { useTranslation } from "react-i18next";

//Types

export function NotFoundView() {
  //   const { t } = useTranslation(["errors", "common"]);

  return (
    <div className={"flex flex-col h-full bg-gray-100"}>
      <div className={"flex flex-col flex-grow items-center text-center"}>
        <h2 className={"font-semibold mt-8"}>{"errors:notFoundTitle"}</h2>

        <span className={"text-xs mt-12"}>{"errors:notFoundDescription"}</span>
      </div>
    </div>
  );
}

export default NotFoundView;
