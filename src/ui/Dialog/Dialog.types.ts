import { PropsWithChildren } from "react";

export interface IProps extends PropsWithChildren<{}> {
    open: boolean;
    onClose: () => void;
}