
import Image from "../assets/test.jpeg"

import { TextField, Button, Box, Card, CardContent, Grid, Switch, Paper} from "@mui/material"
const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        
    }
};


const font =  "'Tilt Warp', cursive";
export default function Login() {
 return (
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
                        Password
                        
                        <TextField 
                        label=""
                        type="password"
                        name="password"
                        variant="outlined"
                        size="small"
                        />
                        <Box>
                       <a href="#smt" style={{textDecoration:"none", color:'rgb(0, 76, 255)', marginLeft:10}}>forgot password?</a>
                        </Box>
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
                         > Log in </Button>
                    </form>
                </Box>
            </CardContent>
        </Card>
        <Card sx={{width:400, marginTop:1, height:90}}>
            <CardContent>
                <p style={{color:"rgb(200, 200, 200)", textAlign:"center"}}>Not registered? <a href="/register" style={{textDecoration:"none", color:"rgb(0, 76, 255)", textAlign:"center"}}>Click here</a></p>
            </CardContent>
        </Card>
     </Grid>
     </Box>
</Paper>
    )
}
