import * as React from "react";

export interface DetailViewProps {
  id: string;
}

export const DetailView: React.FunctionComponent<DetailViewProps> = ({
  id
}) => {
  console.log(id);
  return <div>Detail View</div>;
};
