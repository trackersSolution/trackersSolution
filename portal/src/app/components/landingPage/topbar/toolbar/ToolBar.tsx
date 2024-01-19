'use client';
import React, { FC } from 'react'
import {Theme} from '@mui/material'
import {makeStyles} from 'tss-react/mui'

const useStyles = makeStyles()((_theme: Theme) =>({
    root:{}
}));
export interface ToolBarProps {
    text?: string
}

const ToolBar: FC<ToolBarProps> = ( props ) => {
const { classes } = useStyles();

  return (
    <div>
     ToolBar
    </div>
  )
}
export default ToolBar;