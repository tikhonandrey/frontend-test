import * as React from "react";

export interface TestComponentProps {
  title: string;
}

export const TestComponent: React.FunctionComponent<TestComponentProps> = ({
  title
}) => <div>Test, {title}!</div>;
