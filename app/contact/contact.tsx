"use client";

import { Box, Button, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { Control, useForm, SubmitHandler } from 'react-hook-form';
import { useCreateMessageMutation } from "@/lib/features/message/messageAPI";
import CustomTextInput from "@/core/components/CustomTextInput";
import CustomButton from "@/core/components/CustomButton";

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
        <Typography variant="h4" sx={{ fontWeight: "bold", pb: 1 }}>
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
        sx={{
          ' .MuiFormControl-root.MuiTextField-root': {
            width: '100%',
          },
        }}
      >
        <Box sx={{ display: 'flex', width: '100%' }}>
          <Box sx={{ py: 1, pr: 1, width: '50%' }}>
            <Typography>
              <FormattedMessage id="textfield.name"/>
            </Typography>
            <CustomTextInput sx={{ bgcolor: theme.palette.secondary.main }} />
          </Box>
          <Box sx={{ py: 1, pl: 1, width: '50%' }}>
            <Typography>
              <FormattedMessage id="textfield.email"/>
            </Typography>
            <CustomTextInput sx={{ bgcolor: theme.palette.secondary.main }} />
          </Box>
        </Box>
        <Box sx={{ py: 1 }}>
          <Typography>
            <FormattedMessage id="textfield.message"/>
          </Typography>
          <CustomTextInput multiline rows={5} sx={{ bgcolor: theme.palette.secondary.main }} />
        </Box>
        <CustomButton variant="contained" onClick={() => {}}>
          { isLoading ? (<Typography>Sending...</Typography>) : (<FormattedMessage id="action.submitMessage" />) }
        </CustomButton>
      </Box>
    </Box>
  );
}

export default ContactMe;