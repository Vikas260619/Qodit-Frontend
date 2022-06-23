import React, { useState, useEffect } from "react";
import {
  FormControl,
  Input,
  InputLabel,
  Button,
  Container,
  InputAdornment,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { BackgroundSVG } from "../BackgroundSVG";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));
export const CareerForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setMobile] = useState("");
  const [technology, setTechnology] = useState("");
  const [description, setDescription] = useState("");
  const [upload, setFile] = useState("");

  async function submitForm() {
    const formData = {
      name,
      email,
      description,
      phone_number,
      technology,
      upload,
    };
    let result = await fetch("https://qoditdev.herokuapp.com/careerform", {
      method: "POST",
      body: formData,
    });
    alert("data has been saved");
  }

  const classes = useStyles();
  const theme = createTheme({
    root: {
      color: "#FFFFFF",
    },
    typography: {
      fontSize: "2rem",
      color: "#fff",
      allVariants: {
        color: "#fff",
      },
    },
  });

  const style = {
    form: {
      backgroundColor: "#fff",
      borderRadius: "2rem",
      padding: "0px 10px 8px 10px",
    },
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <BackgroundSVG />
      <div
        className="service-bg cover-background"
        style={{ zIndex: 1, position: " relative", paddingTop: "5rem" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center" data-aos="zoom-in">
              <h1 className="fw-light">Apply Now</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="typographyCSS" style={{paddingTop: "5rem" }}>
        <CssBaseline />
        <Container maxWidth="sm" >
          <ThemeProvider theme={theme} >
            <Typography component="div" style={style.form}>
              <form
                style={{
                  textAlign: "justify",
                  margin: "200px 54px 54px 80px ",
                  paddingTop:"30px"
                }}
              >
                <div>
                  <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-basic" className="input_label">Your Name</InputLabel>
                    <Input
                      id="standard-basic"
                      onChange={(e) => setName(e.target.value)}
                      color="secondary"
                      autoFocus={true}
                      startAdornment={
                        <InputAdornment className="input-adornment" position="start">
                          Hello! I'm
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-basic" className="input_label">Message</InputLabel>
                    <Input
                      id="standard-basic"
                      onChange={(e) => setDescription(e.target.value)}
                      color="secondary"
                      startAdornment={
                        <InputAdornment position="start">
                          I would like to apply for
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-basic" className="input_label">
                      Enter Your Email Id
                    </InputLabel>
                    <Input
                      id="standard-basic"
                      onChange={(e) => setEmail(e.target.value)}
                      color="secondary"
                      startAdornment={
                        <InputAdornment position="start">
                          You can reach me at
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-basic" className="input_label">
                      Enter Your Mobile No.
                    </InputLabel>
                    <Input
                      id="standard-basic"
                      onChange={(e) => setMobile(e.target.value)}
                      color="secondary"
                      startAdornment={
                        <InputAdornment position="start">
                          and Mobile No.
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-basic" className="input_label">
                      Technologies
                    </InputLabel>
                    <Input
                      id="standard-basic"
                      onChange={(e) => setTechnology(e.target.value)}
                      color="secondary"
                      startAdornment={
                        <InputAdornment position="start">
                          Technologies
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-basic" className="input_label">
                      Upload Resume
                    </InputLabel>
                    <input
                      onChange={(e) => setFile(e.target.files[0])}
                      type="file"
                    />
                  </FormControl>
                </div>
                <Button
                  variant="contained"
                  onClick={submitForm}
                  color="primary"
                >
                  Submit
                </Button>
              </form>
            </Typography>
          </ThemeProvider>
        </Container>
      </div>
    </div>
  );
};
