import { TextField, Button, Box, Card, CardContent, Grid, Switch, Paper} from "@mui/material"
import Image from "../assets/test.jpeg"
const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        
    }
};
function Register() {
    const font =  "'Tilt Warp', cursive";
    return(
    <Paper style={styles.paperContainer}>
        <Box style={{backgroundColor:'rgba(0, 0, 0, 0.6)'}}>
        <Grid container 
    direction="column" 
    alignItems="center" 
    justifyContent="center" 
    sx={{minHeight:"100vh"}}>  
    <Box>
       <h1 style={{fontFamily:font}}>TutorMatcher</h1> 
    </Box>
         
        <Card sx={{width:400}}>
                <CardContent>
                    <Box sx= {{
                        '& .MuiTextField-root': {
                        m:1,
                        width: '90%'
                        }
                    }}>
                    <form noValidate autoComplete='off'>
                    <Box style={{paddingTop:7}}>
                        Email
                        <TextField
                        label=""
                        name="email"
                        variant="outlined"
                        size="small"
                        />
                    </Box>

                    <Box style={{paddingTop:7}}>
                        Username
                        <TextField
                        label=""
                        name="name"
                        variant="outlined"
                        size="small"
                        />
                    </Box>

                    <Box style={{paddingTop:7}}>
                        Password
                        
                        <TextField 
                        label=""
                        type="password"
                        name="password"
                        variant="outlined"
                        size="small"
                        />
                    
                        </Box>
                        <Box style={{paddingTop:7}}>
                        Confirm Password
                        
                        <TextField 
                        label=""
                        type="password"
                        name="password_two"
                        variant="outlined"
                        size="small"
                        />
                        
                        
                        </Box>
                        
                        <Box>
                        <Switch name="Tutor" defaultChecked /> 
                        Are you a tutor?
                        </Box>


                         <Button 
                        type="submit" 
                        variant="contained" 
                        size="large" 
                        sx={{width: '90%', m:1, marginTop:3, height:35}}
                         > Sign Up </Button>
                        

                    </form>
                </Box>
            </CardContent>
        </Card>
        
     </Grid>
     </Box>
</Paper>
    )

}
export default Register;