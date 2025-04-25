import { ListItemText, MenuItem, MenuList, Typography } from "@mui/material";
import { useState } from "react";

type DataType = 'action1' | 'action2';

const StateProcessing = () => {
    const [data, setData] = useState<DataType>();

    const handleClick = (actionType: DataType) => {
        if (actionType === 'action1') {
            setData(actionType);
        }

        if (actionType === 'action2') {
            setData(actionType);
        }
    }

    return (
        <>
            <Typography>{ data }</Typography>
            <MenuList>
                <MenuItem onClick={() => setData('action1')}>
                    <ListItemText>
                        Action 1
                    </ListItemText>
                </MenuItem>
                <MenuItem onClick={() => setData('action2')}>
                    <ListItemText>
                        Action 2
                    </ListItemText>
                </MenuItem>
            </MenuList>
        </>
    )
};

export default StateProcessing;