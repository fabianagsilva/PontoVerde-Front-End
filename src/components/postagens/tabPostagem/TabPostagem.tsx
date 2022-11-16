import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listaPostagem/ListaPostagem';
import './TabPostagem.css';
import { Box } from '@mui/material';


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
                        <Tab label="Sobre mim" value="2" />
                    </Tabs>
                </AppBar>

                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>

                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo-sobre">Quem somos</Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, facilis voluptas. Sequi illo consequatur voluptatum veniam totam, accusamus quis. Fugiat laudantium sint ullam enim hic eveniet sapiente corrupti dolore perferendis. </Typography>
                </TabPanel>
            </TabContext>
        </>
    );
}
export default TabPostagem;