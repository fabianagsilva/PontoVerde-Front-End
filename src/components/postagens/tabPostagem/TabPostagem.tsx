import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listaPostagem/ListaPostagem';
import './TabPostagem.css';
import { Box } from '@mui/material';
import quemSomos from './../../../paginas/quemSomos/QuemSomos';
import QuemSomos from './../../../paginas/quemSomos/QuemSomos';


function TabPostagem() {

    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }

    return (
        <>
            <TabContext value={value}>
                <AppBar position="static" className='tab'>
                    <Tabs centered indicatorColor="secondary" onChange={handleChange}>
                        <Tab label="Todas as postagens" value="1"/>
                        <Tab label="Sobre nós" value="2" />
                    </Tabs>
                </AppBar>

                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>

                <TabPanel value="2">
                <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <QuemSomos />
                    </Box>
                </TabPanel>
            </TabContext>
        </>
    );
}
export default TabPostagem;