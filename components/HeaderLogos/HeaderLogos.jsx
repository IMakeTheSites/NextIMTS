import { Box, Grid, Grid2 } from '@mui/material';
import classes from './HeaderLogos.module.scss';
import Image from 'next/image';

// Logos

const HeaderLogos = () => {
  return (
    <Box
      className={classes.HeaderLogos}
      sx={{
        display: 'flex',
        bgcolor: 'text.disabled',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 200,
      }}
    >
      <Grid2
        container
        spacing={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid2
          item
          xs={12}
          sm={6}
          md={4}
          display="flex"
          justifyContent="center"
        >
          {/* <ul className={classes.HeaderLogos__list}> */}
          {/* <div className={classes.HeaderLogos__logo1}> */}
          {/* <Grid2
              display="flex"
              justifyContent="center"
              alignItems="center"
              size={{ xs: 6, md: 4 }}
            > */}
          <Image
            src="/archetape-logo.png"
            alt="Archetape Logo"
            width={193}
            height={44}
          />
        </Grid2>
        {/* </div> */}
        {/* <div className={classes.HeaderLogos__logo2}> */}
        {/* <Grid2 display="flex" justifyContent="center" alignItems="center"> */}
        <Grid2
          item
          xs={12}
          sm={6}
          md={4}
          display="flex"
          justifyContent="center"
        >
          <Image
            src="/cisco-logo.png"
            alt="Cisco Logo"
            width={85}
            height={45}
          />
        </Grid2>
        {/* </div> */}

        {/* <div className={classes.HeaderLogos__logo3}> */}
        {/* <Grid2 display="flex" justifyContent="center" alignItems="center"> */}
        <Grid2
          item
          xs={12}
          sm={6}
          md={4}
          display="flex"
          justifyContent="center"
        >
          <Image
            src="/worklete-logo.png"
            alt="Worklete Logo"
            width={298}
            height={43}
          />
        </Grid2>
        {/* </div> */}
        <Grid2
          item
          xs={12}
          sm={6}
          md={4}
          display="flex"
          justifyContent="center"
        >
          <Image
            src="/rolfson-logo.png"
            alt="Rolfson Oil Logo"
            width={215}
            height={43}
          />
        </Grid2>
        {/* </ul> */}
      </Grid2>
    </Box>
  );
};

export default HeaderLogos;
