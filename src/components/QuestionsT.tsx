import {Autocomplete, TextField, Grid,Button, Paper} from "@mui/material"
import Box from '@mui/material/Box';
import Image from '../assets/classroom.jpg'

var subjects = [{subject:"Calculus"}, {subject:"English"}, {subject:"French"}]
const font =  "'Tilt Warp', cursive";
const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        
    }
};
export default function Questions() {
    return (
    <Paper style={styles.paperContainer}>
        <Box style={{backgroundColor:'rgba(0, 0, 0, 0.7)'}}>
            
            <Grid container 
                
                direction="column" 
                alignItems="center" 
                justifyContent="center" 
                sx={{minHeight:"100vh"}}>
                
                    <Box style={{
                    width: 500
                    }}>
                    <h1 style={{fontFamily:font,fontSize:30, textAlign:"center"}}>What will you help with today?</h1>  
                    </Box>
                       <form>
                        
                
                            <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                           
                            options={subjects}
                            sx={{ width: 300 }}
                            multiple
                            
                            
                           
                            getOptionLabel={(option) => option.subject}
                            renderInput={(params) => (
                                <TextField
                                  {...params}
                                  variant="standard"
                                  label="Subjects"
                                  placeholder="More subjects?"
                                />
                              )}
                             />
                            
                
                        
                        <Box
                        m={1}
                        //margin
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        >
                        
                        <Button variant="contained" color="primary" sx={{ height: 40 }}>
                            Help a student
                        </Button>

                        </Box>
                </form>
            </Grid>
           
        </Box>
    </Paper>

    )
} 