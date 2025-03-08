import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { addStore, updateStore } from "../redux/storeSlice";
import { Store, StoreModalProps } from "../interfaces/Storetype";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";


const StoreModal: React.FC<StoreModalProps> = ({ open, handleClose, storeData }) => {
    const dispatch = useAppDispatch();

    const validationSchema = Yup.object().shape({
        label: Yup.string().required("Label is required"),
        city: Yup.string().required("City is required"),
        state: Yup.string().required("State is required"),
    });

    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "white",
                    boxShadow: 24,
                    p: 3,
                    borderRadius: 2,
                }}
            >
                <Typography variant="h6" mb={2}>
                    {storeData ? "Edit Store" : "Add Store"}
                </Typography>
                <Formik
                    initialValues={{
                        id: storeData ? storeData.id : "",
                        label: storeData ? storeData.label : "",
                        city: storeData ? storeData.city : "",
                        state: storeData ? storeData.state : "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        if (storeData) {
                            dispatch(updateStore(values));
                            toast.info("Store updated successfully!");
                        } else {
                            dispatch(addStore({ ...values, id: uuidv4() }));
                            toast.success("Store added successfully!");
                        }
                        handleClose();
                    }}
                >
                    {({ errors, touched, handleChange }) => (
                        <Form>
                            <Field
                                as={TextField}
                                fullWidth
                                margin="dense"
                                label="Label"
                                name="label"
                                onChange={handleChange}
                                error={touched.label && !!errors.label}
                                helperText={touched.label && errors.label}
                            />
                            <Field
                                as={TextField}
                                fullWidth
                                margin="dense"
                                label="City"
                                name="city"
                                onChange={handleChange}
                                error={touched.city && !!errors.city}
                                helperText={touched.city && errors.city}
                            />
                            <Field
                                as={TextField}
                                fullWidth
                                margin="dense"
                                label="State"
                                name="state"
                                onChange={handleChange}
                                error={touched.state && !!errors.state}
                                helperText={touched.state && errors.state}
                            />
                            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                                <Button variant="outlined" onClick={handleClose}>
                                    Cancel
                                </Button>
                                <Button type="submit" variant="contained" color="primary">
                                    {storeData ? "Update" : "Add"}
                                </Button>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Modal>
    );
};

export default StoreModal;
