import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { Typography } from "@mui/material";
import CreatePostButton from '../common/createPostButton';
import './component.css';
function ProfileHeader(){
    return(
        <Stack sx={{padding: 2}} direction="row" spacing={40}>
<Stack sx={{padding: 2}} direction="row" spacing={2} >
      
    <Avatar sx={{ bgcolor: deepOrange[500], padding: 2 }}>NS</Avatar>
        <Typography 
            variant="h5" 
            textAlign={"left"} 
            padding={2} 
            color="Black"   //"#ffba00"
        >Username
        </Typography>
        
</Stack>
<CreatePostButton />
</Stack>
    )
}
export default ProfileHeader;