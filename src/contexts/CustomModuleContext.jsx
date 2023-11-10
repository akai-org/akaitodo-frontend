import { createContext } from "react";

export const CustomModuleContext = createContext({});

const Sth = () => {
    return (<div>blabla</div>)
}

export const customModuleInitialContext = {
    component: Sth
};