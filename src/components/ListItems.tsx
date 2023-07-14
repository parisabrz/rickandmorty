import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { ReactNode } from 'react';

interface Props {
  icon: ReactNode,
  primary: string
}

function ListItems({icon, primary} : Props) {
  return (<>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          {icon}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={primary} />
    </ListItem>
    <Divider variant="inset" component="li" />
  </>
  )
}

export default ListItems