import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

interface FormInput {
  name: string;
  email: string;
  message: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log('clicked')
    console.log(data);
    // Add your logic to handle form submission
    
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          marginTop: "20px",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            {...register("name")} 
            error={!!errors.name}
            helperText={errors.name?.message}
            aria-invalid={errors.name ? "true" : "false"}
            required
            sx={{ marginBottom: "20px" }}
          />

          <TextField
            label="Email"
            fullWidth
            margin="normal"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            aria-invalid={errors.email ? "true" : "false"}
            required
            sx={{ marginBottom: "20px" }}
          />

          <TextField
            label="Message"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            {...register("message")}
            error={!!errors.message}
            helperText={errors.message?.message}
            aria-invalid={errors.message ? "true" : "false"}
            required
            sx={{ marginBottom: "20px" }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: "20px" }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ContactForm;
