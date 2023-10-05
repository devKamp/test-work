import {ParamValue} from "./IParams";

interface Color  {

}

export interface Model {
    paramValues: ParamValue[]
    colors?: Color[];
}