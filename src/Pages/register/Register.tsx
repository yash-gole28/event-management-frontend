import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Grid from '@mui/material/Grid2'; // Correct import
import { TextField, Button, Typography, Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// Define your Zod schema for validation
const schema = z.object({
    firstName: z.string()
        .min(3, 'First name must be at least 3 characters long')
        .max(30, 'First name cannot exceed 30 characters'),
    middleName: z.string().optional(),
    lastName: z.string().min(1, 'Last name is required'),
    username: z.string()
        .min(1, 'Username must be at least 1 character long')
        .max(30, 'Username cannot be more than 30 characters'),
    email: z.string()
        .email('Please provide a valid email address'),
    password: z.string()
        .min(6, 'Password must be at least 6 characters long')
        .regex(/[0-9]/, 'Password must contain at least one digit')
        .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
    confirmPassword: z.string()
        .min(6, 'Confirm Password must be at least 6 characters long'),
    dob: z.string().optional(),
    gender: z.string()
        .nonempty("Gender is required"),
    phoneNumber: z.string()
        .length(10, 'Phone number must be exactly 10 characters long')
        .optional(),
    addressLine1: z.string().optional(),
    addressLine2: z.string().optional(),
    postalCode: z.string().optional()
}).superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
        ctx.addIssue({
            path: ['confirmPassword'],
            message: 'Passwords must match',
            code: z.ZodIssueCode.custom
        });
    }
});

const today = dayjs();

const shouldDisableDateAfterToday = (date: Dayjs) => date.isAfter(today, 'day')

const Register = () => {
    const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    });

    const handleDateChange = (date: Dayjs | null) => {
        setValue('dob', date ? date.format('YYYY-MM-DD') : '');
    };

    const onSubmit = (data: any) => {
        console.log(data);
        // You can send data to your API here
    };

    return (
        <Box sx={{
            maxWidth: 600,
            mx: 'auto',
            my: 4,
            p: 3,
            borderRadius: '10px',
            backgroundColor: '#ffff',
            boxShadow: '2px 2px 2px #f0f0f0 inset, -2px -2px 2px #a19d9d inset',
            transition: 'box-shadow 0.2s ease-in-out',
            ':hover': {
                boxShadow: '4px 4px 4px #f0f0f0 inset, -4px -4px 4px #a19d9d inset'
            }
        }}>
            <Typography variant="h4" gutterBottom align="center">
                Register
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            label="First Name"
                            fullWidth
                            {...register('firstName')}
                            error={!!errors.firstName}
                        />
                        <Typography
                            variant="body2"
                            color="error"
                            sx={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                height: '24px'
                            }}
                        >
                            {(errors.firstName as { message?: string })?.message}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            label="Middle Name"
                            fullWidth
                            {...register('middleName')}
                            error={!!errors.middleName}
                        />
                        <Typography
                            variant="body2"
                            color="error"
                            sx={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                height: '24px'
                            }}
                        >
                            {(errors.middleName as { message?: string })?.message}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            label="Last Name"
                            fullWidth
                            {...register('lastName')}
                            error={!!errors.lastName}
                        />
                        <Typography
                            variant="body2"
                            color="error"
                            sx={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                height: '24px'
                            }}
                        >
                            {(errors.lastName as { message?: string })?.message}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            label="Username"
                            fullWidth
                            {...register('username')}
                            error={!!errors.username}
                        />
                        <Typography
                            variant="body2"
                            color="error"
                            sx={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                height: '24px'
                            }}
                        >
                            {(errors.username as { message?: string })?.message}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            label="Email"
                            type="email"
                            fullWidth
                            {...register('email')}
                            error={!!errors.email}
                        />
                        <Typography
                            variant="body2"
                            color="error"
                            sx={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                height: '24px'
                            }}
                        >
                            {(errors.email as { message?: string })?.message}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            label="Password"
                            type="password"
                            fullWidth
                            {...register('password')}
                            error={!!errors.password}
                        />
                        <Typography
                            variant="body2"
                            color="error"
                            sx={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                height: '24px'
                            }}
                        >
                            {(errors.password as { message?: string })?.message}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            label="Confirm Password"
                            type="password"
                            fullWidth
                            {...register('confirmPassword')}
                            error={!!errors.confirmPassword}
                        />
                        <Typography
                            variant="body2"
                            color="error"
                            sx={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                height: '24px'
                            }}
                        >
                            {(errors.confirmPassword as { message?: string })?.message}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Date of Birth"
                                value={dayjs(getValues('dob'))}
                                onChange={handleDateChange}
                                // renderInput={(params:any) => <TextField fullWidth {...params} />}
                                shouldDisableDate={shouldDisableDateAfterToday}
                            />
                        </LocalizationProvider>

                        <Typography
                            variant="body2"
                            color="error"
                            sx={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                height: '24px'
                            }}
                        >
                            {(errors.dob as { message?: string })?.message}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControl fullWidth error={!!errors.gender}>
                            <InputLabel>Gender</InputLabel>
                            <Select
                                label="Gender"
                                {...register('gender')}
                                defaultValue=""
                            >
                                <MenuItem value="">Select</MenuItem>
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                                <MenuItem value="others">Others</MenuItem>
                            </Select>
                            <Typography
                                variant="body2"
                                color="error"
                                sx={{
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    height: '24px'
                                }}
                            >
                                {(errors.gender as { message?: string })?.message}
                            </Typography>
                        </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            label="Phone Number"
                            fullWidth
                            {...register('phoneNumber')}
                            error={!!errors.phoneNumber}
                        />
                        <Typography
                            variant="body2"
                            color="error"
                            sx={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                height: '24px'
                            }}
                        >
                            {(errors.phoneNumber as { message?: string })?.message}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            label="Address Line 1"
                            fullWidth
                            {...register('addressLine1')}
                            error={!!errors.addressLine1}
                        />
                        <Typography
                            variant="body2"
                            color="error"
                            sx={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                height: '24px'
                            }}
                        >
                            {(errors.addressLine1 as { message?: string })?.message}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            label="Address Line 2"
                            fullWidth
                            {...register('addressLine2')}
                            error={!!errors.addressLine2}
                        />
                        <Typography
                            variant="body2"
                            color="error"
                            sx={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                height: '24px'
                            }}
                        >
                            {(errors.addressLine2 as { message?: string })?.message}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            label="Postal Code"
                            fullWidth
                            {...register('postalCode')}
                            error={!!errors.postalCode}
                        />
                        <Typography
                            variant="body2"
                            color="error"
                            sx={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                height: '24px'
                            }}
                        >
                            {(errors.postalCode as { message?: string })?.message}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default Register;
