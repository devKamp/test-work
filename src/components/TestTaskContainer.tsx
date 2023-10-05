import React, {FC} from 'react';
import TestTask from "./TestTask";
import {Param} from "../models/IParams";
import {Model} from "../models/IModel";
import {ICollection} from "../models/ICollection";


const params: Param[] = [
    {
        id: 1,
        name: 'Назначение',
    }, {
        id: 2,
        name: 'Длина',

    }
]
const model: Model = {
    paramValues: [
        {
            paramId: 1,
            value: 'Повседневное'
        },
        {
            paramId: 2,
            value: 'Макси'
        }
    ]
}


const collections: ICollection[] = params.map((y) => Object.assign(y, model.paramValues.find((x) => x.paramId === y.id)))


const TestTaskContainer: FC = () => {
    return (
        <div>
            <TestTask collections={collections}/>
        </div>
    );
};

export default TestTaskContainer;