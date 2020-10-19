import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CountDown from './CountDown.js';

const Dashboard = (props) => {
  console.log(props.connected);

  if (props.connected) {
    return (
      <Container style={{ height: '300px'}}>
        <Container style={{ height: '120px' }}></Container>
        <Paper style={{ opacity: 0.8, paddingLeft: 18, paddingRight: 18 }}>
            <Grid container direction="row" alignItems="center" spacing={2}>
              <Grid item xs={2}>
                <Grid container direction="row" spacing={2} justify="center">
                  <Grid item>
                    <Typography color="textSecondary">Active Miles:</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{props.nbMiles}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={8}>
                <Grid container direction="row" spacing={2} justify="center">
                  <Grid item>
                    <Typography color="textSecondary">Time before next mile expiration:</Typography>
                  </Grid>
                  <Grid item>
                    <CountDown expiration="2020-10-20" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <Button onClick={props.openViewMiles}>View Miles</Button>
              </Grid>
            </Grid>
        </Paper>
      </Container>
    )
  } else {
    return (
      <Grid container direction="column" style={{ height: '300px'}}>
        <Grid item xs={12}>
          <Button variant="contained" size="medium" color="secondary" style={{ marginTop: '125px' }}
            disableElevation
            onClick={() => {
              props.handleConnected();
            }}>
            connect to wallet
          </Button>
        </Grid>
      </Grid>
    )
  }
}

export default Dashboard