import React from 'react';
import TaskCard from './TaskCard';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import { COMPLETED } from 'const/Task';
import { makeStyles } from '@material-ui/core/styles';
import { UiConst } from 'const/ui';

const Completed = ({
  completed,
  editCompleted,
  deleteCompleted,
  archiveCompleted
}) => {
  const completedList = completed.map(todo => (
    <TaskCard
      key={todo.id}
      id={todo.id}
      title={todo.title}
      onEditTitle={editCompleted}
      onTaskClick={archiveCompleted}
      onDelete={deleteCompleted}
      btnType={COMPLETED}
    />
  ));
  const useStyles = makeStyles(theme => ({
    root: {
      minWidth: UiConst.CARD_MIN_WIDTH
    }
  }));
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid item>
          <div className={'task-title'}>
            <Typography variant="h6">Completed</Typography>
          </div>
          <div>
            <List>{completedList}</List>
          </div>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Completed;