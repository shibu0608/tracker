import React,{useContext} from 'react'
import { Card, CardHeader,CardContent,Typography,Grid, Divider, List } from '@material-ui/core'
import { PennywiseContext } from '../../context/context';
import useStyles from './style';
import Form from './form/form';
import List1 from './list/list';
import InfoCard from './InfoCard';

const Main = () => {
  const classes = useStyles();
  const {balance}= useContext(PennywiseContext);
  return (
    <Card className={classes.root}>
         <CardHeader title="Penny Wise" subheader="Expense Tracking Solution"/>
         <CardContent>
            <Typography align="center" variant="h5">Total Balance Rs {balance}</Typography>
            <Typography variant="subtitle1" style={{ lineHeight:'1.5em', marginTop:'20px'}}>
                <InfoCard/>
                
            </Typography>
            <Divider className={classes.divider}/>
             <Form/>
         </CardContent>
         <CardContent className={classes.cartContent}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <List1/>
               </Grid>
            </Grid>
         </CardContent>
    </Card>
  )
}

export default Main
