import { MousePosition } from '@react-hook/mouse-position';
import React from 'react';
import { packageFoundType } from '../helpers/types';

export const ItemPackageTooltip = ({data, mouse, isShown}: {data: packageFoundType, mouse: MousePosition, isShown: boolean}) => {

    if (!isShown) return null;
    return (
        <div 
            style={{top: mouse.y + 30, left: mouse.x + 30}} 
            className={`absolute z-50 text-white text-sm bg-gray-700 w-40 p-2 rounded flex flex-col justify-start items-center shadow`}
        >
            <h2 className="text-center">{data.name}@{data.version}</h2>
        </div>
    )
}
