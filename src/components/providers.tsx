'use client'

import {ThemeProvider, useTheme } from 'next-themes'
import {ReactNode} from "react";

export default function Providers({children}: {children: ReactNode}){
    return(
        <ThemeProvider
        enableSystem
        attribute='class'
        defaultTheme='system'
        disableTransitionOnChange
            >
            {children}
        </ThemeProvider>
    )
}
