
import { useState } from 'react';
import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import { Box } from "@mui/material";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import { GetCharactersByName } from "../../graphql/queries";
import { Characters } from "../type";
import { getData } from "../../app/slice";

function SearchBox() {
    const dispatch = useDispatch();

    const [searchText, setSearchText] = useState<string>('')
    const { loading, error, data } = useQuery<Characters>(GetCharactersByName, { variables: { name: searchText} });

    const handleClickBtn = () => {
        if (data) dispatch(getData(data))
    }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                width: '100%'
            }}
        >
            <Paper
            className='search-box'
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 500 }}
                
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Character"
                    inputProps={{ 'aria-label': 'search character' }}
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e)=>     {if(e.key === 'Enter') {
                        handleClickBtn();   }     
                    }}
                />
                <IconButton onClick={handleClickBtn} type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <Box sx={{ p: '10px' }}>
                    {loading ? <CircularProgress size={24} /> : <FaceRetouchingNaturalIcon />}
                </Box>
            </Paper>
            {error && <Stack sx={{ width: '70%', marginTop: '30px' }} spacing={2}>
                <Alert severity="error">{error.message}</Alert>
            </Stack>}
        </Box>
    )
}

export default SearchBox