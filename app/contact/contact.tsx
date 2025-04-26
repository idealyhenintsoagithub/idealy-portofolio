import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { Control, useForm, SubmitHandler } from 'react-hook-form';
import { useCreateMessageMutation } from "@/lib/features/message/messageAPI";

const ContactMe = () => {
  const theme = useTheme();
  const mode = useMemo(() => theme.palette.mode, [theme]);
  const { register, handleSubmit } = useForm<any>();

  const [
    createMessage,
    { data: messageData, isLoading },
  ] = useCreateMessageMutation();

  const onSubmit: SubmitHandler<any> = (data: any) => {
    if (data) {
      createMessage({ body: data });
    }
  };

  return (
    <Box sx={{
      position: 'absolute',
      width: '600px',
      height: '500px',
      zIndex: 105,
      top: '-25%',
      marginLeft: '80px',
      p: 2,
      pt: 4,
    }}>
      <Typography variant="h5">
        <FormattedMessage id="contact.contactMe" />
      </Typography>
      <Box sx={{ display: "flex", pt: 4, alignItems: "center", height: "80%" }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          alignContent: "space-around",
          justifyContent: "space-between",
          width: "50%", 
        }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              <Box><FormattedMessage id="contact.question" /></Box>
              <Box><FormattedMessage id="contact.project" /></Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{ pt: 2 }}
            >
              Tel: (+261)342440768
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{ width: "50%"}}
          component="form"
          onSubmit={
            handleSubmit(onSubmit)
          }
        >
          <Box sx={{ py: 1 }}>
            <Typography>
              <FormattedMessage id="textfield.name"/>
            </Typography>
            <TextField
              id="filled-basic"
              variant="filled"
              sx={{ width: "100%" }}
              {...register("username")}
            />
          </Box>
          <Box sx={{ py: 1 }}>
            <Typography>
              <FormattedMessage id="textfield.email"/>
            </Typography>
            <TextField
              id="filled-basic"
              variant="filled"
              sx={{ width: "100%" }}
              {...register("email")}
            />
          </Box>
          <Box sx={{ py: 1 }}>
            <Typography>
              <FormattedMessage id="textfield.message"/>
            </Typography>
            <TextField
              id="filled-textarea"
              placeholder="Placeholder"
              multiline
              rows={5}
              variant="filled"
              sx={{ width: "100%" }}
              {...register("contents")}
            />
          </Box>
          <Button
            variant="contained"
            type="submit"
            disabled={isLoading}
            sx={{
              width: "100%",
              textTransform: "none",
              fontSize: "1.3rem",
              color: "#2196f3"
            }}
          >
            { isLoading ? (<Typography>Sending...</Typography>) : (<FormattedMessage id="action.submitMessage" />) }
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactMe;