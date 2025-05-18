import { Box, Button, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { Control, useForm, SubmitHandler } from 'react-hook-form';
import { useCreateMessageMutation } from "@/lib/features/message/messageAPI";

const ContactMe = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('md'));
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
    <Box>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          <FormattedMessage id="contact.question" />
          <FormattedMessage id="contact.project" />
        </Typography>
        <Typography variant="h5" py={1}>
          <FormattedMessage id="contact.contactMe" />
        </Typography>
        <Typography pb={2}>Tél: (+261)34 24 40 768</Typography>
      </Box>
      <Box
        component="form"
        onSubmit={
          handleSubmit(onSubmit)
        }
      >
        <Box sx={{ display: 'flex', width: '100%' }}>
          <Box sx={{ py: 1, pr: 1, width: '50%' }}>
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
          <Box sx={{ py: 1, pl: 1, width: '50%' }}>
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
            textTransform: "none",
            fontSize: "1.3rem",
          }}
        >
          { isLoading ? (<Typography>Sending...</Typography>) : (<FormattedMessage id="action.submitMessage" />) }
        </Button>
      </Box>
    </Box>
  );
}

export default ContactMe;