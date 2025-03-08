import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Snackbar,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Gsynergy Logo V2 Long Description.svg";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async(values, { setSubmitting }) => {
      setSubmitting(true);

      if (values.password === "1234" && values.email === "ritikgalgate38@gmail.com") {
         localStorage.setItem("auth", values.email);
         setTimeout(()=>{
        navigate("/stores");
        setToastMessage("Logged in successfully!");
       },1000)
      } else {
        setToastMessage("Invalid email or password!");
        setToastOpen(true);
      }

      setSubmitting(false);
    },
  });

  return (
    <Container maxWidth="xs">
      {/* Company Logo */}
      <Box display="flex" justifyContent="center" mt={4}>
        <img src={logo} alt="Company Logo" width={120} height={120} />
      </Box>

      <Box mt={3} p={3} boxShadow={3} borderRadius={2}>
        <Typography variant="h5" textAlign="center" mb={3}>
          Sign In
        </Typography>

        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
            formik.handleSubmit(); // Call Formik's submit handler
          }}
        >
          <TextField
            fullWidth
            label="Email"
            name="email"
            variant="outlined"
            margin="normal"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            margin="normal"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
            Sign In
          </Button>
        </form>
      </Box>

      <Snackbar
        open={toastOpen}
        autoHideDuration={3000}
        onClose={() => setToastOpen(false)}
        message={toastMessage}
      />
    </Container>
  );
};

export default SignIn;
