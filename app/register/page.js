'use client'
import { Box, Typography } from '@mui/material';
import { UserAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import { Google, Logout } from '@mui/icons-material';
export default function Register() {
    const { user, googleSignIn } = UserAuth();
    const router = useRouter();

    useEffect(() => {
      if (user) {
        router.push('/');
      }
    }, [user, router]);
  
    const handleGoogleSignIn = async () => {
      try {
        await googleSignIn();
      } catch (error) {
        console.log("error")
      }
    };
    return (
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        sx={{ minHeight: '100vh'}}
        gap={5}
      >
        <Typography 
            variant="h2" 
            sx={{
                display: 'flex',
                flexDirection: 'row',
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '2rem',

            }}
            >
            How strong is your resume?
        </Typography>
        <IconButton
            onClick={handleGoogleSignIn}
            sx={{
                border: '1px solid black',
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'row',
                gap: 1,
                transition: '0.5s',
                '&:hover': {
                    bgcolor: 'lightgray', 
                    color: 'black',
                },
            }}
        >
            <Google/>
            <Typography>Sign in with Google</Typography>
        </IconButton>
      </Box>
    )
}