import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

const styles = (theme: Theme) =>
  createStyles({
    wrapper: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      boxShadow: '0 0 10px rgba(0,0,0,0.4)',
      width: 300,
      height: 450,
      padding: 80
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
    button: {
      margin: theme.spacing.unit,
      width: '100%',
      height: 50
    },
    input: {
      display: 'none',
    },
  });

export interface Props extends WithStyles<typeof styles> {}

interface State {
  name: string,
  redirect: boolean
}

class OutlinedTextFields extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      name: '',
      redirect: false
    };
  }

  updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: event.target.value,
    });
  };
  
  login = () => {
    document.cookie = `username=`+this.state.name;
    var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    window.alert(cookieValue);
    this.setState({
      redirect: true
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />;
    }
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-name"
            label="Username"
            className={classes.textField}
            fullWidth={true}
            placeholder="CarpeDiem"
            onChange={this.updateName}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            className={classes.textField}
            fullWidth={true}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
          />
          <Button
            onClick={this.login}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Log In
          </Button>
        </form>
      </div>
    );
  }
}

(OutlinedTextFields as React.ComponentClass<Props>).propTypes = {
  classes: PropTypes.object.isRequired,
} as any;


export default withStyles(styles)(OutlinedTextFields);
