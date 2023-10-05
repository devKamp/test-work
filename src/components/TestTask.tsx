import React, {FC, useState} from 'react';
import {ICollection} from "../models/ICollection";
import {Buffer} from "buffer";


interface Props {
    collections: ICollection[]
}

const toDoListDate = [
    {
        id: '1fb2d52-c24f-45a5-01bf-edc13e78c07f',
        categoryName: 'Категория 1',
        color: 'green',
    },
    {
        id: '4552731-82c-d6c0-2aaa-7ac45f4bc',
        categoryName: 'Категория 2',
        color: 'blue',
    },
    {
        id: 'fa5fe4c-36b5-6dd-d7ac-ca85e7ed3aa1',
        categoryName: 'Категория 3',
        color: 'pink',
    },
];


const TestTask: FC<Props> = ({collections}) => {

    const [data, setData] = useState(collections)

    function changeValue(inputValue: { categoryId: any; input: any; }) {
        const {categoryId, input} = inputValue;
        setData(prev =>
            prev.map(dataItem =>
                dataItem.id === categoryId ? ({
                    ...dataItem,
                    value: input
                }) : dataItem)
        )
    }

    const arrChange = data.map((dataItem) => {
        return (
            <div style={{display: 'flex'}}>
                <div style={{width: '7%'}}>{dataItem.name}</div>
                <input onChange={e => changeValue({categoryId: dataItem.id, input: e.target.value})}
                       defaultValue={dataItem.value}/>
            </div>
        )
    })

    return (
        <div>
            {arrChange}
            <button onClick={() => console.log(data)}> getModel()</button>
        </div>
    )

};

export default TestTask;