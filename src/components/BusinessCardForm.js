// src/components/BusinessCardForm.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, MenuItem, InputLabel, Select, FormControl, Grid, Box, Slider } from '@mui/material';
import BusinessCardPreview from './BusinessCardPreview';

const BusinessCardForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();
  const [logoFileName, setLogoFileName] = useState(''); // State for logo file name
  const [formData, setFormData] = useState({}); // Initialize formData to hold form inputs
  const [logoPreview, setLogoPreview] = useState(null); // State for logo preview (data URL)

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result); // Set the logo preview (if needed)
      };
      reader.readAsDataURL(file); // Read the file as a data URL
      setLogoFileName(file.name); // Set the logo file name to display on the button
      setFormData((prev) => ({ ...prev, logo: reader.result })); // Update formData with logo
    }
  };

  const onSubmitForm = (data) => {
    const completeData = { ...data, logo: logoPreview }; // Combine form data with logo data
    setFormData(completeData); // Update formData with complete data
    onSubmit(completeData); // Submit data to the parent component
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('name')}
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  {...register('email')}
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  {...register('company')}
                  label="Company Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  {...register('linkedin')}
                  label="LinkedIn URL"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('jobTitle')}
                  label="Job Title"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  {...register('phone')}
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  {...register('website')}
                  label="Website"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  {...register('twitter')}
                  label="Twitter URL"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" component="label" fullWidth>
                  {logoFileName ? `Change Logo: ${logoFileName}` : "Upload Logo"}
                  <input type="file" hidden accept="image/*" onChange={handleFileChange} />
                </Button>
              </Grid>

              {/* Font Size Sliders */}
              <Grid item xs={12}>
                <h4>Font Size for Name</h4>
                <Slider
                  defaultValue={20}
                  min={10}
                  max={30}
                  valueLabelDisplay="on"
                  onChange={(e, value) => setFormData(prev => ({ ...prev, nameFontSize: `${value}px` }))}
                />
              </Grid>

              <Grid item xs={12}>
                <h4>Font Size for Other Info</h4>
                <Slider
                  defaultValue={16}
                  min={10}
                  max={30}
                  valueLabelDisplay="on"
                  onChange={(e, value) => setFormData(prev => ({ ...prev, infoFontSize: `${value}px` }))}
                />
              </Grid>

              {/* Template, Color, Font, QR Code */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Template</InputLabel>
                  <Select {...register('template')} label="Template">
                    <MenuItem value="classic">Classic</MenuItem>
                    <MenuItem value="modern">Modern</MenuItem>
                    <MenuItem value="minimal">Minimal</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('color')}
                  label="Card Background Color"
                  type="color"
                  fullWidth
                  margin="normal"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Font</InputLabel>
                  <Select {...register('font')} label="Font">
                    <MenuItem value="Arial">Arial</MenuItem>
                    <MenuItem value="Verdana">Verdana</MenuItem>
                    <MenuItem value="Georgia">Georgia</MenuItem>
                    <MenuItem value="Times New Roman">Times New Roman</MenuItem>
                    <MenuItem value="Courier New">Courier New</MenuItem>
                    <MenuItem value="Tahoma">Tahoma</MenuItem>
                    <MenuItem value="Trebuchet MS">Trebuchet MS</MenuItem>
                    <MenuItem value="Impact">Impact</MenuItem>
                    <MenuItem value="Comic Sans MS">Comic Sans MS</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>QR Code Content</InputLabel>
                  <Select {...register('qrCodeContent')} label="QR Code Content">
                    <MenuItem value="email">Email</MenuItem>
                    <MenuItem value="phone">Phone</MenuItem>
                    <MenuItem value="website">Website</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit" fullWidth>
                  Generate Card
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>

        {/* Right Side: Generated Card Preview */}
        <Grid item xs={12} md={6}>
          {logoPreview && (
            <BusinessCardPreview data={{ 
              ...formData, 
              logo: logoPreview 
            }} />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default BusinessCardForm;
